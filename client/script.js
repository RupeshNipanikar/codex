import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');
const userInput = form.querySelector("textarea").value.trim();
 // Ensures proper selection

let loadInterval;

// Loading animation
function loader(element) {
    element.textContent = '';

    loadInterval = setInterval(() => {
        element.textContent += '.';
        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}

// Typing effect for bot responses
function typeText(element, text) {
    let index = 0;
    let interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

// Generate unique ID
function generateUniqueId() {
    return `id-${Date.now()}-${Math.random().toString(16)}`;
}

// Create chat bubble
function chatStripe(isAi, value, uniqueId = "") {
    return `
        <div class="wrapper ${isAi ? 'ai' : ''}">
            <div class="chat">
                <div class="profile">
                    <img src="${isAi ? bot : user}" alt="${isAi ? 'bot' : 'user'}" />
                </div>
                <div class="message" id="${uniqueId}">${value}</div>
            </div>
        </div>
    `;
}

// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = form.querySelector("textarea").value.trim();
    if (!userInput) {
        alert("Please enter a prompt.");
        return;
    }

    chatContainer.innerHTML += chatStripe(false, userInput);
    form.reset();

    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const messageDiv = document.getElementById(uniqueId);
    loader(messageDiv);

    try {
        const response = await fetch('https://codex-t76u.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: userInput })
        });

        clearInterval(loadInterval);
        messageDiv.innerHTML = " ";

        if (response.ok) {
            const data = await response.json();
            const botResponse = data.bot?.trim() || "No response";
            typeText(messageDiv, botResponse);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        messageDiv.innerHTML = "Error retrieving response";
        alert(error.message);
    }
};


// Event listeners
form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e);
    }
});

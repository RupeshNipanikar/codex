# Codex – AI-Powered Chat Application

Codex is an AI-powered chat application that integrates the OpenAI API to provide intelligent, conversational responses through a clean and interactive user interface.

The project demonstrates full-stack development by combining a modern frontend with a Node.js backend to communicate with an AI language model.

## 🚀 Live Demo

**[Try Codex](https://codex-livid-omega.vercel.app/)**

## ✨ Features

- **AI-Powered Conversations:** Generate intelligent responses using the OpenAI API.
- **Interactive Chat Interface:** Communicate with the AI through a conversational interface.
- **Full-Stack Architecture:** Separate frontend and backend applications.
- **API Integration:** Connect the frontend to the backend for AI-powered responses.
- **Environment Configuration:** Keep API credentials separate from application source code.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript, Vite |
| Backend | Node.js, Express.js |
| AI Integration | OpenAI API |
| Development Tools | Git, GitHub, VS Code |

## 📁 Project Structure

```text
codex/
│
├── client/          # Frontend application
│
├── server/          # Backend application
│
└── .gitignore       # Git ignored files
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/RupeshNipanikar/codex.git
```

### 2. Navigate to the project

```bash
cd codex
```

### 3. Install dependencies

Install the frontend and backend dependencies separately:

```bash
cd client
npm install
```

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create a `.env` file in the backend directory and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your actual API key.

**Important:** Never commit your `.env` file or expose your API key in frontend code.

### 5. Run the application

Start the frontend and backend using the development scripts defined in their respective `package.json` files.

## 🔐 Security

- API credentials are stored in environment variables.
- The OpenAI API key should remain on the backend.
- Environment files should be excluded from version control.

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building a full-stack JavaScript application.
- Integrating third-party AI APIs.
- Working with Node.js and Express.js.
- Managing environment variables and API credentials.
- Structuring frontend and backend applications.

## 👨‍💻 Author

**Rupesh Nipanikar**

- GitHub: [@RupeshNipanikar](https://github.com/RupeshNipanikar)
- LinkedIn: [Rupesh Nipanikar](https://www.linkedin.com/in/rupesh-nipanikar/)

---

⭐ If you find this project interesting, consider giving the repository a star!

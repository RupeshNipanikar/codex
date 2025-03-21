import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai"; // Ensure OpenAI v4+ import

dotenv.config();
console.log("TOGETHER_API_KEY:", process.env.TOGETHER_API_KEY); // Debugging

const openai = new OpenAI({
  apiKey: process.env.TOGETHER_API_KEY, 
  baseURL: "https://api.together.xyz/v1",
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello from CodeX!" });
});

app.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Input required" });
    }

    const response = await openai.chat.completions.create({
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free", // ✅ Corrected model name
      messages: [{ role: "user", content: prompt }], // ✅ Fixed key name
      max_tokens: 200,
      temperature: 0.7,
    });

    if (!response.choices || response.choices.length === 0) {
      throw new Error("No response from model.");
    }

    res.status(200).json({ bot: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ AI server running on http://localhost:${PORT}`));

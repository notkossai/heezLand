// server.js
import express from "express";
import fetch from "node-fetch"; 
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const WEB3FORMS_KEY=process.env.WEB3FORMS_KEY;

const app = express();
app.use(cors()); // allow your frontend origin in production instead of '*'
app.use(express.json()); // accept JSON bodies

app.post("/api/send", async (req, res) => {
  try {
    const { name, email, message } = req.body; // adapt to form fields

    // Build form data to match what web3forms expects
    const formData = new URLSearchParams();
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Contact form submission");
    formData.append("name", name || "");
    formData.append("email", email || "");
    formData.append("message", message || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log("Web3Forms response:", data);

    // Forward the response from Web3Forms to the client
    return res.status(200).json(data);
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
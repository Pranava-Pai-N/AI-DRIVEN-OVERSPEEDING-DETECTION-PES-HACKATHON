const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/violations", (req, res) => {
  const filePath = path.join(__dirname, "../detected_vehicles.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to read data" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

const twilio = require("twilio");

// Initialize Twilio
const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Function to generate Google Pay UPI link
function generateGooglePayLink(amount) {
  return "upi: pay?pa=${process.env.UPI_ID}&pn=Merchant&mc=0000&tid=123456789&tr=ORDER123&tn=Payment&am=${amount}&cu=INR";
}

async function sendUpiPaymentLink(phoneNumber, amount) {
  try {
    const googlePayLink = generateGooglePayLink(amount);

    // Send Google Pay link via Twilio SMS
    const message = await client.messages.create({
      body: `Pay securely via Google Pay: ${googlePayLink}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    console.log("Google Pay UPI Link Sent:", message.sid);
  } catch (error) {
    console.error("Error:", error);
  }
}

// API Endpoint: Send Payment Link
app.post("/send-payment-link", async (req, res) => {
  const { number_plate } = req.body;

  try {
    // Fetch vehicle violation details from external API
    const response = await axios.get("http://localhost:5000/api/violations");
    const violations = response.data; // Assuming API returns an array of violations

    let violation = violations.find((v) => v.license_plate === number_plate);

    if (!violation) return res.status(404).json({ error: "Vehicle not found" });

    if (violation.status === "Paid") {
      return res.json({ message: "Already paid" });
    }

    const success = await sendUpiPaymentLink(
      violation.phoneNumber,
      violation.amount
    );

    if (success) {
      res.json({
        success: true,
        message: "Payment link sent via SMS!",
        phone: violation.phoneNumber,
      });
    } else {
      res.status(500).json({ error: "Failed to send payment link." });
    }
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ error: "Failed to retrieve violation details." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

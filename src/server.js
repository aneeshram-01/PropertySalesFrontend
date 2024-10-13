// server.js
import express from "express"; // Import Express framework
import bodyParser from "body-parser"; // Import body-parser for parsing request bodies
import cors from "cors"; // Import CORS middleware to enable cross-origin resource sharing
import Razorpay from "razorpay"; // Import Razorpay for payment processing
import dotenv from "dotenv"; // Import dotenv for environment variable management

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application
const PORT = process.env.PORT || 5000; // Define the port to run the server on

// Middleware
app.use(cors()); // Use CORS middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Set Razorpay key ID from environment variable
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Set Razorpay key secret from environment variable
});

// Create Order API
app.post("/api/create-order", async (req, res) => {
  const { amount, currency } = req.body; // Destructure amount and currency from request body
  // Define options for the Razorpay order
  try {
    const options = {
      amount: amount * 100, // Amount in paise
      currency: currency,
      receipt: `receipt#${Math.random()}`, // Generate a unique receipt number
    };
    // Create the order using Razorpay
    const order = await razorpay.orders.create(options);
    // Respond with order details
    res.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error); // Log error details
    res.status(500).json({ error: "Error creating order" }); // Respond with error message
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log server start message
});

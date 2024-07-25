const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const flightsRoute = require('./routes/flights');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["https://flight-search-app-f71u.vercel.app", "http://localhost:5173", "https://cardgpt.in/apitest"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(bodyParser.json());

// Root route for testing
app.get('/', (req, res) => {
  res.send("This is server side...");
});

// Routes
app.use('/api/flights', flightsRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

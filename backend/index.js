const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const flightsRoute = require('./routes/flights');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin:["https://flight-search-app-f71u.vercel.app/"],
  methods: ["POST"],
  credentials:true
}));
app.use(bodyParser.json());

app.get(() => {
  console.log("This is server side...");
})

// Routes
app.use('/api/flights', flightsRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

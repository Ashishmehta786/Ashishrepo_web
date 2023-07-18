// Assuming you have an Express.js server setup

const express = require('express');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Endpoint to receive form data
app.post('/api/submitForm', (req, res) => {
  const formData = req.body;

  // Handle the form data
  // You can perform validation, save it to a database, etc.

  // Example response
  const response = {
    status: 'success',
    message: 'Form submitted successfully',
    data: formData
  };

  res.json(response);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
      
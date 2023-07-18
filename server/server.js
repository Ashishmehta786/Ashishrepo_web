const express = require('express');
const app = express();
const port = 5000; // Change the port number if desired

// Define routes
app.get("/", (req, res) => {
  res.json({"name":["Ashish","Okayone "]});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
    
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Azure App Service - Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

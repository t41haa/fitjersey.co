const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS
app.use(cors());

// Serve static files from client folder
app.use(express.static(path.join(__dirname, '../client')));

// API endpoint to send product data
const products = require('./data/products.json');
app.get('/api/products', (req, res) => {
  res.json(products); // ✅ this must NOT be wrapped in [ ]
});


// Fallback to index.html (if someone refreshes on another page)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

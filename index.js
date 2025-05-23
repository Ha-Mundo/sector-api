const express = require('express');
const cors = require('cors');
const sectorsDB = require('./sectorsDB');

const app = express();
// Use the port Render assigns or default to 3000 locally
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API route
app.get('/api/sectors', (req, res) => {
  res.json(sectorsDB);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

// Sample data
const sectors = [
  { date: "2021-06-22", name: "Materials", sector_id: "1" },
  { date: "2022-01-10", name: "Industrials", sector_id: "2" },
  { date: "2023-04-18", name: "Real Estate", sector_id: "3" },
  { date: "2025-02-09", name: "Energy", sector_id: "4" },
  { date: "2024-11-05", name: "Communication Services", sector_id: "5" },
  { date: "2021-09-28", name: "Healthcare", sector_id: "6" },
  { date: "2020-12-31", name: "Information Technology", sector_id: "7" },
  { date: "2023-07-13", name: "Consumer Staples", sector_id: "8" },
  { date: "2025-01-03", name: "Financials", sector_id: "9" },
  { date: "2022-05-27", name: "Utilities", sector_id: "10" },
  { date: "2024-08-14", name: "Consumer Discretionary", sector_id: "11" }
];

// Endpoint to get all sectors
app.get('/api/sectors', (req, res) => {
  res.json(sectors);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

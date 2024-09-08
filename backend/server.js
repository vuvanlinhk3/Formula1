const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Define a simple API endpoint
app.get('/api/team', (req, res) => {
  res.json({ teamName: "Racing Team", members: ["John", "Jane", "Doe"] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

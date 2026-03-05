const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from CI/CD Pipeline</h1>
    <p>This Node.js + Express app was automatically built & deployed via GitHub Actions.</p>
    <p>Built by Gavin Barbee – March 2026</p>
    <p>Targeting junior DevOps / Cloud roles at Lockheed-level companies</p>
    <p>Running on port ${port}</p>
  `);
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Keep-alive: prevent Node from exiting in some shells
setInterval(() => {
  console.log('Server still alive...');
}, 30000); // prints every 30 seconds
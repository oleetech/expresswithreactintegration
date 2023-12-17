// server/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve static files from the 'client/build' folder
app.use(express.static(path.join(__dirname, './build'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.json')) {
      res.setHeader('Content-Type', 'application/json');
    }
  },
}));

// Send the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

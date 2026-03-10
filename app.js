const express = require('express');
const app = express();

// example routes
app.get('/add/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ result: Number(a) + Number(b) });
});

app.get('/divide/:a/:b', (req, res) => {
  const { a, b } = req.params;
  if (Number(b) === 0) {
    return res.status(400).json({ error: "Division by zero" });
  }
  res.json({ result: Number(a) / Number(b) });
});

module.exports = app;
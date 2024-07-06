const express = require('express');
const app = express();

app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.send('Slow response');
  }, 5000);
});

app.listen(3002, () => {
  console.log('Slow API running on port 3002');
});

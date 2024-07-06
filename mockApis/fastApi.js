const express = require('express');
const app = express();

app.get('/fast', (req, res) => {
  res.send('Fast response');
});

app.listen(3001, () => {
  console.log('Fast API running on port 3001');
});

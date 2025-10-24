const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1> East US App (Windows)</h1><p>You are hitting the East US backend!</p>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`East US App listening on port ${port}`);
});

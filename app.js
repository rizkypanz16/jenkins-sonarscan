const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = {
    message: 'Hello, World!',
    timestamp: new Date()
  };

  res.json(data);
});

const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

'use strict'


const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is Running');
});

app.listen(3000, () => {
console.log(`Evernode server running on port: ${port}`);
});

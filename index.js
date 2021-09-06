const express = require('express');

const port = process.env.PORT || 3000;

express()
  .get('/', (req, res) => res.send('hello world'))
  .listen(port, () => console.log(`listening.on http://localhost:${port}`));

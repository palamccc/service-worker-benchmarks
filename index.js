const express = require('express');

const port = process.env.PORT || 3000;

express()
  .use(express.static('./static'))
  .listen(port, () => console.log(`listening.on http://localhost:${port}`));

// calling off the express to start our application
const express = require('express');

const app = express();

// Our request route
app.get('/teste', (req, res) => {
  return res.json({Project: 'with express'})

});

/**
 * Port which is listening our route application
*/
app.listen(3333);
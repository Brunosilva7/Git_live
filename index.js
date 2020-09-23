// calling off the express to start our application
const express = require('express');

const app = express();

// Our request route
app.get('/teste333333333333333333333333333333333', (req, res) => {
  return res.json({Project: 'with express and React'})

});

/**
 * Port which is listening our route application
*/
app.listen(3333);

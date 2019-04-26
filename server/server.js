// IMPORTS
require('dotenv').config();
const express = require('express');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const massive = require('massive');


// TOP LEVEL MIDDLEWARE
app.use(express.json());

// ENDPOINTS
app.get('/api/house/:houseName', (req, res) => {
  const { houseName } = req.params
  const db = req.app.get('db');
  db.getHouse({ house_name: houseName }).then(result => {
    console.log(result)
    res.status(200).send(result[0])
  })
})

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);

  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} ducks marching on Rome`);
  });
  
});

// START THE SERVER

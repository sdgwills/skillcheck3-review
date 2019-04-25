// IMPORTS
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

// TOP LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/house/:id', (req, res) => {
  const db = req.app.get('db')
  db.getSingleHouse(req.params).then((response) => {
      if (response[0]) {
          res.send(response[0])
      } else {
          res.sendStatus(404)
      }
  })
})
app.post('/api/student/:house', (req, res) => {
  const db = req.app.get('db')
  db.sortStudent({student: req.body.name, house_id: req.params.house})
  res.sendStatus(200)
})
app.get('/api/students/:house', (req, res) => {
  const db = req.app.get('db')
  db.getHouseStudents({house_id: req.params.house}).then(response => {
    res.status(200).send(response)
  })
})

// CONNECT TO DATABASE
massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  // START THE SERVER
  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} ducks marching on Rome`)
  })
})

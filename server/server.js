// IMPORTS
require('dotenv').config()
const express = require('express')
const app = express()
const { SERVER_PORT } = process.env

// TOP LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS

// CONNECT TO DATABASE

// START THE SERVER
app.listen(SERVER_PORT, () => {
  console.log(`${SERVER_PORT} ducks marching on Rome`)
})

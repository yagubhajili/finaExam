const express = require("express")
require('dotenv').config()
require('./src/config/db.js')

const cors = require('cors')

const bodyParser = require('body-parser')





const PORT = process.env.PORT
const routes = require("./src/routes/productRoute.js") // new
const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use("/", routes) // new

app.listen(PORT, () => {
    console.log("Server has started!" + PORT)
})
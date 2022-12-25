const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('', router)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server is running on port ${port}`))
const express = require('express')

const db = require('./database')
const routes = require('./routes')

const app =  express()

db.connect()

//habilita server para receber dados json
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

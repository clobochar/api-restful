const express = require('express')
const cors = require('cors')

const db = require('./database')
const routes = require('./routes')

const app =  express()

//conexão com o banco de dados
db.connect()

// const allowedOrigins = [
//     'http://127.0.0.1:5500',
//     'http://www.api.com.br',
// ]

// //habilita CORS
// app.use(cors({
//     origin: function(origin, callback) {
//         let allowed = true

//         if(!origin) allowed = true

//         if(!allowedOrigins.includes(origin)) allowed = false

//         callback(null, allowed)
//     }
// }))

app.use(cors())

//habilita server para receber dados json
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

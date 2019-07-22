const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const climaRoutes = require('./api/routes/climas')
const soloRoutes = require('./api/routes/solos')
const nutrienteRoutes = require('./api/routes/nutrientes')
const luzRoutes = require('./api/routes/luzs')
const plantaRoutes = require('./api/routes/plantas')
const familiaRoutes = require('./api/routes/familias')
const generoRoutes = require('./api/routes/generos')
const especieRoutes = require('./api/routes/especies')

mongoose.connect('mongodb+srv://plante-api:' +
    process.env.MONGO_ATLAS_PW +
    '@plante-api-zuqqf.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)
mongoose.Promise = global.Promise

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next()
})

//Rotas
app.use('/climas', climaRoutes)
app.use('/solos', soloRoutes)
app.use('/nutrientes', nutrienteRoutes)
app.use('/luzs', luzRoutes)
app.use('/plantas', plantaRoutes)
app.use('/familias', familiaRoutes)
app.use('/generos', generoRoutes)
app.use('/especies', especieRoutes)

app.use((req, res, next) => {
    const error = new Error("Não encontrato!")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app
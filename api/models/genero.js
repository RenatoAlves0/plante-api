const mongoose = require('mongoose')

const genero = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    familia: { type: mongoose.Schema.Types.ObjectId, ref: 'Familia' },
    nome: { type: String, required: true }
})

module.exports = mongoose.model('Genero', genero)
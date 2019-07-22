const mongoose = require('mongoose')

const especie = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    genero: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero' },
    nome: { type: String, required: true }
})

module.exports = mongoose.model('Especie', especie)
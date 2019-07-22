const mongoose = require('mongoose')

const familia = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    filo: { type: String, default: "Genérico" },
    classe: { type: String, default: "Genérico" },
    ordem: { type: String, default: "Genérico" },
    nome: { type: String, required: true }
})

module.exports = mongoose.model('Familia', familia)
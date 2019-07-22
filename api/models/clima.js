const mongoose = require('mongoose')

const clima = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipo: { type: String, required: true },
    temperaturaMinima: { type: Number, required: true },
    temperaturaMaxima: { type: Number, required: true },
    umidadeMinima: { type: Number, required: true },
    umidadeMaxima: { type: Number, required: true }
})

module.exports = mongoose.model('Clima', clima)
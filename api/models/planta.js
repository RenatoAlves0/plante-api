const mongoose = require('mongoose')

const planta = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    familia: { type: mongoose.Schema.Types.ObjectId, ref: 'Familia', required: true },
    genero: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero', required: true },
    especie: { type: mongoose.Schema.Types.ObjectId, ref: 'Especie', required: true },
    clima: { type: mongoose.Schema.Types.ObjectId, ref: 'Clima', required: true },
    solo: { type: mongoose.Schema.Types.ObjectId, ref: 'Solo', required: true },
    luz: { type: mongoose.Schema.Types.ObjectId, ref: 'Luz', required: true },
    nutriente: { type: mongoose.Schema.Types.ObjectId, ref: 'Nutriente', required: true },
    cliente: { type: Number, default: 1 },
    nome: { type: String, required: true }
})

module.exports = mongoose.model('Planta', planta)
const mongoose = require('mongoose')

const solo = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phMinimo: { type: Number, required: true },
    phMaximo: { type: Number, required: true },
    umidadeMinima: { type: Number, required: true },
    umidadeMaxima: { type: Number, required: true },
    quantidadeAreia: { type: Number, default: 0 },
    quantidadeArgila: { type: Number, default: 0 },
    quantidadeHumus: { type: Number, default: 0 },
    quantidadeMusgoSphagnum: { type: Number, default: 0 },
    quantidadeTerraVegetal: { type: Number, default: 0 },
    quantidadeTurfa: { type: Number, default: 0 }
})

module.exports = mongoose.model('Solo', solo)
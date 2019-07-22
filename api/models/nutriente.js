const mongoose = require('mongoose')

const nutriente = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nitrogenio: { type: Number, required: true },
    fosforo: { type: Number, required: true },
    potassio: { type: Number, required: true },
    magnesio: { type: Number, default: 0 },
    calcio: { type: Number, default: 0 },
    enxofre: { type: Number, default: 0 },
    ferro: { type: Number, default: 0 },
    manganes: { type: Number, default: 0 },
    boro: { type: Number, default: 0 },
    cobre: { type: Number, default: 0 },
    zinco: { type: Number, default: 0 },
    cloro: { type: Number, default: 0 },
    molibdenio: { type: Number, default: 0 }
})

module.exports = mongoose.model('Nutriente', nutriente)
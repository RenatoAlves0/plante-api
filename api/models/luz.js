const mongoose = require('mongoose')

const luz = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    intensidade: { type: String, required: true },
    horasPorDia: { type: Number, default: 0 }
})

module.exports = mongoose.model('Luz', luz)
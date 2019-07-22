const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Clima = require('../models/clima')

router.post('/', (req, res, next) => {
    const clima = new Clima({
        _id: new mongoose.Types.ObjectId(),
        tipo: req.body.tipo,
        temperaturaMinima: req.body.temperaturaMinima,
        temperaturaMaxima: req.body.temperaturaMaxima,
        umidadeMinima: req.body.umidadeMinima,
        umidadeMaxima: req.body.umidadeMaxima
    })

    clima.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Clima.find().exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:climaId', (req, res, next) => {
    Clima.findById(req.params.climaId).exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:climaId', (req, res, next) => {
    Clima.update({ _id: req.params.climaId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:climaId', (req, res, next) => {
    Clima.remove({ _id: req.params.climaId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
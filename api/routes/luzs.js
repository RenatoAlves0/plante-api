const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Luz = require('../models/luz')

router.post('/', (req, res, next) => {
    const luz = new Luz({
        _id: new mongoose.Types.ObjectId(),
        intensidade: req.body.intensidade,
        horasPorDia: req.body.horasPorDia
    })

    luz.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Luz.find().exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:luzId', (req, res, next) => {
    Luz.findById(req.params.luzId).exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:luzId', (req, res, next) => {
    Luz.update({ _id: req.params.luzId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:luzId', (req, res, next) => {
    Luz.remove({ _id: req.params.luzId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
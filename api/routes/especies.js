const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Especie = require('../models/especie')

router.post('/', (req, res, next) => {
    const especie = new Especie({
        _id: new mongoose.Types.ObjectId(),
        genero: req.body.genero,
        nome: req.body.nome
    })

    especie.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Especie.find()
        .populate('genero')
        .exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:especieId', (req, res, next) => {
    Especie.findById(req.params.especieId)
        .populate('genero')
        .exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:especieId', (req, res, next) => {
    Especie.update({ _id: req.params.especieId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:especieId', (req, res, next) => {
    Especie.deleteOne({ _id: req.params.especieId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
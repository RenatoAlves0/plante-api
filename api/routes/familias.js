const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Familia = require('../models/familia')

router.post('/', (req, res, next) => {
    const familia = new Familia({
        _id: new mongoose.Types.ObjectId(),
        filo: req.body.filo,
        classe: req.body.classe,
        ordem: req.body.ordem,
        nome: req.body.nome
    })

    familia.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Familia.find().exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:familiaId', (req, res, next) => {
    Familia.findById(req.params.familiaId).exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:familiaId', (req, res, next) => {
    Familia.update({ _id: req.params.familiaId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:familiaId', (req, res, next) => {
    Familia.deleteOne({ _id: req.params.familiaId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
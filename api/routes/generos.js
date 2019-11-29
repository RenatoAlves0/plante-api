const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Genero = require('../models/genero')

router.post('/', (req, res, next) => {
    const genero = new Genero({
        _id: new mongoose.Types.ObjectId(),
        familia: req.body.familia,
        nome: req.body.nome
    })

    genero.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Genero.find()
        .populate('familia')
        .exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:generoId', (req, res, next) => {
    Genero.findById(req.params.generoId)
        .populate('familia')
        .exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:generoId', (req, res, next) => {
    Genero.update({ _id: req.params.generoId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:generoId', (req, res, next) => {
    Genero.deleteOne({ _id: req.params.generoId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
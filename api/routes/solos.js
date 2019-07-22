const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Solo = require('../models/solo')

router.post('/', (req, res, next) => {
    const solo = new Solo({
        _id: new mongoose.Types.ObjectId(),
        phMinimo: req.body.phMinimo,
        phMaximo: req.body.phMaximo,
        umidadeMinima: req.body.umidadeMinima,
        umidadeMaxima: req.body.umidadeMaxima,
        quantidadeAreia: req.body.quantidadeAreia,
        quantidadeArgila: req.body.quantidadeArgila,
        quantidadeHumus: req.body.quantidadeHumus,
        quantidadeMusgoSphagnum: req.body.quantidadeMusgoSphagnum,
        quantidadeTerraVegetal: req.body.quantidadeTerraVegetal,
        quantidadeTurfa: req.body.quantidadeTurfa
    })

    solo.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Solo.find().exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:soloId', (req, res, next) => {
    Solo.findById(req.params.soloId).exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:soloId', (req, res, next) => {
    Solo.update({ _id: req.params.soloId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:soloId', (req, res, next) => {
    Solo.remove({ _id: req.params.soloId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
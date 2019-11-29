const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Nutriente = require('../models/nutriente')

router.post('/', (req, res, next) => {
    const nutriente = new Nutriente({
        _id: new mongoose.Types.ObjectId(),
        nitrogenio: req.body.nitrogenio,
        fosforo: req.body.fosforo,
        potassio: req.body.potassio,
        magnesio: req.body.magnesio,
        calcio: req.body.calcio,
        enxofre: req.body.enxofre,
        ferro: req.body.ferro,
        manganes: req.body.manganes,
        boro: req.body.boro,
        cobre: req.body.cobre,
        zinco: req.body.zinco,
        cloro: req.body.cloro,
        molibdenio: req.body.molibdenio
    })

    nutriente.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Nutriente.find().exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:nutrienteId', (req, res, next) => {
    Nutriente.findById(req.params.nutrienteId).exec()
        .then(doc => {
            if (doc) res.status(200).json(doc)
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:nutrienteId', (req, res, next) => {
    Nutriente.update({ _id: req.params.nutrienteId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:nutrienteId', (req, res, next) => {
    Nutriente.deleteOne({ _id: req.params.nutrienteId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
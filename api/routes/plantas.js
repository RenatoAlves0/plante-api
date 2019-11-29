const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Planta = require('../models/planta')

router.post('/', (req, res, next) => {
    const planta = new Planta({
        _id: new mongoose.Types.ObjectId(),
        familia: req.body.familia,
        genero: req.body.genero,
        especie: req.body.especie,
        clima: req.body.clima,
        solo: req.body.solo,
        luz: req.body.luz,
        nutriente: req.body.nutriente,
        cliente: req.body.cliente,
        nome: req.body.nome
    })

    planta.save()
        .then(result => { res.status(201).json({ message: "Salvo com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/', (req, res, next) => {
    Planta.find()
        .populate('familia genero especie clima solo luz nutriente')
        .exec()
        .then(docs => { res.status(200).json(docs) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.get('/:plantaId', (req, res, next) => {
    Planta.findById(req.params.plantaId)
        .populate('familia genero especie clima solo luz nutriente')
        .exec()
        .then(doc => {
            if (doc) { res.status(200).json(doc) }
            else res.status(404).json({ message: 'Registro não encontrado!' })
        })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.put('/:plantaId', (req, res, next) => {
    Planta.update({ _id: req.params.plantaId }, { $set: req.body }).exec()
        .then(result => { res.status(200).json({ message: "Editado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

router.delete('/:plantaId', (req, res, next) => {
    Planta.deleteOne({ _id: req.params.plantaId }).exec()
        .then(result => { res.status(200).json({ message: "Deletado com sucesso!" }) })
        .catch(err => { res.status(500).json({ error: err }) })
})

module.exports = router
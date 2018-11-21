const model = require('../models/snacks')

function getAll(req, res, next) {
    const data = model.getAll()
    console.log("data, ", data)
    res.status(200).json({ data })
}

function getOne(req, res, next) {
    const { id } = req.params
    const data = model.getOne(id)
    return res.status(200).json({ data })
}

function createSnack(req, res, next) {
    const obj = req.body
    const newSnack = model.createSnack(obj)
    return res.status(201).json(newSnack)
    console.log('createSnack')
}

function editSnack(req, res, next) {
    const { id } = req.params
    const { quantity } = req.body
    const editedSnack = model.editSnack(id, quantity)
    return res.status(201).json(editedSnack)
    console.log('editSnack')
}

function deleteSnack(req, res, next) {
    const { id } = req.params
    const deletedSnack = model.deleteSnack(id)
    return res.status(200).json(deletedSnack)
}

module.exports = { getAll, getOne, createSnack, deleteSnack, editSnack }
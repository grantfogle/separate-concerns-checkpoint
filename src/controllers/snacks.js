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
    const { body } = req.body
    dcreateSnack(body)
    return res.status
    console.log('createSnack')
}

function editSnack(req, res, next) {
    console.log('editSnack')
}

function deleteSnack(req, res, next) {
    console.log('deleteSnack')
}

module.exports = { getAll, getOne, createSnack, deleteSnack, editSnack }
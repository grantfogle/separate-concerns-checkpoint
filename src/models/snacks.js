const uuid = require('uuid/v4')
const snacks = require('../../db/snacks')

function getAll() {
    console.log('models: ', snacks)
    return snacks;
}
function getOne(id) {
    console.log('models: ', snacks)
    return snacks.filter(snack => snack.id === id)[0];
}

function createSnack({ name, price, quantity, type }) {
    let response
    const errors = []
    let newSnack = {
        name,
        id: uuid(),
        price,
        quantity,
        type
    }
    if (!name || !price || !quantity || !type) {
        errors.push('pls complete all fields')
        return response = { errors }
    }
    snacks.push(newSnack)
    return newSnack

}
function editSnack(id, quantity) {
    let response
    const errors = []
    if (!quantity) {
        errors.push("Pls add quantity")
        return response = { errors }
    } else {
        snacks.map(snack => {
            if (snack.id === id) {
                snack.quantity = quantity
                response = snack
            }
        })
    }

    if (!response) {
        errors.push("Id doesn't exist")
        return response = { errors }
    }
    return response
}

function deleteSnack(id) {
    let response
    const errors = ['id doesnt exist']

    for (let i = 0; i < snacks.length; i++) {
        if (snacks[i].id === id) {
            return (
                snacks[i],
                snacks.splice(i, 1)
            )
        }
    }
    return response = { errors }
}

module.exports = { getAll, getOne, createSnack, editSnack, deleteSnack }
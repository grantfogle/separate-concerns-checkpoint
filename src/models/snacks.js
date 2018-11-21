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
    let newSnack = {
        name,
        id: uuid(),
        price,
        quantity,
        type
    }
    snacks.push(newSnack)
    console.log(snacks)
    return newSnack

}
function editSnack(id, quantity) {
    let editedSnack = {}
    snacks.map(snack => {
        if (snack.id === id) {
            snack.quantity = quantity
            editedSnack = snack
        }
    })
    return editedSnack
}

function deleteSnack(id) {
    for (let i = 0; i < snacks.length; i++) {
        if (snacks[i].id === id) {
            return (
                snacks[i],
                snacks.splice(i, 1)
            )
        }
    }
}

module.exports = { getAll, getOne, createSnack, editSnack, deleteSnack }
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
    return newSnack;

}
// function create() {

// }

module.exports = { getAll, getOne, createSnack }
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

// function create() {

// }

module.exports = { getAll, getOne, createSnack }
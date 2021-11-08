const express = require('express');
const mongoose = require('mongoose');
const Pokemon = require('../../model/pokemon')

const router = express.Router();

mongoose.connect("mongodb://localhost:27017/Pokemon")

router.get('', async (request, response) => {
    const { name } = request.query

    const pokemons = await Pokemon.find({ name: new RegExp(`^${name}`, 'i') });

    if (!pokemons) {
        return response.status(404).json({ error: "pokemon nao encontrado" })
    }

    return response.json(pokemons);
});

router.get('/:id', async (request, response) => {
    const { id } = request.params;
    if (!mongoose.isValidObjectId(id)) {
        return response.status(400).json({ error: "id is not valid!" })
    }
    const pokemon = await Pokemon.findById(id)
    if (!pokemon) {
        return response.status(404).json({ error: "pokemon nao encontrado" })
    }
    return response.json(pokemon);
})


module.exports = router;
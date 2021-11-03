const express = require('express');
const pokemonRouter = require('./pokemonRoute');

const router = express.Router()

router.use('/pokemon', pokemonRouter)

module.exports = router;
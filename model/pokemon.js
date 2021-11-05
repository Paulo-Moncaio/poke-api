// import { model } from 'mongoose';
const mongoose = require('mongoose');

const Pokemon = mongoose.model("Pokemon", {
    pokedexId: String,
    name: String,
    type1: String,
    type2: String,
    total: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    speedAtk: Number,
    speedDef: Number,
    speed: Number,
    generation: String,
    legendary: Boolean
})

module.exports = Pokemon;
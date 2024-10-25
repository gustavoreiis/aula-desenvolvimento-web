const pokemonModel = require('../models/pokemonModel');
const treinadorModel = require('../models/treinadorModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const treinadores = treinadorModel.getTreinadores();
    res.render('index', { pokemons, treinadores });
};    

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if(pokemon){
        res.render('pokemon', { pokemon });
    } else{
        res.status(404).send('Pokemon não encontrado');
    }
};

const getCreatePokemonForm = (req, res) => {
    res.render('cadastroPokemon');
};

const createPokemon = (req, res) => {
    const { nome, tipo } = req.body;
    pokemonModel.createPokemon(nome, tipo);
    res.redirect('/');
};

module.exports = {getAllPokemons, getPokemon, getCreatePokemonForm, createPokemon};
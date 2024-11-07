const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if(treinador){
        res.render('treinador', { treinador });
    } else{
        res.status(404).send('Treinador não encontrado - Teste');
    }
};

const getCreateTreinadorForm = (req, res) => {
    res.render('cadastroTreinador');
};

const createTreinador = (req, res) => {
    const { nome, level } = req.body;
    treinadorModel.createTreinador(nome, level);
    res.redirect('/');
};

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const treinadorId = req.query.treinadorId;
    res.render('selecao', { pokemons, treinadorId, errorMessage: null });
};

const addPokemonToTreinador = (req, res) => {
    const { treinadorId, pokemonId } = req.body;
    const pokemon = pokemonModel.getPokemonById(pokemonId);
    const treinador = treinadorModel.getTreinadorById(treinadorId);
    if (pokemon && treinador) {
        const pokemonNaEquipe = treinador.equipe.some(pokemonEquipe => pokemonEquipe.id === pokemon.id);
        if (!pokemonNaEquipe) {
            treinadorModel.addPokemonToTreinador(treinadorId, pokemon);
        treinador.numeroPokemon++;
        return res.redirect(`/treinador/${treinadorId}`);
        }
    } else {
        res.status(404).send('Treinador ou Pokémon não encontrado');
    }
};


module.exports = {getTreinador, getCreateTreinadorForm, createTreinador, getAllPokemons, addPokemonToTreinador}
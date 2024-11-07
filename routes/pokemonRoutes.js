const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const treinadorController = require('../controllers/treinadorController');

router.get('/', pokemonController.getAllPokemonsTreinadores);

router.get('/treinador/new', treinadorController.getCreateTreinadorForm);
router.get('/treinador/:id', treinadorController.getTreinador);
router.post('/treinador', treinadorController.createTreinador);
router.post('/treinador/addPokemon', treinadorController.addPokemonToTreinador);

router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/pokemons/new', pokemonController.getCreatePokemonForm);
router.post('/pokemons', pokemonController.createPokemon);

router.get('/selecaoPokemon', treinadorController.getAllPokemons);


module.exports = router;
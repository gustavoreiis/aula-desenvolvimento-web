const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const treinadorController = require('../controllers/treinadorController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/pokemons/new', pokemonController.getCreatePokemonForm);
router.post('/pokemons', pokemonController.createPokemon);


//router.get('/treinadores', treinadorController.getAllTreinadores);
router.get('/treinador/:id', treinadorController.getTreinador);

module.exports = router;
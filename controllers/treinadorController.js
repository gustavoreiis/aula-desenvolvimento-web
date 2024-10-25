const treinadorModel = require('../models/treinadorModel');

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if(treinador){
        res.render('treinador', { treinador });
    } else{
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = {getTreinador}
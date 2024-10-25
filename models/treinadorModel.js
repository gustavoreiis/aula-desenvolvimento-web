const treinadores = [
    {id: 1, nome: 'Ash', level: '1'},
    {id: 1, nome: 'Misty', level: '1'},
    {id: 1, nome: 'Brock', level: '1'},
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id == parseInt(id));
const createTreinador = (nome, level) => {
    const newTreinador = { id: treinadores.length + 1, nome, level };
    treinadores.push(newTreinador);
    return newTreinador;
};

module.exports = {getTreinadores, getTreinadorById, createTreinador};
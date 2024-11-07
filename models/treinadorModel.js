const { Sequelize, Datatypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Treinador = sequelize.define (
    'TREINADOR',
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        numeroPokemon: { 
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        nome: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Treinador",
        tableName: "TREINADOR",
        timestamps: fallse,
    },
);
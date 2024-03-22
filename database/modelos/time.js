const { db_conect, Seq } = require('../conectDB.js');

const Time = db_conect.define('time', {
    nome: {
        type: Seq.STRING,
        allowNull: false
    },
    treinador: {
        type: Seq.STRING,
        allowNull: false
    },
    uniforme: {
        type: Seq.STRING,
        allowNull: false
    },
    cidade: {
        type: Seq.STRING,
        allowNull: false
    },
    estadio: {
        type: Seq.STRING,
        allowNull: false
    },
    logo: {
        type: Seq.STRING,
        allowNull: true
    }
});

module.exports = Time;

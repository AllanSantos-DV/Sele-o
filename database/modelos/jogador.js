const { db_conect, Seq } = require('../conectDB.js');

const Jogador = db_conect.define('jogador', {
    nome: {
        type: Seq.STRING,
        allowNull: false
    },
    idade: {
        type: Seq.INTEGER,
        allowNull: false
    },
    posicao: {
        type: Seq.STRING,
        allowNull: false
    },
    nacionalidade: {
        type: Seq.STRING,
        allowNull: false
    }
});

module.exports = Jogador;

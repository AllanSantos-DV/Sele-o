const Jogador = require('../database/modelos/jogador');
const Time = require('../database/modelos/time');

const criarJogador = async (jogador) => {
    return await Jogador.create(jogador);
}

const buscarJogador = async (id) => {
    return await Jogador.findByPk(id);
}

const buscarJogadores = async () => {
    return await Jogador.findAll({
        include: [{
            model: Time,
            as: 'time'
        }]
    });
}

const atualizarJogador = async (id, jogador) => {
    return await Jogador.update(jogador, { where: { id: id } });
}

const deletarJogador = async (id) => {
    return await Jogador.destroy({ where: { id: id } });
}

const buscarJogadoresPorTime = async (idTime) => {
    return await Jogador.findAll({ where: { timeId: idTime } });
}

const buscarJogadoresSemTime = async () => {
    return await Jogador.findAll({ where: { timeId: null } });
}

const associarJogadorTime = async (idJogador, idTime) => {
    return await Jogador.update({ timeId: idTime }, { where: { id: idJogador } });
}

const desassociarJogadorTime = async (idJogador) => {
    return await Jogador.update({ timeId: null }, { where: { id: idJogador } });
}

module.exports = {
    criarJogador,
    buscarJogador,
    buscarJogadores,
    atualizarJogador,
    deletarJogador,
    buscarJogadoresPorTime,
    buscarJogadoresSemTime,
    associarJogadorTime,
    desassociarJogadorTime
}

const Time = require('../database/modelos/time');
const Jogador = require('../database/modelos/jogador');

const criarTime = async (time) => {
    return await Time.create(time);
}

const buscarTime = async (id) => {
    return await Time.findByPk(id);
}

const buscarTimes = async () => {
    return await Time.findAll({
        include: [{
            model: Jogador,
            as: 'jogadores'
        }]
    });
}

const atualizarTime = async (id, time) => {
    return await Time.update(time, { where: { id: id } });
}

const deletarTime = async (id) => {
    return await Time.destroy({ where: { id: id } });
}

module.exports = {
    criarTime,
    buscarTime,
    buscarTimes,
    atualizarTime,
    deletarTime
}

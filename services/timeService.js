const timeController = require('../controllers/timeController');
const jogadorController = require('../controllers/jogadorController');
const fs = require('fs');
const { time } = require('console');

const deletarLogo = async (id) => {
    const time = await timeController.buscarTime(id);
    if (time.logo) {
        fs.unlinkSync(`public/${time.logo}`);
    }
}

const jogadoresSemTime = async (req, res) => {
    const jogadores = await jogadorController.buscarJogadoresSemTime();
    const jogadoresJson = jogadores.map(jogador => jogador.toJSON());
    res.render('novoTime', { jogadores: jogadoresJson });
}

const criarTime = async (req, res) => {
    const time = req.body;
    if (req.file)
        time.logo = req.file.path.replace('public\\', '');
    try {
        const novoTime = await timeController.criarTime(time);
        if (time.jogadores) {
            novoTime.setJogadores(time.jogadores);
        }
        req.flash('success', 'Time criado com sucesso!');
    } catch (error) {
        req.flash('error', 'Ocorreu um erro ao criar o time.');
    }
    res.redirect('/time');
}

const buscarTime = async (req, res) => {
    const id = req.params.id;
    const time = await timeController.buscarTime(id).toJSON();
    res.render('time', { time: time });
}

const jogadoresSemTimeJson = async (req, res) => {
    const jogadores = await jogadorController.buscarJogadoresSemTime();
    return jogadores.map(jogador => jogador.toJSON());

}

const buscarTimes = async (req, res) => {
    const times = await timeController.buscarTimes();
    const timeJogadorJson = await Promise.all(times.map(async time => {
        const timeJson = time.toJSON();
        timeJson.jogadoresSemTime = await jogadoresSemTimeJson();
        return timeJson;
    }));
    res.render('indexTime', { times: timeJogadorJson });
}

const atualizarTime = async (req, res) => {
    const id = req.params.id;
    const time = req.body;
    if (req.file){
        deletarLogo(id);
        time.logo = req.file.path.replace('public\\', '');
    }else{
        const timeAtual = await timeController.buscarTime(id);
        time.logo = timeAtual.logo;
    }
    try {
        await timeController.atualizarTime(id, time);
        await atualizarJogadoresTime(time, id);
        req.flash('success', 'Time atualizado com sucesso!');
    } catch (error) {
        req.flash('error', 'Ocorreu um erro ao atualizar o time.');
    }
    res.redirect('/time');
}

const atualizarJogadoresTime = async (time, idTime) => {
    if (time.jogadores) {
        await jogadorController.associarJogadorTime(time.jogadores, idTime);
    }
    if (time.jogadoresRem) {
        await jogadorController.desassociarJogadorTime(time.jogadoresRem);
    }
}

const deletarTime = async (req, res) => {
    const id = req.params.id;
    await deletarLogo(id);
    try {
        await timeController.deletarTime(id);
        req.flash('success', 'Time deletado com sucesso!');
    } catch (error) {
        req.flash('error', 'Ocorreu um erro ao deletar o time.');
    }
    res.redirect('/time');
}

module.exports = {
    jogadoresSemTime,
    criarTime,
    buscarTime,
    buscarTimes,
    atualizarTime,
    deletarTime
}

const jogadorController = require('../controllers/jogadorController.js');
const timeController = require('../controllers/timeController.js');

const listarTimes = async (req, res) => {
    const times = await timeController.buscarTimes();
    const timesJson = times.map(time => time.toJSON());
    res.render('novoJogador', { times: timesJson});
}

const criarJogador = async (req, res) => {
    const jogador = req.body;
    if (jogador.timeId === '') jogador.timeId = null;
    try {
        await jogadorController.criarJogador(jogador);
        req.flash('success', 'Jogador criado com sucesso!');
    } catch (error) {
        req.flash('error', 'Ocorreu um erro ao criar o jogador.');
    }
    res.redirect('/jogador');
}

const buscarJogador = async (req, res) => {
    const id = req.params.id;
    const jogador = await jogadorController.buscarJogador(id);
    if (jogador)
        res.status(200).json(jogador);
    else
        res.status(404).send();
}

const buscarJogadores = async (req, res) => {
    const jogadores = await jogadorController.buscarJogadores();
    const jogadoresJson = jogadores.map(jogador => jogador.toJSON());
    res.render('indexJogador', { jogadores: jogadoresJson });
}

const atualizarJogador = async (req, res) => {
    const id = req.params.id;
    const jogador = req.body;
    try {
        await jogadorController.atualizarJogador(id, jogador);
        req.flash('success', 'Jogador atualizado com sucesso!');
    } catch (error) {
        req.flash('error', 'Ocorreu um erro ao atualizar o jogador.');
    }
    res.redirect('/jogador');
}

const deletarJogador = async (req, res) => {
    const id = req.params.id;
    try {
        await jogadorController.deletarJogador(id);
        req.flash('success', 'Jogador deletado com sucesso!');
    } catch (error) {
        req.flash('error', 'Ocorreu um erro ao deletar o jogador.');
    }
    res.redirect('/jogador');
}

module.exports = {
    listarTimes,
    criarJogador,
    buscarJogador,
    buscarJogadores,
    atualizarJogador,
    deletarJogador
}

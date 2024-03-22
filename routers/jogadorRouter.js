const jogadorService = require('../services/jogadorService');

const router = require('express').Router();

router.get('/', jogadorService.buscarJogadores);
router.get('/novo', jogadorService.listarTimes);
router.get('/:id', jogadorService.buscarJogador);

router.post('/novo', jogadorService.criarJogador);
router.post('/update/:id', jogadorService.atualizarJogador);
router.post('/delete/:id', jogadorService.deletarJogador);

module.exports = router;

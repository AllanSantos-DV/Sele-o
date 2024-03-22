const express = require('express');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/imagens/timeLogo/');
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, uuid.v4() + ext);
    }
});

const upload = multer({ storage: storage });

const timeService = require('../services/timeService');

const router = express.Router();

router.get('/', timeService.buscarTimes);
router.get('/novo', timeService.jogadoresSemTime);
router.get('/:id', timeService.buscarTime);

router.post('/novo', upload.single('logo'), timeService.criarTime);
router.post('/update/:id', upload.single('logo'), timeService.atualizarTime);
router.post('/delete/:id', timeService.deletarTime);

module.exports = router;

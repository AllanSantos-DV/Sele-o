const app = require('./app');
const initDb = require('./init');
const dotenv = require('dotenv').config();
const env = dotenv.parsed;

const PORT = env.PORT || 3000;

// Inicializa o banco de dados e o servidor HTTP
initDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log('Acesse http://localhost:3000/time para visualizar os times');
        console.log('Acesse http://localhost:3000/jogador para visualizar os jogadores');
        console.log('Pressione Ctrl+C para encerrar...');
    });
}).catch(error => {
    console.error('Erro ao inicializar o banco de dados:', error);
});

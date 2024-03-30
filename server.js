const app = require('./config/app');
const initDb = require('./config/init');
const dotenv = require('dotenv').config();
const env = dotenv.parsed;

const PORT = env.PORT || 3000;

// Inicializa o banco de dados e o servidor HTTP
initDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Acesse http://localhost:${PORT}/time para visualizar os times`);
    });
}).catch(error => {
    console.error('Erro ao inicializar o banco de dados:', error);
});

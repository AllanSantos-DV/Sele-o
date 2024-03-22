// importando o arquivo de conexão com o banco de dados
const { db_conect } = require('./database/conectDB.js');

// importando os models
require('./database/modelos/time.js');
require('./database/modelos/jogador.js');
require('./database/modelos/relação.js');

// sincronizando o banco de dados
const initDb = async () => {
    try {
        await db_conect.sync({ force: false });
        return console.log('Tabelas e relações criadas com sucesso');
    } catch (error) {
        return console.log('Erro ao criar tabelas e relações: ', error);
    }
};

module.exports = initDb;

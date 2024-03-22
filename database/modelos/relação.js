const Time = require('./time.js');
const Jogador = require('./jogador.js');

Time.hasMany(Jogador, { as: 'jogadores' });
Jogador.belongsTo(Time, { as: 'time' });

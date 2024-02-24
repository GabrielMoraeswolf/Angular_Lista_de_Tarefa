require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize({
  dialect: config.development.dialect,
  host: config.development.host,
  username: config.development.username,
  password: config.development.password,
  database: config.development.database,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
  
const Tarefa = sequelize.define('Tarefa', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Tarefa,
};

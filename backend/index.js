require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, Tarefa } = require('./models/db');


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Sincronizar o modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida.');

    // Rotas da API

    // Cadastrar uma nova tarefa
    app.post('/tarefas', async (req, res) => {
      try {
        const { descricao, status } = req.body;
        const novaTarefa = await Tarefa.create({ descricao, status });
        res.json(novaTarefa);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    // Editar uma tarefa da lista
    app.put('/tarefas/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { descricao, status } = req.body;

        if (!['Pendente', 'Finalizada', 'Cancelada'].includes(status)) {
          return res.status(400).send('Status inválido');
        }

        const tarefa = await Tarefa.findByPk(id);

        if (!tarefa) {
          res.status(404).send('Tarefa não encontrada');
        } else {
          await tarefa.update({ descricao, status }); // Atualize tanto a descrição quanto o status
          res.json(tarefa);
        }
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    // Remover uma tarefa da lista
    app.delete('/tarefas/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const tarefa = await Tarefa.findByPk(id);

        if (!tarefa) {
          res.status(404).send('Tarefa não encontrada');
        } else {
          await tarefa.destroy();
          res.send('Tarefa removida com sucesso');
        }
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    // Visualizar a lista de tarefas
    app.get('/tarefas', async (req, res) => {
      try {
        const tarefas = await Tarefa.findAll();
        res.json(tarefas);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    // Filtrar as tarefas por status
    app.get('/tarefas/status/:status', async (req, res) => {
      try {
        const { status } = req.params;
        const tarefas = await Tarefa.findAll({
          where: {
            status,
          },
        });
        res.json(tarefas);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
      }
    });

    // Iniciar o servidor
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
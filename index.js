import express from "express"
import sequelize from "./src/config/database.js";


const app = express();

app.use(express.json()); // Para interpretar JSON nas requisições

// Testar a conexão com o banco
sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida!'))
  .catch(err => console.error('Erro ao conectar com o banco:', err));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

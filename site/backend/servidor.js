const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const porta = 3000;

// Permitir requisições de outras origens (ex: frontend)
app.use(cors());

// Conexão com o banco de dados MySQL
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Loja'
});

// Teste de conexão
conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar no banco de dados:', erro);
    } else {
        console.log('Conectado ao banco de dados Loja.');
    }
});

// Rota para retornar todos os produtos
app.get('/api/produtos', (req, res) => {
    const sql = 'SELECT * FROM produtos';
    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            res.status(500).json({ erro: 'Erro ao buscar produtos' });
        } else {
            res.json(resultados);
        }
    });
});

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
const mysql = require('mysql2');

// Criando arquivos de conexão com o bd
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao;
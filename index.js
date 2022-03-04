const express = require('express');
// Criando app express
const app = express();

// Subindo app no server
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

// Criando rota 'get' padrão (localhost:3000)
app.get('/', (req, res) => {
    res.send('Servidor rodando, tudo ok!');
})

app.get('/atendimentos', (req, res) => {
    res.send('Você está na rota de atendimentos!');
})
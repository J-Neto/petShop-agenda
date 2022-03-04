// ARQUIVO DE CONFIGURAÇÃO DO APP

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    // Cria o app
    const app = express();

    // Configura o app para ler as info recebidas
    app.use(bodyParser. urlencoded({extended: true}));
    app.use(bodyParser.json());

    // Configura o app fazendo o app ler os controllers
    consign().include('controllers').into(app);

    // Devolve o app
    return app;
}
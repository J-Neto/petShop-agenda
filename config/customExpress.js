// ARQUIVO DE CONFIGURAÇÃO DO APP

const express = require('express');
const consign = require('consign');

module.exports = () => {
    // Cria o app
    const app = express();

    // Configura o app fazendo o app ler os controllers
    consign().include('controllers').into(app);

    // Devolve o app
    return app;
}
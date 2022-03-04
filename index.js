// ARQUIVO INICIAL DO PROJETO
// RESPONSÁVEL POR SUBIR O APP NO AR

const customExpress = require('./config/customExpress');
const app = customExpress();

// Subindo app no server
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})
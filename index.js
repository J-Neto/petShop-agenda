// ARQUIVO INICIAL DO PROJETO
// RESPONSÁVEL POR SUBIR O APP NO AR

const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const app = customExpress();

// Estabelendo conexão com o bd
conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Conectado com sucesso');
        // Subindo app no server
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        })
    }
})

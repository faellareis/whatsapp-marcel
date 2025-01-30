/*
Objetivo: Criar API Integrada com projeto Front-End
Data: 30/01/2025
Autor: Rafa
Versão: 1.0
*/

const contatos = require ('./contatos.js')
const listaContatos = contatos.contatos['whats-users']

const DadosPessoais = function(dado) {
    let dados = dado
    let registro = { id: '', account: '', start: '', end: '', number: '' }
    let status = false
    
    listaContatos.forEach(function(usuarios) {
        if (dados == usuarios.number) {
            registro.id = usuarios.id;
            registro.account = usuarios.account;
            registro.start = usuarios['created-since'].start
            registro.end = usuarios['created-since'].end
            registro.number = usuarios.number
            status = true
        }
    })
    return registro;
}

//console.log(DadosPessoais('11966578996'));



module.exports = {
    DadosPessoais
}








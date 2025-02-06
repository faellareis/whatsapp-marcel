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
//console.log(DadosPessoais('11966578996'))

const DadosConta = function(dado) {
    let dados = dado
    let registro = { nickname: '', profileImage: '', background: '' }
    let status = false
    
    listaContatos.forEach(function(usuario) {
        if (dados == usuario.number) {
            registro.nickname = usuario.nickname;
            registro.profileImage = usuario['profile-image'];
            registro.background = usuario.background
            status = true
        }
    })
    return registro;
}
//console.log(DadosConta('11966578996'))

const DadosContatos = function(dados) {
    let registro = { name: '', description: '', image: '' };
    let dado = dados
    let lista = { lista: [] }

    listaContatos.forEach(function(usuario) {
        if (dado == usuario.number){
            usuario.contacts.forEach(function(contato){
            registro.name = contato.name;
            registro.description = contato.description;
            registro.image = contato.image

            lista.lista.push(registro)
            })
        }
    })
    return lista
}
//console.log(DadosContatos('11966578996'));

const DadosConversa = function(numero){
    let dado = numero
    let lista = {lista: []}

    listaContatos.forEach(function(usuario){
        if(dado == usuario.number){
            lista.lista = usuario.contacts
        }
    })
    return lista 
}
//console.log(DadosConversa('11966578996'))

const getDadosUsuario = function(){

}

module.exports = {
    DadosPessoais,
    DadosConta,
    DadosContatos,
    DadosConversa,
    getDadosUsuario
}







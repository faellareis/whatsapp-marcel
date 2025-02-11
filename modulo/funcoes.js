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

const getFiltroContatos = function(dado, nomeDoContato){
    let usuario = Number(dado)
    let listaContatos = contatos.contatos['whatsusers']
    let registro
    let contato = String(nomeDoContato).toUpperCase()
    let dadosUsuario 
    let lista = []
    let status = false 

    listaContatos.forEach(function(dados){
        dadosUsuario = dados.da
        if(Number(dadosUsuario) == usuario){
            dados.contacts.forEach(function(lista){
                registro = lista.name 
                if(String(registro).toUpperCase() == contato){
                    status = true 
                    let mensagens = {}
                    mensagens.usuario = dados.account
                    mensagens.contato = lista.name 
                    mensagens.mensagens = lista.messages
                    lista.push(mensagens)
                }
            })
        }
    })

    if (status == true){
        return lista
    }else{
        return status
    }
}
//console.log(getFiltroContatos('11966578996'))

module.exports = {
    DadosPessoais,
    DadosConta,
    DadosContatos,
    DadosConversa,
    getFiltroContatos
}







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
    
    let dado = dados
    let lista = { lista: [] }

    listaContatos.forEach(function(usuario) {
        if (dado == usuario.number){
            
            usuario.contacts.forEach(function(contato){
                let registro = { name: '', description: '', image: '' };
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
    let mensagens = {}
    let contato = String(nomeDoContato).toUpperCase()
    let lista = []
    let status = false 

    listaContatos.forEach(function(dados){
        if(Number(usuario) == dados.number){
            dados.contacts.forEach(function(item){
                if(String(item.name).toUpperCase() == contato){
                    status = true 
                    mensagens.usuario = dados.account
                    mensagens.contato = item.name 
                    mensagens.mensagens = item.messages
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
//console.log(getFiltroContatos('11987876567', 'Ana Maria'))

const getPalavra = (id, name, palavraChave) => {
    let usuarioNumero = Number(id)
    let contato = String(name).toUpperCase()
    let chave = String(palavraChave).toUpperCase()
    let data = {}
    let dadosUsuario = []
    let status = false

    listaContatos.forEach((item) => {
        if(usuarioNumero == item.number)
            data.nome = item.account
            item.contacts.forEach((contacts) => {
                if(contato == contacts.name.toUpperCase()) {
                    data.contato = contacts.name
                    contacts.messages.forEach((messages) => {
                        if(messages.content.toUpperCase().includes(chave)) {
                            dadosUsuario.push(
                                            {
                                                sender: messages.sender,
                                                content: messages.content,
                                                time: messages.time
                                            }
                                        )
                            status = true
                            data.conversas = dadosUsuario
                        }
                    })
                }
            })

    })
    if(status == true) {
        return data
    } else {
        return status
    }
}
//console.log(getPalavra('11987876567', 'Ana Maria', 'fine' ))

module.exports = {
    DadosPessoais,
    DadosConta,
    DadosContatos,
    DadosConversa,
    getFiltroContatos,
    getPalavra
}







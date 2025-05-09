/*
Objetivo: Criar API Integrada com projeto Front-End
Data: 30/01/2025
Autor: Rafa
Versão: 1.0
*/

//npm install express 
//npm install cors 
//npm install body-parser

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

const whatsapp = require('./modulo/funcoes.js')

app.get('/v1/whatsapp/dados/:numero', async function (request, response) {
    let numero = request.params.numero;
    let dados = whatsapp.DadosPessoais(numero);

    if (dados.id) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': 'Dados não localizados.' });
    }
})

app.get('/v1/whatsapp/conta/:numero', async function (request, response) {
    let numero = request.params.numero;
    let dados = whatsapp.DadosConta(numero);

    if (dados.nickname) {
        response.status(200).json(dados);
    } else {
        response.status(404).json({ 'status': 404, 'message': 'Dados não localizados.' });
    }
})


app.get('/v1/whatsapp/contatos/:numero', cors(), async function(request, response){
  let numero = request.params.numero;
  let dados = whatsapp.DadosContatos(numero);

  if(dados){
      response.status(200)
      response.json(dados)
  }else{
      response.status(404)
      response.json({'status': 404, 'message': 'Não foi encontrado'})
  }  
})

app.get('/v1/whatsapp/conversa/:numero', cors(), async function (request, response) {
    let numero = request.params.numero;
    let dados = whatsapp.DadosConversa(numero);

    if (dados) {
        response.status(200)
        response.json(dados);
    } else {
        response.status(404)
        response.json({ 'status': 404, 'message': 'Não foi encontrado' });
    }
})

app.get('/v1/whatsapp/filtro', cors(), async function (request, response) {
    let numero = request.query.numero;
    let dado = request.query.name;
    let dados = whatsapp.getFiltroContatos(numero, dado);

    if (dados) {
        response.status(200)
        response.json(dados);
    } else {
        response.status(404)
        response.json({ 'status': 404, 'message': 'Não foi encontrado' });
    }
})

app.get('/v1/whatsapp/filtro2', cors(), async function (request, response) {
    let numero = request.query.numero;
    let user = request.query.name;
    let chave = request.query.palavraChave;
    let dados = whatsapp.getPalavra(numero, user, chave);

    if (dados) {
        response.status(200)
        response.json(dados);
    } else {
        response.status(404)
        response.json({ 'status': 404, 'message': 'Não foi encontrado' });
    }
})

app.listen('8080', function () {
    console.log('API aguardando requisições...');
})

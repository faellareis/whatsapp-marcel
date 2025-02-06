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

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Crontol-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

const whatsapp = require('./modulo/funcoes.js')

app.get('/v1/whatsapp/dados/:numero', async function(request, response) {
    let numero = request.params.numero;
    let dados = whatsapp.DadosPessoais(numero);
  
    if (dados.id) { 
      response.status(200).json(dados);
    } else {
      response.status(404).json({ 'status': 404, 'message': 'Dados não localizados.' })
    }
  })

  app.get('/v1/whatsapp/conta/:numero', async function(request, response) {
    let numero = request.params.numero;
    let dados = whatsapp.DadosConta(numero);
  
    if (dados.nickname) {
      response.status(200).json(dados);
    } else {
      response.status(404).json({ 'status': 404, 'message': 'Dados não localizados.' });
    }
  })

  app.listen('8080', function() {
    console.log('API aguardando requisições...');
  })

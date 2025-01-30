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

const contatos = require('./modulo/funcoes.js')

//app.get
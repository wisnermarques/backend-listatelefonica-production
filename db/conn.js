const knex = require('knex')
const configuration = require('../knexfile')

// Verifica se a variável de ambiente NODE_ENV está definida
// Se não estiver definida, assume que estamos no ambiente de desenvolvimento
const environment = process.env.NODE_ENV || 'development'

// Usa a configuração do ambiente correspondente
const conn = knex(configuration[environment])

module.exports = conn

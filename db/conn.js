const knex = require('knex')
const configuration = require('../knexfile')

// Na constante defina qual ambiente vai utilizar: 'development' ou 'production'
const environment = process.env.NODE_ENV || 'production'

// Usa a configuração do ambiente correspondente
const conn = knex(configuration[environment])

module.exports = conn

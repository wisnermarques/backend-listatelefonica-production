// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'bd_lista',
      user: 'root',
      password: 'root',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'srv-bd-lista.mysql.database.azure.com',
      user: 'user_admin',
      password: 'Senac@2024',
      database: 'bd_lista',
    },
    ssl: {
      // Configuração específica para SSL
      rejectUnauthorized: false, // Defina como true se o servidor MySQL usar um certificado SSL válido
    },
  },
}

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
    client: 'pg',
    connection: {
      host: 'dpg-cll7gfeaov6s73f35er0-a.oregon-postgres.render.com',
      port: 5432,
      user: 'root',
      password: 'RsOBEzH3Ktbjm1MpiOyvTVeWxhGK5i6p',
      database: 'bd_lista',
      ssl: true,
    },
    
  },

  // production: {
  //   client: 'mysql',
  //   connection: {
  //     host: 'srv-bd-lista.mysql.database.azure.com',
  //     port: 3306,
  //     user: 'user_admin',
  //     password: 'Senac@2024',
  //     database: 'bd_lista',
  //   },
    
  // },
}

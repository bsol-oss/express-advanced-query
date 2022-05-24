import knex from 'knex'
import dbConfig from './knexfile.js'

let db = null
switch (process.env.NODE_ENV) {
    case 'test':
        db = knex(dbConfig.test)
        break
    case 'development':
        db = knex(dbConfig.development)
        break
    case 'production':
        db = knex(dbConfig.production)
        break
    default:
}

export default db

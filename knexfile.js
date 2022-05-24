/**
 * knexfile.js has to use commonjs syntax since knexjs doesn't understand es6 syntax
 */
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    // This is for production
    production: {
        client: 'mysql',
        connection: {
            host: process.env.AUTH_SQLHOST,
            user: process.env.AUTH_SQLUSER,
            password: process.env.AUTH_SQLPASSWORD,
            database: process.env.AUTH_SQLDB
        }
    },
    development: {
        client: 'mysql',
        connection: {
            host: process.env.AUTH_SQLHOST,
            user: process.env.AUTH_SQLUSER,
            password: process.env.AUTH_SQLPASSWORD,
            database: process.env.AUTH_SQLDB
        }
    },
    // This is for creating migration & seed files
    development1: {
        client: 'sqlite3',
        connection: {
            filename: 'demo.db'
        },
        useNullAsDefault: true,
        migrations: {
            directory: path.join(__dirname, 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'seeds')
        }
    },
    // This is for testing
    test: {
        client: 'sqlite3',
        connection: ':memory:',
        useNullAsDefault: true,
        migrations: {
            directory: path.join(__dirname, 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'seeds')
        }
    }
}

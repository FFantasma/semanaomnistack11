// Update with your config settings.

module.exports = {

    // Quando a aplicação esta sendo desonvolvida.
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/db.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    },

    //  Modo Produção para o time de desenvolvimento testar a aplicação online.
    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    // Modo Produção é quando a aplicação já esta pronta para ser usada pelo usuário.
    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
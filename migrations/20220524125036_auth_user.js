exports.up = function (knex) {
    return knex.schema.createTable('auth_user', function (table) {
        table.increments()
        table.string('name')
        table.string('email').notNullable()
        table.string('password')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('auth_user')
}

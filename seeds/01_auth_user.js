exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('auth_user')
        .del()
        .then(async function () {
            // Inserts seed entries
            return knex('auth_user').insert([
                {
                    id: 1,
                    name: 'Abc Xyz',
                    email: 'abc@example.com',
                    password: 'abc123'
                }
            ])
        })
}

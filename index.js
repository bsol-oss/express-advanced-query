import _ from 'lodash'
import knex from 'knex'

export const expressAdvanceQuery = async (
    host,
    user,
    password,
    database,
    table,
    query
) => {
    let DB = knex({
        client: 'mysql',
        connection: {
            host,
            user,
            password,
            database
        }
    })

    let queryObj = DB.from(table)
    if (query.pagination) {
        const paginationObj = JSON.parse(query.pagination)
        const rows = paginationObj.rows || 100
        queryObj = queryObj
            .limit(rows)
            .offset(rows * ((paginationObj.page || 1) - 1))
    }

    let result = await queryObj
    if (query.sortField)
        result = _.orderBy(result, [query.sortField], [query.sort])
    if (query.where) result = _.filter(result, JSON.parse(query.where))
    return result
}

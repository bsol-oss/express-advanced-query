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

    if (query.sorting) {
        const sortingObj = JSON.parse(query.sorting)
        const sortField = sortingObj.field ? sortingObj.field.split(',') : null
        if (sortField)
            queryObj = queryObj.then((resp) => {
                return _.orderBy(
                    resp,
                    sortField,
                    sortingObj.sort ? sortingObj.sort.split(',') : 'asc'
                )
            })
    }

    if (query.where) {
        const sortingObj = JSON.parse(query.where)
        queryObj = queryObj.then((resp) => {
            let result
            for (const obj in sortingObj) {
                result = resp.filter(
                    (res) =>
                        res[obj] &&
                        res[obj]
                            .toString()
                            .toLowerCase()
                            .includes(sortingObj[obj].toString().toLowerCase())
                )
            }
            return result
        })
    }
    let result = await queryObj
    return result
}

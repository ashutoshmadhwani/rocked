const { isNullish } = require('./utils')
const mysql = require('mysql2/promise')
class DBConnector {
    #credentials
    #connectionPool
    constructor(credentials) {
        this.#credentials = credentials
        this.#connectionPool = null
    }
    async getConnectionPool() {
        if (isNullish(this.#connectionPool)) {
            this.#connectionPool = await mysql.createPool(this.#credentials)
        }
        return this.#connectionPool
    }
    async executeQuery(sql, data) {
        const connection = await this.getConnectionPool()
        let [result, meta] = await connection.execute(sql, data)
        return result
    }
}
const Rocked = new DBConnector({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'rocked',
    connectionLimit: 10
})

module.exports = Rocked
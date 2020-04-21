const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "95250818",
    host: "localhost",
    port: 5432,
    database: "instructors"
})
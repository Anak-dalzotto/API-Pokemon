const knex = require ('knex')
const databaseConfig = require("./knexfile")
const databaseConnections = knex(databaseConfig);

module.exports = { databaseConnections }
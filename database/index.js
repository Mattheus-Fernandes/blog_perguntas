const Sequelize = require("sequelize")

const connection = new Sequelize("askme", 'root', "14109015", {
  host: "localhost",
  dialect: "mysql"
} )


module.exports = connection

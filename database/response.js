const Sequelize = require("sequelize")
const connection = require("./index")

const Response = connection.define("response", {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  idAsk: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Response.sync({force: false})

module.exports = Response
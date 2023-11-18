const Sequelize = require("sequelize")
const connection = require("./index")

const Ask = connection.define("aks", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Ask.sync({force: false})
  .then(() => {})
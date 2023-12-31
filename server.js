const express = require("express")
const app = express()
const connection = require("./database/index")
const askModel = require("./database/ask")
const responseModel = require("./database/response")
//Connection with database
connection
  .authenticate()
  .then(() => {
    console.log("Connected with the database")
  })
  .catch((msgError) => {
    console.log(msgError)
  })


//setting the EJS
app.set("view engine", "ejs")

//setting statics archivesj
app.use(express.static("public"))

//setting form receipt
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/", (req, res) => {
  askModel.findAll({raw: true, order: [
    ["id", "desc"]
  ]})
    .then(asks => {
      res.render("home", {
        asks
      })
    })
})

app.get("/ask", (req, res) => {
  res.render("ask")
})

app.post("/saveask", (req, res) => {
  const title = req.body.title
  const description = req.body.description

  askModel.create({
    title,
    description
  }).then(() => {
    res.redirect("/")
  })
})

app.get("/ask/:id", (req, res) => {
  const id = req.params.id

  askModel.findOne({where: {id}})
  .then(ask => {
    if(ask != undefined){

      responseModel.findAll({idAsk: ask.id, order: [["id", "desc"]]})
        .then((response) => {
          res.render("showAsk", {ask, response})
        })

    }else {
      res.redirect("/")
    }
  })

})


app.post("/response", (req, res) => {
    const body = req.body.body
    const idAsk = req.body.ask

    responseModel.create({
      body,
      idAsk
    }).then(() => {
      res.redirect("/ask/"+ idAsk)
    })
})

const port = 8080 || process.env
app.listen(port, () => console.log(`You are connected on the port ${port}`))
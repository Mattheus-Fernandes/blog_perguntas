const express = require("express")
const app = express()


//setting the EJS
app.set("view engine", "ejs")

//setting statics archives
app.use(express.static("public"))

//setting form receipt
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/ask", (req, res) => {
  res.render("ask")
})

app.post("/saveask", (req, res) => {
  const title = req.body.title
  const description = req.body.description

  res.send(`${title} ${description}`)
})



const port = 8080 || process.env
app.listen(port, () => console.log(`You are connected on the port ${port}`))
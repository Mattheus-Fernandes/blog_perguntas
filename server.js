const express = require("express")
const app = express()


//setting the EJS
app.set("view engine", "ejs")

//setting statics archives
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/ask", (req, res) => {
  res.render("ask")
})



const port = 8080 || process.env
app.listen(port, () => console.log(`You are connected on the port ${port}`))
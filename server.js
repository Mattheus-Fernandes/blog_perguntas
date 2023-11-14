const express = require("express")
const app = express()


//setting the EJS
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.send("success")
})



const port = 8080 || process.env
app.listen(port, () => console.log(`You are connected on the port ${port}`))
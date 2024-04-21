const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const PORT = 3000

app.get("/players", (req, res) => {
  res.json({
    data: [
      { id: 1, name: "SatyZ", class: "Assassin", side: "fury", level: "80" },
      { id: 2, name: "Musashi", class: "Guardian", side: "fury", level: "80" },
      { id: 3, name: "Capricorn", class: "Hunter", side: "fury", level: "80" },
      { id: 4, name: "Sukuna", class: "Assassin", side: "fury", level: "15" },
      { id: 5, name: "Nishimiya", class: "Pagan", side: "fury", level: "80" },
      { id: 6, name: "Himawa", class: "Oracle", side: "fury", level: "30" },
      { id: 7, name: "Sinterez", class: "Warrior", side: "fury", level: "80" },
      { id: 8, name: "Shunrei", class: "Warrior", side: "fury", level: "15" },
      { id: 9, name: "Myamoto", class: "Hunter", side: "fury", level: "60" },
    ],
    status: 200,
    limit: 9,
  })
})

//lendo dados da requisição http apartir da query
app.get("/players/data", (req, res) => {
  res.send(`Player resume: status: ${req.query.active}, created: ${req.query.created}`)
})

//lendo dados da requisição http apartir de parametros
app.get("/players/:id", (req, res) => {
  res.send(`Player ${req.params.id} selected!`)
})

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/players", (req, res) => {
  res.send(req.body.name)
})
//instânciando o app para utilizar
app.use((req, res, next) => {
  res.send("start!")
  next()
})

app.listen(PORT, () => {
  console.log(`BACKEND RUNNING IN: ${PORT} PORT...`)
})

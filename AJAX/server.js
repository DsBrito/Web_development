const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => console.log("Executando..."));

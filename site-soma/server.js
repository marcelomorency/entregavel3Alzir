const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { soma, divisao, mult } = require("./utils");
const port = 3001;

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Oi, mundo :-)");
});
app.post("/soma", (req, res) => {
  const { a, b } = req.body;
  const resultado = soma(a, b);
  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});
app.post("/divisao", (req, res) => {
  const { a, b } = req.body;
  const resultado = divisao(a, b);
  res.send(`O resultado da divisão de ${a} e ${b} é ${resultado}`);
});
app.post("/mult", (req, res) => {
  const { a, b } = req.body;
  const resultado = mult(a, b);
  res.send(`O resultado da multiplicação de ${a} e ${b} é ${resultado}`);
});

// iniciando o processo do servidor
app.listen(port, function () {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConexion = require("./conexion");

const infoplantas = require("./routes/tabla_infoplantas");
const plantas = require("./routes/tabla_plantas");
const usuarios = require("./routes/tabla_usuarios");

var app = express();
app.use(bodyParser.json());
app.use("/infoplantas", infoplantas);
app.use("/plantas", plantas);
app.use("/usuarios", usuarios);
app.listen(3000);
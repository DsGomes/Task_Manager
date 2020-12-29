const createError = require('http-errors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body');
const moment = require('moment');

const tarefasRouter = require('./src/routes/tarefasRoute');
const usuariosRouter = require('./src/routes/usuariosRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

const log = fs.createWriteStream(
  path.join(__dirname, "./logs", `express${moment().format('YYYY-MM-DD')}.log`), { flags: "a" }
);

morganBody(app, {
  noColors: true,
  stream: log,
});

app.use('/tarefas', tarefasRouter);
app.use('/usuarios', usuariosRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

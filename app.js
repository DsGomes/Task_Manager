var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var tarefasRouter = require('./src/routes/tarefasRoute');
var usuariosRouter = require('./src/routes/usuariosRoute');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/tarefas', tarefasRouter);
app.use('/usuarios', usuariosRouter);

mongoose.connect('mongodb://127.0.0.1:27018/TaskManagerDB', {useNewUrlParser: true});
mongoose.set('bufferTimeoutMS', 100000);

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
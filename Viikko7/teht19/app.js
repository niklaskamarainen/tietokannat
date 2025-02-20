var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var opiskelijatRouter = require('./routes/opiskelijat');
var opintojaksoRouter = require('./routes/opintojakso');
var arviointiRouter = require('./routes/arviointi');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/opiskelijat', opiskelijatRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/arviointi', arviointiRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nconf = require('nconf');
var winston = require('winston');
var nunjucks = require('nunjucks');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var popularRouter = require('./routes/popular');
var app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

nconf.argv({
  'p':{
    'alias':'http:port',
    'describe':'the port to listen on'
  }
});

nconf.env("__");

nconf.file("config.json");

nconf.defaults({
  "http":{
    "port":3000
  }
});

winston.add(winston.transports.File, {"filename": "error.log", "level": nconf.get("logger:fileLevel")});

winston.info('Initialised nconf');
winston.info('HTTP Config: ',nconf.get("http"));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/popular', popularRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//development error handler
//will print stack stacktraces
if(app.get('env') === 'development')
{
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
}

// production error handler
// no stacktraces leaked to usersRouter

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

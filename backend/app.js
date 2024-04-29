var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var matchesRouter = require('./routes/matches');
var prevmatchesRouter = require('./routes/previousMatches');
var upcomingmatchesRouter = require('./routes/upcomingMatches');
var nextmatchRouter = require('./routes/nextMatch');
var matchDetails = require('./routes/matchdetails')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cors({
  origin: 'https://aquamarine-daifuku-60efd4.netlify.app'
}));

app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/users', usersRouter);
app.use('/matches', matchesRouter);
app.use('/prevmatches', prevmatchesRouter);
app.use('/upcomingmatches', upcomingmatchesRouter);
app.use('/nextmatch', nextmatchRouter);
app.use('/matchdetails',matchDetails)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

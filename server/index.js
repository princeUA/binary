const express = require('express');
const path = require('path');
const createError = require('http-errors');
const db = require('mongoose');

db.connect('mongodb://localhost/binary', {
  useNewUrlParser: true
});

const PORT = process.env.PORT || 3000;
const api = require('./api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));
app.use('/api', api);

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

app.listen(PORT, function(){
  console.log('Express server is up on port:' + PORT);
})

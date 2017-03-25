var express = require('express');
var logger = require('morgan');
var fappicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cookie = require('cookie');
var path = require('path');
var bodyParser = require('body-parser');
var randomstring = require('randomstring');
var app = express();
var debug = require('debug')('dicon:server');
var rndString = require("randomstring");
var session = require('express-session');
var fs = require('fs');
var router = express.Router();
var async = require('async');
var CORS = require('cors')();
var device = require('express-device');
require('./routes/func');

//module setting
var db = require('./mongo');
var passport = require('./passport')(db.Users);


//set engin
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your fappicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret: "sexonthebeach",  resave: false ,saveUninitialized: true, maxAge: 60*10000 }));
app.use(device.capture());
app.use(CORS);

//router setting
var index = require('./routes/index')(router, db.Apply);
var finish = require('./routes/finish')(router);
var ask = require('./routes/ask')(router);
var user = require('./routes/users')(router);
var apply = require('./routes/apply')(router, db.Apply);
var result = require('./routes/result')(router);
var access = require('./routes/access')(router);
var explain = require('./routes/explain')(router);

//router setting
app.use('/', index);
app.use('/finish', finish);
app.use('/ask', ask);
app.use('/user', user);
app.use('/apply', apply);
app.use('/result', result);
app.use('/explain', explain);
app.use('/access', access);


//create server
app.on('error', onError);
app.on('listening', onListening);

//error handle
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0)  return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') 
    throw error;
    

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  console.log(addr);

  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = app;

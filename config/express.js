var config = require('./config'),
  express = require('express'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path'),
  stylus = require('stylus'),
  nib = require('nib'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  fs = require('fs'),
  session = require('express-session');

module.exports = function() {
	var app = express();
	app.locals.appTitle = 'MediaSearch-Sites';
	app.locals.error = '';
	if (process.env.NODE_ENV === 'development') {
	  app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
      app.use(compress());
	}
	app.use(express.cookieParser(config.cookieSecret));
	app.use(session({
	  saveUninitialized: true,
	  resave: true,
	  secret: config.sessionSecret
	}));
	app.use(bodyParser.urlencoded({
	  extended: true
	}));	
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(app.router);	

	app.set('port', process.env.PORT || 3000);
	app.set('views', './app/views');
	app.set('view engine', 'ejs');
	
	require('../app/routes/index.server.routes.js')(app);

	app.use(express.static('./public'));
	
	return app;
};
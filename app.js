
/**
 * Module dependencies.
 */

var express = require('express')
var bikepool = require('./routes/bikepool')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', bikepool.home);
app.get('/routes', bikepool.routes);
app.get('/route', bikepool.route);
app.get('/about', bikepool.about);


app.listen(3002);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

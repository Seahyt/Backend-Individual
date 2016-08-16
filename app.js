// MY MAIN APP JS

var express = require('./config/express'),
    mongoose = require('./config/mongoose');

// var db = mongoose();
var app = express();

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.set('port', (process.env.PORT || 3000));

    app.listen(app.get('port'), function() {
      console.log('My express server is running at localhost', app.get('port'));
    });

    module.exports = app;

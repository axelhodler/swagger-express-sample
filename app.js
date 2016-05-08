'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var app = express();
var cors = require('cors');
module.exports = app; // for testing
app.use(cors());
app.use('/docs', express.static('swagger-ui'));

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

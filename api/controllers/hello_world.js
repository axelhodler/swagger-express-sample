'use strict';

module.exports = {
  hello: hello
};

function hello(req, res) {
  var name = req.swagger.params.name.value || 'stranger';

  res.json('Hello, ' + name + '!');
}

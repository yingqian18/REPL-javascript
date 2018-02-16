const repl = require('repl');
var CoffeeScript = require('coffee-script');
require('coffee-script/register');
var vm = require('vm');


function myWriter(output) {
    return '';
}


repl.start({
  prompt: "coffee> ",
  eval: function(code, context, file, cb) {
    try {
      code = CoffeeScript.compile(code, {filename: file, bare: true});
      cb(null, vm.runInContext(code, context, file));
    }
    catch (err) {
      cb(err);
    }
  },
  writer: myWriter
});

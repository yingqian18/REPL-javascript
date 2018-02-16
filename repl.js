const repl = require('repl');

function initializeContext(context) {
    context.m = 'test';
}

function myWriter(output) {
    return '';
}

//the default writer function
//require('util').inspect

const r = repl.start({ prompt: '> ', writer: myWriter });

initializeContext(r.context);

r.on('reset', initializeContext);

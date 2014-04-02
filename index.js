var connect = require('connect');
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade');
var makeLess = require('./lib/processor/less');
var makeRoot = require('./lib/processor/root');
var reject = require('./lib/processor/reject');

module.exports = function(dir_name){
	var app = connect();
	app
	  .use(reject())
	  .use(serveStatic(dir_name))
	  .use(makeRoot())
	  .use(makeLess(dir_name))
	  .use(makeJade(dir_name))
	  .use(function(req,res,next){
		if (req.url === '/current-time'){
			res.end((new Date()).toISOString());
		}else{
			res.end("Cannot Get " + req.url);
		}
	});

	return app;
}
var connect = require('connect');
var serveStatic = require('serve-static');
var makeJade = require('./lib/processor/jade');

module.exports = function(dir_name){
	var app = connect();
	app
	  .use(makeJade(dir_name))
	  .use(function(req,res,next){
		if (req.url === '/current-time'){
			res.end((new Date()).toISOString());
		}if (req.url === '/'){
			res.end("Welcome!");
		}else{
			res.end("Cannot Get " + req.url);
			next();
		}
	});
	app.use(serveStatic(dir_name));

	return app;
}
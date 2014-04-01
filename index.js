var connect = require('connect');

module.exports = function(){
	var app = connect();
	app.use(function(req,res){
		if (req.url === '/current-time'){
			res.end((new Date()).toISOString());
		}
		if (req.url === '/'){
			res.end("Welcome!");
		}
	});

	return app;
}
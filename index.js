var mongoRepository = require('./stockRepository')();
var app = require ("./app")(mongoRepository);

var port = process.env.PORT;

if(port === undefined){
	port = 1001;
}
console.log("port: " + port);
app.listen(port, function () {console.log("listening on port " + port)});
/*
http.get({path: "/stock"}, (res) => {
	console.log("stock");
})
*/
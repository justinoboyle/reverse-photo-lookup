var express = require("express");

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
});
app.use('/static', express.static('static'));

app.use('/proxy', function(req, res) {
  var url = req.url.replace('/?url=','');
  req.pipe(request(url)).pipe(res);
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on port " + port);
});

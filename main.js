var express = require("express");

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
});
app.use('/static', express.static('static'));


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on port " + port);
});

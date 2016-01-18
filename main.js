var express = require("express");
var request = require('request');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
});
app.use('/static', express.static('static'));

app.use('/proxy', function(req, res) {
  console.log(req.url);
  var url = req.url.replace('/?url=','');
//  url = decodeURIComponent(url);
  request.post(
    url,
    { },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
            return;
        }
    }
);
  req.pipe(request(url)).pipe(res);
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on port " + port);
});

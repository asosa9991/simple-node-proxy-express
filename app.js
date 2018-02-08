var express = require("express"),
 app = express(),
request = require("request");

app.post("/*", function (req, res) {
console.log(req.connection.remoteAddress);
console.log(req.url);
 var url = process.env.FWD_HOST_URL + req.url;
var r = request.post({uri: url, json: req.body});
req.pipe(r).pipe(res);
});


app.listen(5000)

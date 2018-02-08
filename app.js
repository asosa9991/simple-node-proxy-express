var express = require("express"),
 app = express(),
 https = require("https"),
 fs = require("fs"),
 options = {
 cert: fs.readFileSync("./server.crt"),
 key: fs.readFileSync("./server.key")
 };

var request = require("request");

app.post("/*", function (req, res) {
console.log(req.connection.remoteAddress);
console.log(req.url);
 var url = process.env.FWD_HOST_URL + req.url;
var r = request.post({uri: url, json: req.body});
req.pipe(r).pipe(res);
});

var server = https.createServer(options, app);

server.listen(8443, function () {
 console.log("server running at https://localhost:8443/")
});

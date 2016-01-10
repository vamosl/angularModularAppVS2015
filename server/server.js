var express = require('express');
var app = express();
var path = require("path");
var port = process.env.PORT || 7200;

var rootFolder = path.join(__dirname, '../client/');

app.use('/client', express.static('client'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function (req, res){
    res.sendFile('index.html', { root: rootFolder });
})
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
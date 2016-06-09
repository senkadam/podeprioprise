/**
 * Created by ejdy on 9.6.16.
 */
var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/static/'));
// viewed at http://localhost:3009
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen( process.env.PORT || 3009);
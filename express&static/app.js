var express = require('express');

var app = express()


app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8080, function() {
    console.log('app run port 8080')
})
var express = require('express');

var app = express()

var birds = require('./birds');

var index = require('./index')

app.use('/birds', birds);
app.use('/index', index)





app.listen(8080, function() {
    console.log('app run port 8080')
})
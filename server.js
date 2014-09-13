'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Hello user! running at localhost: %d', server.address().port);
});

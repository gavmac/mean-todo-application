'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var port = process.env.PORT || 8000;
var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

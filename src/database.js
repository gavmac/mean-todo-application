'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo-final', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});

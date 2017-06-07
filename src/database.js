'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_h8m062bg:((282820))gG@ds113282.mlab.com:13282/heroku_h8m062bg', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});

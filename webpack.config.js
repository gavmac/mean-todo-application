var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: 'https://evening-plains-98647.herokuapp.com/app',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: 'https://evening-plains-98647.herokuapp.com/public/scripts',
        filename: 'todo.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};

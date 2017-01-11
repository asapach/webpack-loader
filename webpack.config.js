var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        '0/entry.js': './entry.0.js',
        '1/entry.js': './entry.1.js',
        '2/entry.js': './entry.2.js'
    },
    output: {
        path: path.join(__dirname, "js"),
        filename: "[name]"
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "runtime.js",
            minChunks: Infinity
        }),
        new CommonsChunkPlugin({
            name: "commons.js",
            chunks: ['0/entry.js', '1/entry.js']
        }),
        new CommonsChunkPlugin({
            name: "extra.js",
            chunks: ['0/entry.js', '2/entry.js']
        })
    ]
}
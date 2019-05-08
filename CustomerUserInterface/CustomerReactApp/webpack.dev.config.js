var webpack = require('webpack');
var exeDirpath = __dirname;
module.exports = {
    mode: "development",
    context: exeDirpath,
    entry: {
        index: exeDirpath + "\\app\\app.jsx"
    },
    output: {
        path: exeDirpath + "\\dist"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: ['/node_modules/', '/\.ejs$/']
        }]
    }
};
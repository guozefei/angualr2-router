var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var config = require('./webpack.default.config')('step5');

module.exports = config;
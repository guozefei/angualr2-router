var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = function(dir) {
    return {
        devtool: 'eval',
        entry: {
            vendor: ['babel-polyfill', './' + dir + '/vendor.ts'],
            index: ['./' + dir + '/index.ts']
        },
        output: {
            path: path.join(__dirname, dir),
            filename: '[name].bundle.js'
        },
        resolve: {
            modulesDirectories: [__dirname, 'node_modules', dir],
            alias: {
            },
            extensions: ['', '.js', '.ts']
        },
        module: {
            loaders: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader'],
                exclude: [/node_modules\/(?!(ng2-.+))/]
            },{ 
                test: /\.(html)$/, 
                loader: 'raw-loader'
            },{
                test: /\.(css|less)$/,
                loader: 'style!css!less'
            },{
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=25000',
                include: [path.join(__dirname, './' + dir + '/style/images')]
            }]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('dev'),
                '__ENV__':  JSON.stringify('dev')
            }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: ['index', 'vendor']
            // }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: ['preview', 'vendor']
            // }),
            /*,new ExtractTextPlugin("./main.css")*/
        ],
        watch: true
    };
}

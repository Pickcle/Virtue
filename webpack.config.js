var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var argv = require('yargs').argv;
var packPath = '';
if (argv.e === 'prod') {
  packPath = 'dist';
} else {
  packPath = 'static';
}
var appPath = path.join(__dirname, packPath);

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: appPath,
    filename: '[name].js'
    // filename: '[name]-[chunkhash].js'
    // filename: path.join(__dirname)
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  plugins: [
    new CleanWebpackPlugin([packPath], {
      root: __dirname,
      verbose: true,
      dry: false,
      exclude: []
    }),
    new ExtractTextPlugin('style.css')
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   }
    // })
  ]
}

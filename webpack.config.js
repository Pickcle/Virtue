var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var argv = require('yargs').argv;
var packPath = '';
if (argv.e === 'prod') {
  packPath = 'dist';
} else {
  packPath = 'static';
}

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: __dirname + '/' + packPath,
    filename: '[name]-[chunkhash].js'
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
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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
    })
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

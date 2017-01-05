//区分开发和生产环境路径
var path = require('path');
//执行webpack指令
var webpack = require('webpack');
//webpack打包之前清理旧文件
var CleanWebpackPlugin = require('clean-webpack-plugin');
//抽取css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//生成入口html
var HtmlWebpackPlugin = require('html-webpack-plugin');
//使css的改动不会影响js的chunkhash
var WebpackMd5Hash = require('webpack-md5-hash');
//可在webpack打包命令中自定义变量
var argv = require('yargs').argv;
var packPath = '';
if (argv.e === 'prod') {
  packPath = 'dist';
} else {
  packPath = 'static';
}
var appPath = path.join(__dirname, packPath);

var nodeModulePath = path.join(__dirname, 'node_modules');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: appPath,
    filename: '[name]-[chunkhash].js'
    // filename: '[name]-[chunkhash].js'
    // filename: path.join(__dirname)
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
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
    alias: {
			// react: path.join(nodeModulePath, 'react/react.js'),
			'react-router': path.join(nodeModulePath, 'react-router/lib'),
			'react-dom': path.join(nodeModulePath, 'react-dom'),
			'react-thunk': path.join(nodeModulePath, 'react-redux/dist/redux-thunk.js'),
			'es6-promise': path.join(nodeModulePath, 'es6-promise/dist/es6-promise'),
			redux: path.join(nodeModulePath, 'redux/dist/redux.js'),
			src: path.join(__dirname, './src'),
			common: path.join(__dirname, './src/common'),
			pages: path.join(__dirname, './src/pages')
		},
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  plugins: [
    new CleanWebpackPlugin([packPath], {
      root: __dirname,
      verbose: true,
      dry: false,
      exclude: []
    }),
    new ExtractTextPlugin('style-[contenthash].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackMd5Hash()
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

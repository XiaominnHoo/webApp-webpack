/**
 * Created by huxiaomin on 16/5/4.
 */

var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var JS_PATH = path.resolve(ROOT_PATH, 'src/js');

module.exports = {
  entry: {
    booking: path.resolve(JS_PATH, 'views/booking/booking.js'),
    charge: path.resolve(JS_PATH, 'views/charge/charge.js'),
    exam: path.resolve(JS_PATH, 'views/exam/exam.js'),
  },

  output: {
    path: BUILD_PATH,
    publicPath: '/public/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
        exclude: /node_modules/,
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
    ]
  },

  externals: {
    "jquery": "jQuery",
  },

  plugins: [
    //代码压缩
    new webpack.optimize.UglifyJsPlugin({minimize: true}),

    new CommonsChunkPlugin({
      name: "common",
      filename: "common.js",
      chunks: ["booking", "charge", "exam"]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.json', '.scss'],
  }

};
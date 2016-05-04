/**
 * Created by huxiaomin on 16/5/4.
 */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var JS_PATH = path.resolve(ROOT_PATH, 'src/js');

//提取入口文件公用脚本部分
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//更灵活的使用 commonsChunkPlugin
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

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

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },

  devtool: 'source-map',

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
    "_": "underscore"
  },

  plugins: [
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
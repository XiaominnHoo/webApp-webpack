/**
 * Created by huxiaomin on 16/5/4.
 */

var path = require('path');
var webpack = require('webpack');

//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var JS_PAGES_PATH = path.resolve(ROOT_PATH, 'src/js/pages');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    booking: path.resolve(JS_PAGES_PATH, 'booking.js'),
    charge: path.resolve(JS_PAGES_PATH, 'charge.js'),
    exam: path.resolve(JS_PAGES_PATH, 'exam.js'),
  },

  output: {
    path: BUILD_PATH,
    publicPath: '/public/',
    filename: 'js/[name].js'
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
      filename: "js/common.js",
      chunks: ["booking", "charge", "exam"]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    alias: {
      jsCompo: "../components",
      jsModu: "../modules",
      cssComp: "../../sass/components",
      cssModu: "../../sass/modules",
      cssPage: "../../sass/pages",
    },
    extensions: ['', '.js', '.json', '.scss'],
  }

};
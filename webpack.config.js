const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");


module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'           
  },
  module: {
    rules: [
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",   
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
          devserver: {
            port: 3000
          },
        }
      })
  ]
};
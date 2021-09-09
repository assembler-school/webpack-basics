const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {

  mode: 'development',

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

  entry: path.resolve(__dirname, 'src/main.js'),  
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new HtmlWebpackPlugin({
      title: "Webpack Workshop Test",
      template: path.resolve(__dirname, "src/index.html"),
      filename: 'index.html'
    }),

    new CleanWebpackPlugin(),

  ],
  
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },/*
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset'
      },*/
      {
        test: /\.(png|jpe?g|svg)$/i,
        enforce: 'pre',
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "images"
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 15,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.01, 0.10],
                speed: 4,
              }
            },
          }
        ]
      }
    ], 
  },

}
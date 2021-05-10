const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./assets/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './assets/src/index.html'
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new ImageMinimizerPlugin({
        minimizerOptions: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            
            "imagemin-gifsicle", "imagemin-mozjpeg", "imagemin-pngquant", "imagemin-svgo"
          ],
        },
      }),
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
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {

            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            
            type: "asset",
            
            },
            
            {
            
            test: /\.html$/i,
            
            loader: "html-loader",
            
            },
            
        ],
      },
      
      
};

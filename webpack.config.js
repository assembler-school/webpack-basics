const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ImageMinimizerPlugin({
          filter: (source) => {
            // The `source` argument is a `Buffer` of source file
            // The `sourcePath` argument is an absolute path to source
            if (source.byteLength < 8192) {
              return false;
            }
    
            return true;
          },
          minimizerOptions: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              'imagemin-gifsicle',
              'imagemin-mozjpeg',
              'imagemin-pngquant',
              'imagemin-svgo'
            ],
          },
        }),
    ],
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader","sass-loader",],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset',
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
          }
        ],
    },
    mode: "production"    
}
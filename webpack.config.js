const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

module.exports = {
  entry: [__dirname + "/src/main.js", __dirname + "/src/sass/main.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: "url-loader?limit=8",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html"
      }),
      new MiniCSSExtractPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    ]
};

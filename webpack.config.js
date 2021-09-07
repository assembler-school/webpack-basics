const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/app.js", //?main: path.resolve(__dirname, "./src/app.js")
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Basics",
      template: path.resolve("./src/html/index.html"),
      filename: "main.html",
      favicon: "./favicon.svg",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // "\" para interpretar el siguiente caracter como tal, $ para indicar que se acaba la string. En general, todo junto sirve para decir archivos que acaben en ".js"
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

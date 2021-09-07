const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devServer: {
    historyApiFallback: true,
    port: 4000,
    open: true,
    compress: true,
    hot: true,
  },

  entry: {
    main: path.resolve(__dirname, "./src/js/main.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Workshop Test",

      template: path.resolve(__dirname, "./index.html"),

      filename: "index.html",
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
};

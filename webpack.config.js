const path = require("path");
//const webpack = require("webpack");

module.exports = {
  mode: "development",

  devServer: {
    historyApiFallBack: true,
    port: 4000,
    open: true,
    compress: true,
    hot: true,
  },

  entry: {
    main: path.resolve(__dirname, ".src/js/main.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
};

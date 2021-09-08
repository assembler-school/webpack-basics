const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      title: "Webpack Pill",
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          //"style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(png|svg|jpg)$/,
        type: "asset",
      },
    ],
  },
};

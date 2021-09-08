const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/app.js", //?main: path.resolve(__dirname, "./src/app.js")
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].bundle.js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
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
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "image-webpack-loader",
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: "pre",
        options: {
          pngquant: {
            quality: [0.65, 0.9],
            speed: 9,
          },
        },
      },
    ],
  },
};

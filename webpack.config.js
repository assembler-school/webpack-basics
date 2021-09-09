const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/js/main.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024, //
          },
        },
      },
      {
        test: /\.png$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, //
          },
        },
      },
      {
        test: /\.(jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack-Basics-Pill",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};

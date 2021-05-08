const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|jpg|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 12000,
              // fallback: require.resolve("image-webpack-loader"),
            },
          },
        ],
      },

      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     "file-loader",
      //     {
      //       loader: "image-webpack-loader",
      //       options: {
      //         bypassOnDebug: true,
      //         disable: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};

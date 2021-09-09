const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // dev tool to see what its going on in bundle.js file
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024 // 12kb
          }
        },

      },
      {
        test: /\.png$/,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },

      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }


    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Run",
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html" //va usar el path del output
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CompressionPlugin({
      filename: 'imgCompr/[name].gz',
      test: /\.(png|jpg)$/,
      threshold: 8192, //8kb
      deleteOriginalAssets: true
    })
  ]
};
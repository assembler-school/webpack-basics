const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: {
    port: 4000,
    open: true,
    compress: true,
    hot: true
  },
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename:"[name].bundle.js",
  },
  
  plugins: [
    new HtmlWebpackPlugin({template:path.resolve(__dirname, "./src/index.html"),
    filename: "index.html",
  }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ],

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use : ['babel-loader']
        },
        {
            test: /\.(scss|css)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }
    ]
}


}
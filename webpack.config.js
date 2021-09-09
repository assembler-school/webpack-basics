
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        port: 4010,
        open: true,
        compress: true,
        hot: true
    },
    entry: {
        main: path.resolve(__dirname, "./Javascript/main.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "index.html",
            favicon: "./assets/Images/Pokeball.svg",
            templateParameters: {
                title: 'Curso de Webpack de EscuelaIT'
              }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCSSExtractPlugin()
    ], 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/inline',
            },
        ]
    }
}
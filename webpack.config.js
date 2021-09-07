const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, { mode }) => {
    console.log({ mode })

    const isProduction = mode === 'production'

    return {
        devServer: {
            historyApiFallback: true,
            port: 4000,
            open: true,
            compress: true,
            hot: true
        },
        entry: {
            main: path.resolve(__dirname, "./src/main.js")
        },
        output: {
            path: path.resolve(__dirname, "./build"),
            filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Webpack Workshop Test",
                template: path.resolve(__dirname, "./src/index.html"),
                filename: "index.html"
            }),
            new webpack.HotModuleReplacementPlugin(),
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
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        }
    }
}
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
            main: path.resolve(__dirname, "./src/assets/js/main.js")
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
            new MiniCssExtractPlugin({
                filename: isProduction ? '[name].[hash].css' : '[name].css',
                chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
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
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                },
            ]
        },
        optimization: {
            minimizer: [
                // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
                // `...`,
                new CssMinimizerPlugin(),
            ],
        },
    }
}
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, { mode }) => {
    console.log({ mode })

    const isProduction = mode === 'production'

    return {
        devServer: {
            historyApiFallback: true,
            open: true,
            compress: true
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
                filename: isProduction ? '[name].[fullhash].css' : '[name].css',
                chunkFilename: isProduction ? '[id].[fullhash].css' : '[id].css'
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran", { progressive: true }],
                        ["optipng", { optimizationLevel: 7 }],
                        [
                            "svgo",
                            {
                                plugins: [
                                    {
                                        name: "removeViewBox",
                                        active: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            }),
            /**
             * All files inside webpack's output.path directory will be removed once, but the
             * directory itself will not be. If using webpack 4+'s default configuration,
             * everything under <PROJECT_DIR>/dist/ will be removed.
             * Use cleanOnceBeforeBuildPatterns to override this behavior.
             *
             * During rebuilds, all webpack assets that are not used anymore
             * will be removed automatically.
             *
             * See `Options and Defaults` for information
             */
            new CleanWebpackPlugin({
                dry: isProduction ? false : true,
            }),
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
                {
                    test: /\.(png)$/i,
                    type: "asset",
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024,
                        },
                    },
                },
                {
                    test: /\.svg$/i,
                    type: "asset/inline",
                    parser: {
                        dataUrlCondition: {
                            maxSize: 12 * 1024,
                        },
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: "asset",
                    generator: {
                        filename: ({ filename }) => filename.replace('', '')
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'image-webpack-loader',
                    // Specify enforce: 'pre' to apply the loader
                    // before url-loader/svg-url-loader
                    // and not duplicate it in rules with them
                    enforce: 'pre'
                }
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
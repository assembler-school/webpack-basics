const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = {
    mode: "production",
    entry: {
        index: './src/js/index.js',
        indeximg: './src/js/images.js',
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new ImageMinimizerPlugin({
            test: /\.(png|jpg|gif|svg)$/i,
            filter: (source) => {
                if (source.byteLength < 8192) {
                    return false;
                }
                return true;
            },
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    "imagemin-mozjpeg",
                    "imagemin-pngquant",
                ],
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition:
                        { maxSize: 2000 * 1024 }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
};
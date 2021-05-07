const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
//const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
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
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset",
      },
      /*  {
        test: /\.(svg)$/i,
        type: "asset/inline",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
      {
        test: /\.(svg)$/i,
        type: "asset/resource",
        parser: {
          dataUrlCondition: {
            minSize: 8 * 1024, // 4kb
          },
        },
      }, */
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
    new ImageMinimizerPlugin({
      test: /\.(png|jpg|gif|svg)$/i,
      filter: (source) => {
        if (source.byteLength >= 8192) {
          return true;
        }

        return false;
      },
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          "imagemin-mozjpeg",
          "imagemin-pngquant",
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            /*esecificamos el tamaño máximo
             *que queremos que pase a base64
             +maxSize: 0.1 * 1024, --> cogeria todas las imagenes menores de 0.1kb
             */
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ImageMinimizerPlugin({
      filter: (source, sourcePath) => {
        // The `source` argument is a `Buffer` of source file
        // The `sourcePath` argument is an absolute path to source
        if (source.byteLength < 8192) {
          return false;
        } else {
          return true;
        }
      },
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["mozjpeg", { progressive: true }],
          ["pngquant", { optimizationLevel: 5 }],
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

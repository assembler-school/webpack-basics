`#html` `#css` `#sass` `#javascript` `#webpack` `#es6` `#master-in-software-engineering`

# Webpack pill: Steps

## 1 Installing Webpack and webpack-dev-server

```
npm install -g webpack webpack-cli
npm install webpack-dev-server
```

## 2 Forking and cloning root repository

From Assembler https://github.com/assembler-school/webpack-basics

## 3 Initializing project and creating package.json

```
npm init -y
```

## 4 Building src folder

a) Creating main.js, our entrypoint.

b) Creating module-a.js and module-b.js, as ES6 and jQuery functionalities.

c) Creating main.scss using \_colors.scss and \_text.scss.

d) Creating index.html.

e) Importing all of them into our entry point main.js

```
// main.js
import "./index.html";
import "jquery";
import "./module-a.js";
import "./module-b.js";
import "./main.scss";
```

## 5 Initializing our webpack.config.js

```

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

## 6 Installing HtmlWebpackPlugin and jQuery

Installing HtmlWebpackPlugin and adding it as plugin on our webpack.config.js

```
npm install --save-dev html-webpack-plugin
```

```
// webpack.config.js
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ]
```

## 7 Installing SASS loader

```
npm install sass-loader sass webpack --save-dev
```

```
// webpack.config.js
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
    ],
  },
```

## 8 Compiling our webpack and checking results

```
npm run build
```

Then, we get a new folder called "dist", which contain our ouput bundle.js and index.html, opening index.html we should be able to see our modifications by JS and SASS.

## 9 Managing images with webpack

### 9.1 Importing images into our entry point

```
// main.js
import "./pngsmall.png";
import "./svgsmall.svg";
import "./pngbig.png";
import "./jpgbig.jpg";
```

```
// index.html
<div class="imgDiv">
  <img src="./pngsmall.png" alt="" />
  <img src="./svgsmall.svg" alt="" />
  <img src="./pngbig.png" alt="" />
  <img src="./jpgbig.jpg" alt="" />
</div>
```

### 9.2 Installing html-loader and Assets manager

```
npm install --save-dev html-loader
```

Adding them into our webpack.config.js

```
// webpack.config.js
module: {
  rules: [
    ...
    {
      test: /\.html$/i,
      loader: "html-loader",
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset",
    },
  ],
},
```

### 9.3 Installing and adding ImageMinimizerPlugin

First, we install ImageMinimizerPlugin:

```
npm install image-minimizer-webpack-plugin --save-dev
```

Installing lossless plugin for optimization

```
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo --save-dev
```

Adding them into our webpack.config.js

```
// webpack.config.js
plugins: [
  ...
  new ImageMinimizerPlugin({
    minimizerOptions: {
      // Lossless optimization with custom option
      // Feel free to experiment with options for better result for you
      plugins: [
        "imagemin-gifsicle",
        "imagemin-jpegtran",
        "imagemin-optipng",
        [
          "imagemin-svgo",
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
```

### 9.4 Applying size filter

In order to be able to filter actions depending of images size, we add a filter into the plugin:

```
// webpack.config.js
plugins: [
...
new ImageMinimizerPlugin({
  test: /\.(jpe?g|png|gif|svg)$/i,
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
        "imagemin-gifsicle",
        "imagemin-jpegtran",
        "imagemin-optipng",
        [
          "imagemin-svgo",
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

```

## 10 Compiling our webpack and checking results

```
npm run build
```

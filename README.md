`javascript` `webpack` `jquery` `html` `sass`

# Webpack Project

## Get started 🚀

Documentation of our Webpack project

### Pre-requirements 📋

_You must have npm installed. If not you can run:_

```
npm install
```

### Installation 🔧

_We need to set an enviroment installing the basics documents, scripts and modules_

Setting environment

```
npm init -y
```

Installation of Webpack

```
npm install -D webpack webpack-cli
```

Installation of Webpack Server

```
npm install -D webpack-dev-server
```
Installation of css-loader and style-loader

```
npm install -D css-loader style-loader
```

Installation of sass & sass-loader

```
npm install -D sass sass-loader
```

Installation of css-loader and style-loader

```
npm install -D css-loader style-loader
```

Installation of jQuery

```
npm install -D jquery
```

Installation of htmlWebpackPlugin and html-loader

```
npm install -D html-webpack-plugin html-loader
```

Installation of url-loader

```
npm install -D url-loader
```

Installation of Babel

```
npm install -D @babel/core @babel/preset-en babel-loader
```

## Project structure ⚙️

```
./assets
./dist
./node_modules
./src
./.babelrc
./LICENSE
./package-lock.json
./package.json
./README.md
./webpack.config.js
```

## /assets

Folder for sass files

## /dist

Folder for webpack generated files

## /src

Folder for source code

## . /

Root folder for .json files and webpack configuration file

# Workflow 🔩

_Base elements_

```
- /src/index.html
- /src/js/index.js
```
./webpack.config.js

```
entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },  
```
```
new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html",
})
```

We set the entry point of our bundle using the index.js and we set the output to a new bundle.js wiche will be created in the ./dist folder.

This will generate the following structure:

```
./dist
    bundle.js
    index.html
```

In our /src/js folder we have the js files wiche run all the functions:

```
./src
    index.js
    module-a.js
    module-b.js
```

index.js is the entry file where we will import all the needed modules.

```
- /src/js/index.js

import "../index.html";
import './module-a.js';
import './module-b.js';
import "../../assets/main.scss";
import "../img/background-image.jpg";
import "../img/elipse.png";
import "../img/elipse2.svg";
import "../img/elipse3.png";

```

## Deployment 📦

Now we can build our application:

Generating the /dist/bundle.js and the /dist/index.thml

```
npm run build
```
Setting a watcher for SASS

```
sass --watch ./assets/main.scss ./src/css/style.css
```
Starting webpack server

```
npm start
```

## Build with 🛠️

* [NPM](https://www.npmjs.com/)
* [Webpack](https://webpack.js.org/)
* [jQuery](https://jquery.com/)
* [SASS](https://sass-lang.com/)

## Autors ✒️

👨‍💻 **Ethan Alfaro** - *Trabajo en equipo* - [Ethan Alfaro Github](https://github.com/Ethan-Alfaro)
👨‍💻 **Hayk Petrosyan** - *Trabajo en equipo* - [Hayk Petrosyan Github](https://github.com/haykbit)

## Resources 📎

* [Webpack Doc](https://webpack.js.org/concepts/) - Webpack official documentation
* [Stackoverflow](https://es.stackoverflow.com/)

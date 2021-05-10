`#html` `#css` `#sass` `#javascript` `#webpack` `#es6` `#master-in-software-engineering`

# WebPack Basics <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> WebPack is a tool that allows you to manage the resources and dependencies of a website.
>
> It mainly solves Javascript dependencies, although it can also work with css, images, Javascript preprocessors, CSS preprocessors, template systems, and much more.

## Index <!-- omit in toc -->

- [Intro](#intro)
- [Requirements](#requirements)
- [Setting webpack.config.js](#setting-webpack)
  * [Installing and running webpack](#Installing-and-running-webpack) 
  * [Entry point and output](#Entry-point-and-output)
  * [HTML](#HTML)
  * [CSS/SASS](#css/sass)
  * [Loading images](#Loading-images)
  * [jQuery](#jquery)
  * [Babel](#Babel)
  * [index.js](#index.js)	
- [Technologies used](#technologies-used)
- [Resources](#resources)
- [Collaborators](#collaborators)

## Intro

The main purpose of this pill is to understand what **WebPack**, how it works and how to set-up the directories by working with its basics. In this pill we've also worked with **loaders** and **plugins** used to be able to compile code files such as `.html` and `.css`/`.scss` or image files like `.png`, `.jpg` or `.svg` amongst others.

This pill is also a first step into ES6 and the use of its syntaxis.

## Requirements

- Create a bundle using webpack.
- You must make use of the new features of ECMAScript 6
- You must import several files so that the final result is a single bundle for Javascript and a single bundle for sass
- Verify that the output bundle generated by WebPack for the Javascript layer has made the transformation from ECMAScript 6 to ECMAScript 5
- Create a clear and orderly directory structure

## Setting `webpack.config.js`

The `webpack.config.js` is the main file in which we've worked and applied different blocks of code to make the creation of the bundle fully functional. In this file all loaders, plugins and rules are declared to let *Webpack* know **what to do with all of the files and assets** we are providing to the project.

Also, you'll notice that **some of the loaders and plugins have been added as developer dependencies** inside `package.json`.

-

### Installing and running webpack 

Before starting setting our enviornment we need to **globally install** the *Webpack* dependency in our terminal in order to use it in our project and compile all files needed like so:

```
npm i -D webpack webpack-cli
```

In our `package.json` file we will now have to declare the **build** script to be able to run webpack and compile all files:

```
// package.json 

{
(…)
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
}
```

-
### Entry point and output

One of the first steps after creating this file was setting the JSON object `module-exports` in which we declared the very first instructions *Webpack* needs: **entry** & **output**.

While the first one (entry) is pointing at the JavaScript file that *Webpack* will have to look for in order to create the bundle, the second one (output) is declaring in which path everything will be compiled and in which name. 

This example summarizes the process:

```
// webpack.config.json

const path = require("path");

module.exports = {
	// Look at "index.js"
  	entry: "./src/index.js",
  	// Create a"dist" folder with a file called "bundle.js"
  	output: {
    	path: path.resolve(__dirname, "dist"),
    	filename: "bundle.js",
  	},
}
```
-
### HTML

We add a new plugin.

```
plugins: [
		new HtmlWebpackPlugin({
     	template: "./src/index.html",
    	}),
   	] 
```

We add a new rule to catch the `.html` files and generate a new one.

```
module: {
	rules: [
				{
        		test: /\.html$/i,
        		loader: "html-loader",
      			},
    	]
   	} 
```

-
### CSS/SASS

Another great strength of *Webpack* is its ability to compile stylesheets such as `.css` and `.scss`/`.sass` files right away with the correspondant rules declared inside de `modules` array and all dependencies instlled inside our `package.json` file.

First we need to install our dependencies inside the terminal:

```
npm i -D sass sass-loader css-loader style-loader
```

After, we will be able to use them and set rules inside our `webpack.config.js` file:

```
// webpack.config.json

module.exports = {
	(…)
	modules: {
		rules: [
     		{
     		// Looks for .scss and .sass files
     		test: /\.s[ac]ss$/i,
     		// USe the loaders
      		use: [
      		    "style-loader",
         		 "css-loader",
         		 "sass-loader",
        		],
      		},
   		],
   }, 
(…)
}
```

After declaring this, we will just need to **import our main stylesheet into our index.js** without declaring it inside our `index.html` file.

-
### Loading images

*Webpack* has a large variety of rules and plugins that allows us to work with images in order to transpile them into `base64` files or even compress them if they are behind a specified threshold of weight/size.

In this pill we had to add four kind of images, **two smaller than 8KB and two larger**:

* Small png 
* Small svg
* Large png
* Large jpg

First, what we need is to **declare them inside the index.html file** and, once this has been done we can go ahead and, on the one hand **compile small images to base 64** and, on the other, **compress large images**.


#### Compile images 

To **compile images into `base 64`**be have a default rule we have to declare inside our `webpack.config.js` file like so (notice that we are not declaring a weight limit because it is already set to 8KB):

```
// webpack.config.json

module.exports = {
	(…)
	modules: {
		rules: [
			{
        	test: /\.(png|svg|jpg|jpeg|gif)$/i,
        	type: "asset",
      		},
		],
   }, 
(…)
}
```

#### Compress images

To **compress large images** we need to type a bit more of code. First, like in previos steps **we need to install the dependencies we are going to use later on**. In our case we used the *Image minimizer webpack plugin* to compress images since it allows us to **target .png, .jpg, .gif and .svg files** and compress them with a given filter.

To install this plugin as a developing dependency we did like so:

```
npm i -D image-minimizer-webpack-plugin
```

We'll need also *sub-plugins* that are going to be called depending on the type of image we need to compress. These *sub-plugins* in particular are **lossy**, which means that compress images as much as possible, in contrast to the **lossless** ones.

```
npm i -D imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo
```

Then, once all our image dependencies have been properly installed, we will need to use them in our `webpack.config.js` file once again. In this case, we are declaring a new plugin so we need to place it inside the array of plugins:

```
// webpack.config.json

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = {
	(…)
	plugins: [
		new ImageMinimizerPlugin({
		      minimizerOptions: {
		        // The list of lossy dependencies we've just installed
		        plugins: [
		          "imagemin-mozjpeg",
		          "imagemin-gifsicle",
		          "imagemin-pngquant",
		          "imagemin-svgo",
		        ],
		      },
		      
		      filter: (source) => {
		      	 // Our specified size limit (8KB)
		        if (source.byteLength < 8192) {
		          return false;
		        }
		        return true;
		      },
		    }),
	  ],
}
```

After this, we will just need to import all of the assets we are going to use in our project inside the `index.js` file to be able to compile them.


### jQuery

We add a new plugin

```
new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
```

We add a new const to develop this. Whith this declaration we don´t need a script with `jquery` file in our `index.html` document

```
const webpack = require("webpack");
```

### Javascript

We create four `.js` documents.  `index.js`,  `main.js`,  `module-a.js` and  `module-b.js`. We use de `main.js` as a main document to work in it and `module-a.js` and `module-b.js` to develop the pill. In `index.js` we import the things that we need to work

 `module-a.js` We have to use arrow function, class construnctor, let and const elements

```
const myBtn = document.getElementById("clickBtn2");


myBtn.addEventListener("click", () =>{
    let byeH3 = document.getElementById("byeBye");
    byeH3.style.color = "yellow";
})

let a = 10;
let b = 213;
console.log(`La solución es: ${a + b}`);


class Players{
    constructor (name, number){
    this.name = name;
    this.number = number;
    }
}

const player = new Players("Figo", 10);

console.log(player.name)
```
 
 `module-b.js` We just have to use jquery in an easy example
 
```
$("#clickBtn").on("click", function(){
    $("h1").css("color", "white");
})
```
 
### Compressed images

We need to install another plugin

```
new ImageMinimizerPlugin({
        minimizerOptions: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            
            "imagemin-gifsicle", "imagemin-mozjpeg", "imagemin-pngquant", "imagemin-svgo"
          ],
        },
      }),
```

And declarate a const

```
 const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
```

### Babel

We have to do a new  `npm` install to add a babel compiler

```
 npm install -D babel-loader @babel/core @babel/preset-env webpack
```

Add some rules to run babel to compiler our  **ES6** to **ES5**

```
{
       test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
```        

-
### index.js

This is the key file of the process. Like said **Webpack will look at everything imported in this file** and will compile all files and assets needed into a bundle inside our previously defined output path. In our case, and with our directory distribution, our `index.js` file looks like this:

```
// index.js

// General
import "./style.scss";
import "./index.html";

// Images
import "./img/camiseta.png";
import "./img/hojas.jpg";
import "./img/logo.png";
import "./img/smallSvg.svg";

// JavaScript
import "./main.js";


```

-
### Local server

In order to see the result of our project we will need to run the following command in our terminal:

```
npx webpack server
```


## Technologies used

\* HTML

\* CSS

\* JS

\* SASS

\* webpack

\* ES6

\* NPM


## Resources

### General
- [WebPack Official](https://webpack.js.org/)
- [ECMAScript 6 compatibility](https://kangax.github.io/compat-table/es6/)

### Dependencies
- [HTML Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin)
- [HTML Loader](https://www.npmjs.com/package/html-loader)
- [Image Minimizer Webpack Plugin](https://www.npmjs.com/package/image-minimizer-webpack-plugin)
- [CSS Loader](https://webpack.js.org/loaders/css-loader/)
- [SASS Loader](https://www.npmjs.com/package/sass-loader)
- [Style Loader](https://webpack.js.org/loaders/style-loader/)
- [jQuery](https://www.npmjs.com/package/jquery)
- [Babel Loader](https://www.npmjs.com/package/babel-loader)


## Collaborators

👤 Hugo Duran

👤 Ricard Garcia

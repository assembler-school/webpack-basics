const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const imagemin = require("./imagemin.config");

module.exports = {
	mode: "development",
	devServer: {
		port: 3000,
		compress: true,
		hot: true,
		open: true,
	},
	entry: {
		main: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js",
		assetModuleFilename: "images/[name][ext][query]",
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
		new HtmlWebpackPlugin({
			title: "Webpack Basics",
			template: "./src/index.html",
			filename: "index.html",
		}),
		new CssMinimizerWebpackPlugin(),
		new ImageMinimizerWebpackPlugin({
			minimizerOptions: {
				plugins: [
					["gifsicle", imagemin.gifsicle],
					["mozjpeg", imagemin.mozjpeg],
					["pngquant", imagemin.pngquant],
					["svgo", imagemin.svgo],
				],
			},
			filter: (source, sourcePath) => {
				if (/\.svg$/.test(sourcePath) && source.byteLength > 1024 * 12) return true;
				if (/\.png$/.test(sourcePath) && source.byteLength > 1024 * 8) return true;
				if (/\.(jpe?g|gif)$/.test(sourcePath)) return true;

				return false;
			},
		}),
		new MiniCssExtractPlugin({
			filename: "styles/[name].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
			{
				test: /\.(scss|sass)$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpe?g|gif)$/i,
				type: "asset",
			},
			{
				test: /\.png$/i,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024, // 8kb
					},
				},
			},
			{
				test: /\.svg$/i,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 12 * 1024, // 12kb
					},
				},
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
		],
	},
};

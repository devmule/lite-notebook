const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const index_input_path = "./src/client/index.js";
const frame_input_path = "./src/notebook/index.js";
const output_path = "./public";
const client_path = "./client";

const common_options = {
	// mode: "production",
	mode: "development",
	module: {
		rules: [
			{test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
			{test: /\.css$/i, use: ['style-loader', 'css-loader']},
			{test: /\.html$/, loader: 'html-loader'},
		]
	},
	resolve: {extensions: ['.js', '.css', 'html']},
}

const html_options = {
	inject: true,
	minify: true,
	scriptLoading: 'blocking',
	meta: {
		'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
		'apple-mobile-web-app-capable': 'yes',
	},
}

const index = {
	...common_options,
	entry: path.resolve(__dirname, index_input_path),
	output: {path: path.resolve(__dirname, output_path, client_path), filename: 'index.js'},
	plugins: [new HtmlWebpackPlugin({
		...html_options,
		favicon: './src/favicon.ico',
		filename: '../index.html',
		title: 'lite-notebook'
	}),
	],
};


const frame = {
	...common_options,
	entry: path.resolve(__dirname, frame_input_path),
	output: {path: path.resolve(__dirname, output_path, client_path), filename: 'frame.js'},
	plugins: [new HtmlWebpackPlugin({
		...html_options,
		filename: 'frame.html',
		title: 'lite-frame'
	})],
}


module.exports = [index, frame]

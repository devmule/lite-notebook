const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, './src/index.js'),
		frame: path.resolve(__dirname, './src/notebook/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
			{test: /\.css$/i, use: ['style-loader', 'css-loader']},
			{test: /\.html$/, loader: 'html-loader'},
		]
	},
	resolve: {extensions: ['.js', '.css', 'html']},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: ['index'],
			favicon: './src/favicon.ico',
			template: './src/index.html',
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			chunks: ['frame'],
			template: './src/notebook/index.html',
			filename: 'frame.html',
		})
	],
};

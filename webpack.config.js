const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		"ltn-bundle": './src/frame/index.js',
		"main-bundle": './src/main/index.js',
	},
	module: {
		rules: [],
	},
	resolve: {
		extensions: ['.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/frame/py_worker/worker.js'),
					to: path.resolve(__dirname, 'dist/ltn-py-worker.js'),
				},
				{
					from: path.resolve(__dirname, 'src/frame/style.css'),
					to: path.resolve(__dirname, 'dist/ltn-style.css'),
				},
			],
		}),
	],
};

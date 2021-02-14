const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		bundle: './src/index.js',
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
					from: path.resolve(__dirname, 'src/worker.js'),
					to: path.resolve(__dirname, 'dist/worker.js'),
				},
			],
		}),
	],
};

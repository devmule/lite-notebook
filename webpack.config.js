const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {path: path.resolve(__dirname, 'dist'), filename: 'index.js'},
	module: {
		rules: [
			{test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
			{test: /\.css$/i, use: ['style-loader', 'css-loader']},
			{test: /\.html$/, loader: 'html-loader'}
		]
	},
	resolve: {extensions: ['.js', '.css', 'html']},
	plugins: [new HtmlWebpackPlugin({
		// favicon: './src/icon.png',
		filename: 'index.html',
		template: 'src/index.html'
	})],
};

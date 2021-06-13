const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		"index": './src/main.js',
		"frame": './src/frame.js',
	},
	module: {
		rules: [
			{test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
			{test: /\.css$/i, use: ['style-loader', 'css-loader'],}
		]
	},
	resolve: {extensions: ['.js', '.css']},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/web'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: ['index'],
			favicon: './src/favicon.ico',
			title: 'lite notebook',
			filename: 'index.html',
			template: 'src/index.html'
		}),
		new HtmlWebpackPlugin({
			chunks: ['frame'],
			filename: 'frame.html',
			template: 'src/frame.html'
		})
	],
};

const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const fs = require("fs");
const CopyPlugin = require("copy-webpack-plugin");

const src_path = "./src/plugins";
const raw_path = "./raw/plugins";
const output_path = "./public";
const plugins_path = "./plugins";

const common_options = {
	mode: "production",
	module: {
		rules: [
			{test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
			{test: /\.css$/i, use: ['style-loader', 'css-loader']},
			{test: /\.html$/, loader: 'html-loader'},
		]
	},
	resolve: {extensions: ['.js', '.css', 'html']},
}

const src_plugins_names = fs.readdirSync(path.resolve(__dirname, src_path));

module.exports = [
	...(src_plugins_names.map(plugin_name => {
		return {
			...common_options,
			entry: path.resolve(__dirname, src_path, plugin_name, 'index.js'),
			output: {path: path.resolve(__dirname, output_path, plugins_path, plugin_name), filename: `index.js`},
		}
	})),
	{
		// для копирования из raw
		mode: "production",
		plugins: [new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "./raw/**/*"),
					to: path.resolve(__dirname, output_path),
					force: true,
					noErrorOnMissing: true
				},
			],
		})],
	}
];

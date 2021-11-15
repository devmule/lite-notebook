const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const fs = require("fs");

const input_path = "./src/plugins";
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

const plugins_names = fs.readdirSync(path.resolve(__dirname, input_path));
module.exports = plugins_names.map(plugin_name => {
	return {
		...common_options,
		entry: path.resolve(__dirname, input_path, plugin_name, 'index.js'),
		output: {path: path.resolve(__dirname, output_path, plugins_path, plugin_name), filename: `index.js`},
	}
});

const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

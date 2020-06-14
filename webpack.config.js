const path = require('path');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
	entry: './src/index.ts',
	mode: NODE_ENV,
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	optimization: {
		minimize: false,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.js'],
	},
};

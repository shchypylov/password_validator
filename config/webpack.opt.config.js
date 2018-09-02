const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					mangle: {
						keep_fnames: true,
					},
				},
			})
		],
	},
	externals: {
		'react': 'commonjs react'
	},
	plugins: [
		new OptimizeCssAssetsPlugin(),
	],
}

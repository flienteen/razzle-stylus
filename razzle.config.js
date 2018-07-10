'use strict';

module.exports = {
	modify(config, { target, dev }, webpack) {
		const appConfig = Object.assign({}, config);
		const IS_NODE = target === 'node';
		
		appConfig.module.rules.push({
			test: /\.styl$/,
			use: IS_NODE
				? [
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('stylus-loader'),
						options: {
							preferPathResolver: 'webpack',
						},
					},
				]
				: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: require.resolve('stylus-loader'),
						options: {
							preferPathResolver: 'webpack',
						},
					},
				]
		});
		
		return appConfig;
	},
};

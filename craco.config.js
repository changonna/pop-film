module.exports = {
	babel: {
		presets: [
			"@babel/preset-env",
			"@babel/preset-react",
			"@babel/preset-typescript",
		],
		plugins: [
			[
				"@babel/plugin-transform-runtime",
				{
					corejs: 3,
					helpers: true,
					regenerator: true,
					useESModules: false,
				},
			],
		],
	},
};

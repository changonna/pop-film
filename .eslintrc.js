module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		// "plugin:@typescript-eslint/recommended", // Typescript
		// "plugin:react/recommended", // React
		"airbnb",
		"prettier",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	// parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {},
};

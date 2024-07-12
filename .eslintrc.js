module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"airbnb",
		"prettier",
		"plugin:@typescript-eslint/recommended", // TypeScript
		"plugin:react/recommended", // React
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
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"import/no-unresolved": [
			"error",
			{
				caseSensitive: false,
				ignore: ["\\.tsx?$"],
			},
		],
		"no-use-before-define": "off", // 변수나 함수가 정의되기 전에 사용될 수 있도록 허용 (가독성을 위해)
		"jsx-a11y/button-has-type": "off", // <button> 요소에 명시적인 type 속성이 없어도 허용
		"jsx-a11y/click-events-have-key-events": "off", // 클릭 이벤트 핸들러가 있는 요소에 키보드 이벤트 리스너가 없어도 허용
		"jsx-a11y/no-static-element-interactions": "off", // 비인터랙티브 요소에 마우스나 키보드 이벤트 리스너가 있어도 허용
		"jsx-a11y/no-noninteractive-element-interactions": "off",
		"no-alert": "off", // alert 사용을 허용합니다.
	},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
};

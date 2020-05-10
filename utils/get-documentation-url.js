'use strict';
const packageJson = require('../package.json');

module.exports = ruleName => {
	return `https://github.com/istanbuljs/eslint-plugin-istanbul/blob/v${packageJson.version}/docs/rules/${ruleName}.md`;
};

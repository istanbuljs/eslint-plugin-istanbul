'use strict';

module.exports = {
	rules: {
		'istanbul/no-ignore-file': require('./rules/no-ignore-file'),
		'istanbul/prefer-ignore-reason': require('./rules/prefer-ignore-reason')
	},
	configs: {
		recommended: {
			plugins: ['istanbul'],
			rules: {
				'istanbul/no-ignore-file': 'off',
				'istanbul/prefer-ignore-reason': 'error'
			}
		}
	}
};

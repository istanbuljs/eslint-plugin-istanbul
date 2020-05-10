'use strict';

module.exports = {
	rules: {
		'no-ignore-file': require('./rules/no-ignore-file'),
		'prefer-ignore-reason': require('./rules/prefer-ignore-reason')
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

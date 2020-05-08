const {RuleTester} = require('eslint');
const rule = require('../../rules/no-ignore-file');

const ruleTester = new RuleTester();

ruleTester.run('no-ignore-file', rule, {
	valid: [
		'/* istanbul ignore next */',
		'/* istanbul ignore if */',
		'// istanbul ignore next: with comment',
		'// istanbul ignore else: with comment',
		'// TODO: check istanbul is covering this properly',
		'/* we can\'t make istanbul ignore file if we\'re not using istanbul to begin with! */',
		'// ideally we should have istanbul ignore this, but we can\'t because reasons',
		'#!/usr/bin/env node'
	],

	invalid: [
		{
			code: '/* istanbul ignore file */',
			errors: [{messageId: 'ignoreFile', column: 1, line: 1}]
		},
		{
			code: '/* istanbul ignore file: lazy to write tests */',
			errors: [{messageId: 'ignoreFile', column: 1, line: 1}]
		},
		{
			code: '// istanbul ignore file',
			errors: [{messageId: 'ignoreFile', column: 1, line: 1}]
		},
		{
			code: '// istanbul ignore file: lazy to write tests',
			errors: [{messageId: 'ignoreFile', column: 1, line: 1}]
		}
	]
});

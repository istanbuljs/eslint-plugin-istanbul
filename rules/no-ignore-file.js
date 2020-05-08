const ignoreFileRE = /^\s*istanbul\s+ignore\s+file(?=\W|$)/u;

module.exports = {
	meta: {
		docs: {
			category: 'Best Practices',
			description:
				'This rule raises a warning about "istanbul ignore file" comments.',
			recommended: false
		},
		messages: {
			ignoreFile: 'Prefer config for ignoring files'
		},
		schema: [],
		type: 'suggestion'
	},
	defaultOptions: [],
	create(context) {
		const sourceCode = context.getSourceCode();

		function checkNode(node) {
			if (!ignoreFileRE.test(node.value)) {
				return;
			}

			context.report({messageId: 'ignoreFile', node});
		}

		return {
			Program() {
				const comments = sourceCode.getAllComments();

				comments.forEach(comment => checkNode(comment));
			}
		};
	}
};

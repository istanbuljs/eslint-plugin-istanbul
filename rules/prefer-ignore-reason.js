function hasIgnore(comment) {
	return /^\s*istanbul\s+ignore\s+(if|else|next|file)(?=\W|$)/u.test(comment);
}

function hasReason(comment) {
	return /^\s*istanbul\s+ignore\s+(if|else|next|file)\W+\w/u.test(comment);
}

module.exports = {
	meta: {
		docs: {
			category: 'Best Practices',
			description:
				'This rule raises a warning about "istanbul ignore" comments missing a reason.',
			recommended: true
		},
		messages: {
			noReason: 'Add a reason why code coverage should be ignored'
		},
		schema: [],
		type: 'suggestion'
	},
	defaultOptions: [],
	create(context) {
		const sourceCode = context.getSourceCode();

		function checkNode(node) {
			const trimmedComment = node.value.trim();

			if (!hasIgnore(trimmedComment) || hasReason(trimmedComment)) {
				return;
			}

			context.report({messageId: 'noReason', node});
		}

		return {
			Program() {
				const comments = sourceCode.getAllComments();

				comments.forEach(comment => checkNode(comment));
			}
		};
	}
};

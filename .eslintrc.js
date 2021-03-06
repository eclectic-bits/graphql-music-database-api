// https://eslint.org/docs/rules/#possible-errors
const possibleErrorRules = {
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': [ 'error' ]
};

// https://eslint.org/docs/rules/#best-practices
const bestPracticeRules = {
    // https://eslint.org/docs/rules/complexity
    'complexity': [ 'warn', { 'max': 5 } ],

    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': [ 'error', { 'treatUndefinedAsUnspecified': true } ],

    // https://eslint.org/docs/rules/curly
    'curly': [ 'error' ],

    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': [ 'error', 'always' ],

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [ 'error' ],

    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [ 'error', { 'allow': [ 'constructors' ] } ],

    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': [ 'error' ],

    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': [ 'error' ],

    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': [ 'error', 'always' ],

    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': [ 'error' ],

    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': [ 'error' ],

    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': [ 'error' ]
};

// https://eslint.org/docs/rules/#variables
const variableRules = {
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [ 'error', { 'args': 'none' } ],

    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [ 'error' ]
};

// https://eslint.org/docs/rules/#stylistic-issues
const stylisticRules = {
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': [ 'error', 'consistent' ],

    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [ 'error', 'always' ],

    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': [ 'error', 'consistent' ],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': [ 'error' ],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': [ 'error', '1tbs' ],

    // https://eslint.org/docs/rules/camelcase
    'camelcase': [ 'error', { 'properties': 'always' } ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [ 'error', 'never' ],

    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
        'error',
        {
            'before': false,
            'after': true
        }
    ],

    // https://eslint.org/docs/rules/comma-style
    'comma-style': [ 'error', 'last' ],

    // https://eslint.org/docs/rules/eol-last
    'eol-last': [ 'error', 'never' ],

    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': [ 'error', 'never' ],

    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': [ 'error', 'consistent' ],

    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': [ 'error', 'never' ],

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': [ 'error', 'beside' ],

    // https://eslint.org/docs/rules/indent
    'indent': [
        'error',
        4,
        {
            'MemberExpression': 1,
            'FunctionExpression': { 'parameters': 'first' },
            'CallExpression': { 'arguments': 'first' }
        }
    ],

    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
        'error',
        {
            'beforeColon': false,
            'afterColon': true
        }
    ],

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
        'error',
        {
            'before': true,
            'after': true
        }
    ],

    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [ 'error', 'unix' ],

    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [
        'error',
        {
            'beforeBlockComment': true,
            'beforeLineComment': true,
            'allowBlockStart': true,
            'allowClassStart': true,
            'allowObjectStart': true,
            'allowArrayStart': true
        }
    ],

    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
        'error',
        'always',
        {
            'exceptAfterSingleLine': true
        }
    ],

    // https://eslint.org/docs/rules/max-depth
    'max-depth': [ 'error', { 'max': 4 } ],

    // https://eslint.org/docs/rules/max-len
    'max-len': [ 'error', { 'code': 120, 'ignoreComments': true } ],

    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
        'error',
        {
            'max': 500,
            'skipBlankLines': true,
            'skipComments': true
        }
    ],

    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
        'error',
        {
            'max': 50,
            'skipBlankLines': true,
            'skipComments': true
        }
    ],

    // https://eslint.org/docs/rules/max-params
    'max-params': [ 'error', { 'max': 4 } ],

    // https://eslint.org/docs/rules/max-statements
    'max-statements': [ 'error', { 'max': 10 } ],

    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': [ 'error', { 'max': 1 } ],

    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': [ 'error' ],

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
        'error',
        {
            'max': 2,
            'maxEOF': 0,
            'maxBOF': 0
        }
    ],

    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': [ 'error' ],

    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': [ 'error' ],

    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [ 'error', { 'consistent': true } ],

    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [ 'error', 'always' ],

    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
        'error',
        {
            'allowAllPropertiesOnSameLine': true
        }
    ],

    // https://eslint.org/docs/rules/one-var
    'one-var': [ 'error', 'never' ],

    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [ 'error', 'after' ],

    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [
        'error',
        {
            'blocks': 'never',
            'classes': 'never'
        }
    ],

    // https://eslint.org/docs/rules/quote-props
    'quote-props': [ 'error', 'always' ],

    // https://eslint.org/docs/rules/quotes
    'quotes': [ 'error', 'single' ],

    // https://eslint.org/docs/rules/semi
    'semi': [ 'error' ],

    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [
        'error',
        {
            'before': false,
            'after': false
        }
    ],

    // https://eslint.org/docs/rules/semi-style
    'semi-style': [ 'error', 'last' ],

    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': [
        'error',
        {
            'functions': 'always',
            'keywords': 'always',
            'classes': 'always'
        }
    ]
};

// https://eslint.org/docs/rules/#ecmascript-6
const ecmaScriptRules = {
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [ 'error', 'as-needed' ],

    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],

    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': [ 'error', { 'includeExports': true } ],

    // https://eslint.org/docs/rules/no-var
    'no-var': [ 'error' ],

    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [ 'error' ],

    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [ 'error', { 'object': true, 'array': true } ],

    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': [ 'error' ],

    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': [ 'error' ],

    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': [ 'error', { 'ignoreDeclarationSort': true } ],

    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': [ 'error', 'always' ]
};

/**
 * Additional typescript specific eslint rules
 */
const typescriptEslintRules = {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
            'accessibility': 'explicit',
            'overrides': {
                'constructors': 'off'
            }
        }
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
    '@typescript-eslint/method-signature-style': [ 'error', 'method' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    '@typescript-eslint/no-confusing-void-expression': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
    '@typescript-eslint/no-implicit-any-catch': [ 'error', { 'allowExplicitAny': true } ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
    '@typescript-eslint/no-namespace': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    '@typescript-eslint/no-unnecessary-condition': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
    '@typescript-eslint/prefer-readonly': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
    '@typescript-eslint/promise-function-async': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
    '@typescript-eslint/sort-type-union-intersection-members': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': [
        'error',
        {
            'before': false,
            'after': true
        }
    ]
};

/**
 *  Many of the base eslint rules don't cover typescript syntax correctly
 *  the rules below are meant to override those and correctly support typescript
 *
 *  NOTE - you must disable the base rule as it can report incorrect errors
 */
const typescriptEslintExtensionRules = {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [ 'error', 'never' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
        'error', {
            'before': false,
            'after': true
        }
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    'indent': 'off',
    '@typescript-eslint/indent': [
        'error',
        4,
        {
            'MemberExpression': 1,
            'FunctionExpression': { 'parameters': 'first' },
            'CallExpression': { 'arguments': 'first' }
        }
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
        'error',
        {
            'before': true,
            'after': true
        }
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
        'error',
        'always',
        {
            'exceptAfterSingleLine': true
        }
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': [ 'error', { 'includeExports': true } ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [ 'error', { 'allow': [ 'constructors' ] } ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error', { 'args': 'none' } ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    'quotes': 'off',
    '@typescript-eslint/quotes': [ 'error', 'single' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    'no-return-await': 'off',
    '@typescript-eslint/return-await': [ 'error' ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    'semi': 'off',
    '@typescript-eslint/semi': [ 'error' ]
};

module.exports = {
    'root': true,

    /**
     *  Global libraries that don't require an import statement
     */
    'env': {
        // node (process.env, ect...)
        'node': true,

        // jest libraries (beforeAll, beforeEach, describe, ect...)
        'jest': true
    },

    /**
     * Parsers
     */
    'parser': '@typescript-eslint/parser',

    /**
     *  Parser Options
     */
    'parserOptions': {
        // Allows for the use of imports
        'sourceType': 'module',

        'project': './tsconfig.json'
    },

    /**
     * Plugins
     */
    'plugins': [ '@typescript-eslint' ],

    /**
     * Eslint configurations that we extend
     */
    'extends': [
        // use the default eslint configuration
        'eslint:recommended'
    ],

    /**
     * Rules
     */
    'rules': {
        ...possibleErrorRules,
        ...bestPracticeRules,
        ...variableRules,
        ...stylisticRules,
        ...ecmaScriptRules
    },

    /**
     * Rule Overrides
     */
    'overrides': [
        {
            // enable the rule specifically for TypeScript files
            'files': [ '*.ts' ],
            'rules': {
                ...typescriptEslintRules,
                ...typescriptEslintExtensionRules
            }
        }
    ]
};
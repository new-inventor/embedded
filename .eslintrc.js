const config = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        enums: 'always-multiline',
        generics: 'never',
        tuples: 'always-multiline',
      },
    ],
    '@typescript-eslint/indent': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/setupTests.ts',
        ],
      },
    ],
    'padded-blocks': [2, 'never'],
    'no-plusplus': 0,
    indent: 0,
    'object-property-newline': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'brace-style': [2, '1tbs'],
    'key-spacing': [
      2,
      {
        mode: 'strict',
        beforeColon: false,
        afterColon: true,
      },
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'implicit-arrow-linebreak': 0,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        json: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'max-len': [
      2,
      {
        code: 220,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    'no-console': 0,
    'no-debugger': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 1,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/prop-types': 0,
    'react/no-array-index-key': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react/style-prop-object': [1],
    'react/jsx-boolean-value': [1, 'never'],
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': [
      2,
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [
      2,
      2,
      {
        checkAttributes: false,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-key': [
      2,
      {
        checkFragmentShorthand: true,
      },
    ],
    'react/jsx-max-depth': [1, { max: 8 }],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-no-bind': [
      1,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-script-url': 2,
    'react/jsx-no-target-blank': [
      1,
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
      },
    ],
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': [2, { allowAllCaps: false }],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    'no-bitwise': [2, { allow: ['>>=', '&'] }],
    'sort-keys': 0,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'object-curly-newline': 0,
    'lines-between-class-members': 'off',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.json'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};

module.exports = config;

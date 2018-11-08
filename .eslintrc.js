module.exports = {
    parserOptions: {
        ecmaVersion: 2017
    },
    extends: '@alphatr/eslint-config-node',
    env: {
        browser: true
    },
    rules: {
        "no-undefined": 0,
        "no-bitwise": 0,
        "no-console": 0,
    }
};

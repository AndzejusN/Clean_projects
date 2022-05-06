module.exports = {
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'env': {
        'browser': true,
        'es6': true,
        'vue/setup-compiler-macros': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        // 'plugin:vue/vue3-strongly-recommended',
        // 'plugin:vue/vue3-recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'axios': 'readonly',
        'toastr': 'readonly',
        'Vue': 'readonly',
        'jQuery': 'readonly',
        'require': 'readonly',
        '_BASE_URL': 'readonly',
        '_TRANSLATIONS': 'readonly',
        '_MENU': 'readonly',
        'MAIN_URL': 'readonly'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'indent': [
            2,
            "tab"
        ],
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
    }
};

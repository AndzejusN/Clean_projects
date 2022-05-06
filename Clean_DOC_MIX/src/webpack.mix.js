const mix = require('laravel-mix');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableSuccessNotifications();

mix.setPublicPath('public');
mix.version();

const options = {
    extensions: [`js`, `vue`],
}

mix.webpackConfig({
    plugins: [new ESLintPlugin(options)],
	resolve: {
		alias: {
			stores: path.resolve(__dirname, 'resources/js/stores'),
		}
	}
});

if (mix.inProduction()) {
    mix.sourceMaps();
}

mix.js('resources/js/app.js', 'public/js/app.js').vue();
mix.sass('resources/sass/app.scss', 'public/css/app.css');

const mix = require('laravel-mix');

mix.version();

if (mix.inProduction()) {
    mix.sourceMaps();
}

mix.js('resources/js/app.js', 'public/js/app.js').vue();
mix.sass('resources/sass/app.scss', 'public/css/app.css');

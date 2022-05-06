<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <title>{{ config('app.name') }}</title>
</head>
<body>
<div id="app"></div>
</body>
<script src="{{ mix('js/app.js') }}"></script>
</html>

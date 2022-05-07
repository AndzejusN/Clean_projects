<?php

define('ROOT_PATH', dirname(__DIR__));
require_once ROOT_PATH . '/vendor/autoload.php';

use Sunrise\Http\Message\ResponseFactory;
use Sunrise\Http\Router\RequestHandler\CallableRequestHandler;
use Sunrise\Http\Router\RouteCollector;
use Sunrise\Http\Router\Router;
use Sunrise\Http\ServerRequest\ServerRequestFactory;
use function Sunrise\Http\Router\emit;

$collector = new RouteCollector();

$collector->get('home', '/', new CallableRequestHandler(function () {
	$apiData = file_get_contents(ROOT_PATH . "/views/index.phtml");
	return (new ResponseFactory)->createHtmlResponse(200, $apiData);
}));

$router = new Router();
$router->addRoute(...$collector->getCollection()->all());
$request = ServerRequestFactory::fromGlobals();
$response = $router->handle($request);

emit($response);
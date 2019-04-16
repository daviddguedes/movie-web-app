<?php

use App\Controllers\MoviesController;
use App\Controllers\GenresController;
use Slim\Http\Request;
use Slim\Http\Response;

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

// Routes
$app->get('/', function (Request $request, Response $response, array $args) {
    $this->logger->info("Slim-Skeleton '/' route");
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->group('/api', function () {
    $this->get('/movie/{term}[/{page}]', MoviesController::class . ':find');
    $this->get('/movie/[/{page}]', MoviesController::class . ':all');
    $this->get('/movies[/{page}]', MoviesController::class . ':all');
    $this->get('/genres', GenresController::class . ':all');
});

$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
    $handler = $this->notFoundHandler;
    return $handler($req, $res);
});

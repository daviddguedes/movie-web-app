<?php

use App\Controllers\MoviesController;
use Slim\Http\Request;
use Slim\Http\Response;

// Routes
$app->get('/', function (Request $request, Response $response, array $args) {
    $this->logger->info("Slim-Skeleton '/' route");
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->group('/api', function () {
    $this->get('/movie/{id}', MoviesController::class . ':find');
    $this->get('/movies[/{page}]', MoviesController::class . ':all');
});
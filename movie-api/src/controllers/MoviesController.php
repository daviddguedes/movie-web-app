<?php

namespace App\Controllers;

use App\services\MoviesService;
use Psr\Container\ContainerInterface;

class MoviesController extends BaseController
{
    public function all($request, $response, $args) {
        MoviesService::$PAGE = $args['page'];
        $movies = MoviesService::getMovies();
        return $response->withJson($movies);
    }

    public function find($request, $response, $args) {
        MoviesService::$PAGE = $args['page'];
        $movies = MoviesService::findMovie($args['term']);
        return $response->withJson($movies);
    }
}
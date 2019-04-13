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
        $movies = MoviesService::findMovie($args['id']);
        return $response->withJson(['result' => $movies]);
    }
}
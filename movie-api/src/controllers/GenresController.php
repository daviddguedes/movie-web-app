<?php

namespace App\Controllers;

use App\services\MoviesService;
use Psr\Container\ContainerInterface;

class GenresController extends BaseController
{
    public function all($request, $response, $args) {
        $genres = MoviesService::getGenres();
        return $response->withJson($genres);
    }

}
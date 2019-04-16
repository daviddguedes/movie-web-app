<?php

namespace App\services;


class MoviesService
{
    static $API_URL = "https://api.themoviedb.org/3/";
    static $API_KEY = "1f54bd990f1cdfb230adb312546d765d";
    static $PAGE;
    static $movies = [];
    static $genres = [];

    /**
     * @return array
     */
    public static function getMovies()
    {
//        https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&page=${page}
        $url = MoviesService::$API_URL . "movie/upcoming?api_key=" . MoviesService::$API_KEY .
            "&page=" . MoviesService::$PAGE;

        $data = MoviesService::getApiData($url);
        MoviesService::$movies = $data;
        return MoviesService::$movies;
    }

    /**
     * @param array $movies
     */
    public static function findMovie($term)
    {
        $find_url = MoviesService::$API_URL . "search/movie?api_key="
            . MoviesService::$API_KEY . "&query='" . rawurlencode($term) . "'&page=" . MoviesService::$PAGE;

        $data = MoviesService::getApiData($find_url);
        MoviesService::$movies = $data;
        return MoviesService::$movies;
    }

    /**
     * @return array
     */
    public static function getGenres()
    {
        $url = MoviesService::$API_URL . "genre/movie/list?api_key=" . MoviesService::$API_KEY;
        $data = MoviesService::getApiData($url);
        MoviesService::$genres = $data;
        return MoviesService::$genres;
    }

    public static function getApiData($url)
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);

        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $raw_data = curl_exec($ch);
        curl_close($ch);
        $data = json_decode($raw_data);
        return $data;
    }


}
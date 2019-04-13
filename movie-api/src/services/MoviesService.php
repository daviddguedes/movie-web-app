<?php

namespace App\services;


class MoviesService
{
    static $API_URL = "https://api.themoviedb.org/3/";
    static $API_KEY = "1f54bd990f1cdfb230adb312546d765d";
    static $PAGE;
    static $movies = [];

    /**
     * @return array
     */
    public static function getMovies()
    {
        $url = MoviesService::$API_URL . "movie/now_playing?api_key=" . MoviesService::$API_KEY .
            "&page=" . MoviesService::$PAGE;

        $data = MoviesService::getApiData($url);
        MoviesService::$movies = $data;
        return MoviesService::$movies;
    }

    /**
     * @param array $movies
     */
    public static function findMovie($id)
    {
        $find_url = MoviesService::$API_URL . "movie/" . $id . "?api_key=" . MoviesService::$API_KEY;
        $data = MoviesService::getApiData($find_url);
        MoviesService::$movies = $data;
        return MoviesService::$movies;
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
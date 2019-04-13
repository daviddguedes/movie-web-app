<?php

namespace App\models;


class Movie
{
    private $id;
    private $title;

    public function __construct()
    {
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

}
# Upcoming Movie Web App

## Introducing
This application was developed with React Js in frontend and PHP in the backend.
The frontend makes requests to the API that has routes to return lists of movies. For these requests i chose to use the Axios library. For react application state management I chose to use Redux, since the application should need scalability. It was not necessary to build routes because all the flow happens on the same screen. To view the details of a movie I chose to use a modal component since the information is simple.
In the backend a route file receives the requests and redirects to the corresponding methods in the controllers. Some parameters are optional. To list the videos in the response, the backend makes requests using CURL for the TMDb API and sends in JSON format for the consuming frontend.
The backend runs on a docker image, as described in the docker-compose.yml file at the root of the project.

## System requirements
* Docker 2.0.0.3
* Node v10.15.1
* NPM v6.9.0
* Composer PHP 1.2.0

## Third-part libraries
* PHP Slim framework - A lite framework for PHP aplications
* Composer - PHP packager manager
* Reactstrap - Bootstrap for React components
* Redux - Aplication state management
* Redux Thunk - Middleware for Redux
* Lite server - Run a simple server

## Instalation
* `git clone https://github.com/daviddguedes/movie-web-app.git`
* `cd movie-web-app`
* `docker-compose up -d`
* `cd movie-api && composer install`
* `cd ../movie-web-app && npm install`
* `npm run build`
* `npm run server`

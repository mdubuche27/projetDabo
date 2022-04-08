'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addPosterMovie = function addPosterMovie (req, res, next) {
  var body = req.swagger.params['body'].value;
  var movieId = req.swagger.params['movieId'].value;
  Default.addPosterMovie(body,movieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addPosterSerie = function addPosterSerie (req, res, next) {
  var body = req.swagger.params['body'].value;
  var serieId = req.swagger.params['serieId'].value;
  Default.addPosterSerie(body,serieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMovies = function getMovies (req, res, next) {
  Default.getMovies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMoviesPoster = function getMoviesPoster (req, res, next) {
  var movieId = req.swagger.params['movieId'].value;
  Default.getMoviesPoster(movieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSeries = function getSeries (req, res, next) {
  Default.getSeries()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSeriesPosters = function getSeriesPosters (req, res, next) {
  var serieId = req.swagger.params['serieId'].value;
  Default.getSeriesPosters(serieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removePosterMovie = function removePosterMovie (req, res, next) {
  var body = req.swagger.params['body'].value;
  var movieId = req.swagger.params['movieId'].value;
  Default.removePosterMovie(body,movieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removePosterSerie = function removePosterSerie (req, res, next) {
  var body = req.swagger.params['body'].value;
  var serieId = req.swagger.params['serieId'].value;
  Default.removePosterSerie(body,serieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

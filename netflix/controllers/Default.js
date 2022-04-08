'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addMovie = function addMovie (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.addMovie(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addSerie = function addSerie (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.addSerie(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMovie = function getMovie (req, res, next) {
  var movieId = req.swagger.params['movieId'].value;
  Default.getMovie(movieId)
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

module.exports.getMoviesByCat = function getMoviesByCat (req, res, next) {
  var categorie = req.swagger.params['categorie'].value;
  Default.getMoviesByCat(categorie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSerie = function getSerie (req, res, next) {
  var serieId = req.swagger.params['serieId'].value;
  Default.getSerie(serieId)
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

module.exports.getSeriesByCat = function getSeriesByCat (req, res, next) {
  var categorie = req.swagger.params['categorie'].value;
  Default.getSeriesByCat(categorie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeMovie = function removeMovie (req, res, next) {
  var movieId = req.swagger.params['movieId'].value;
  Default.removeMovie(movieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeSerie = function removeSerie (req, res, next) {
  var serieId = req.swagger.params['serieId'].value;
  Default.removeSerie(serieId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMovie = function updateMovie (req, res, next) {
  var movieId = req.swagger.params['movieId'].value;
  var movie = req.swagger.params['movie'].value;
  Default.updateMovie(movieId,movie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSerie = function updateSerie (req, res, next) {
  var serieId = req.swagger.params['serieId'].value;
  var serie = req.swagger.params['serie'].value;
  Default.updateSerie(serieId,serie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

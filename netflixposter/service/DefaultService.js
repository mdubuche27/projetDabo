'use strict';
const axios = require('axios')

/**
 * add a poster to a movie
 *
 * body Poster 
 * movieId Integer 
 * no response value expected for this operation
 **/
exports.addPosterMovie = function(body,movieId) {
  return new Promise(function (resolve, reject) {
    const newPoster = {
      "name": body.name,
      "url" : body.url,
      "time" : body.time
    }
    axios.get('http://localhost:8081/mdubuche27/Netflix/1.0.0/movie/' + movieId).then(res => {
      if (res.status == 200){
        var newMovie = res.data
        newMovie.posters.push(newPoster)
        console.log("patch")
        axios.patch('http://localhost:8081/mdubuche27/Netflix/1.0.0/movie/' + movieId, newMovie).then(sres => {
          console.log(sres)
          if (sres.status == 200){
            resolve()
          }
          else { reject() }
        })
      }
      else {
        reject();
      }
    }
    )
  });
}


/**
 * add a poster to a serie
 *
 * body Poster 
 * serieId Integer 
 * no response value expected for this operation
 **/
exports.addPosterSerie = function(body,serieId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns movies
 *
 * returns List
 **/
exports.getMovies = function() {
  return new Promise(function (resolve, reject) {
    var examples = {};
    axios.get('http://localhost:8081/mdubuche27/Netflix/1.0.0/movies').then(res => {
      if (res.status == 200){
        examples['application/json'] = res.data;
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
      else {
        reject();
      }
    }
    )
  });
}


/**
 * Returns poster from a movie
 *
 * movieId Integer 
 * returns List
 **/
exports.getMoviesPoster = function(movieId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    axios.get('http://localhost:8081/mdubuche27/Netflix/1.0.0/movie/' + movieId).then(res => {
      if (res.status == 200){
        examples['application/json'] = res.data.posters;
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
      else {
        reject();
      }
    }
    )
  });
}


/**
 * Returns series
 *
 * returns List
 **/
exports.getSeries = function() {
  return new Promise(function (resolve, reject) {
    var examples = {};
    axios.get('http://localhost:8081/mdubuche27/Netflix/1.0.0/series').then(res => {
      if (res.status == 200){
        examples['application/json'] = res.data;
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
      else {
        reject();
      }
    }
    )
  });
}


/**
 * Returns poster from a serie
 *
 * serieId Integer 
 * returns List
 **/
exports.getSeriesPosters = function(serieId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    axios.get('http://localhost:8081/mdubuche27/Netflix/1.0.0/serie/' + serieId).then(res => {
      if (res.status == 200){
        examples['application/json'] = res.data.posters;
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
      else {
        reject();
      }
    }
    )
  });
}


/**
 * remove a poster to a movie
 *
 * body Poster 
 * movieId Integer 
 * no response value expected for this operation
 **/
exports.removePosterMovie = function(body,movieId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * remove a poster to a serie
 *
 * body Poster 
 * serieId Integer 
 * no response value expected for this operation
 **/
exports.removePosterSerie = function(body,serieId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


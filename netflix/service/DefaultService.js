const Movie = require("../models/movie")
const Serie = require("../models/serie")

/**
 * Add movie
 *
 * body Movie 
 * no response value expected for this operation
 **/
exports.addMovie = function(body) {
  var examples = {};
  const newMovie = Movie({
    titre: body.titre,
    url: body.url,
    country: body.country,
    duree: body.duree,
    categories: body.categories,
    posters: body.posters
  })
  return new Promise(function(resolve, reject) {
    newMovie.save(function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * Add serie
 *
 * body Serie 
 * no response value expected for this operation
 **/
exports.addSerie = function(body) {
  var examples = {};
  const newSerie = Serie({
    titre: body.titre,
    country: body.country,
    episodes: body.episodes,
    categories: body.categories,
    posters: body.posters
  })
  return new Promise(function(resolve, reject) {
    newSerie.save(function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * get movie
 *
 * movieId Integer 
 * no response value expected for this operation
 **/
exports.getMovie = function(movieId) {
  var examples = {};
  return new Promise(function(resolve, reject) {
    Movie.findById(movieId, function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * Returns movies
 *
 * returns List
 **/
exports.getMovies = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    Movie.find(function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * Returns movies
 *
 * categorie String 
 * returns List
 **/
exports.getMoviesByCat = function(categorie) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    Movie.find({"categories": categorie}, function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * get serie
 *
 * serieId Integer 
 * no response value expected for this operation
 **/
exports.getSerie = function(serieId) {
  var examples = {};
  return new Promise(function(resolve, reject) {
    Serie.findById(serieId, function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * Returns series
 *
 * returns List
 **/
exports.getSeries = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    Serie.find(function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * Returns series
 *
 * categorie String 
 * returns List
 **/
exports.getSeriesByCat = function(categorie) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    Serie.find({"categories": categorie}, function (err, docs) {
      examples['application/json'] = docs;
      if (err){
        console.log(err)
        reject();
      }
      else{
        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
      }
    })
  });
}


/**
 * Add movie
 *
 * movieId Integer 
 * no response value expected for this operation
 **/
exports.removeMovie = function(movieId) {
  return new Promise(function(resolve, reject) {
    Movie.findByIdAndDelete(movieId, function(err, docs) {
      if (err){
        console.log(err)
        reject();
      }
      else{
        resolve();
      }
    })
  });
}


/**
 * remove serie
 *
 * serieId Integer 
 * no response value expected for this operation
 **/
exports.removeSerie = function(serieId) {
  return new Promise(function(resolve, reject) {
    Serie.findByIdAndDelete(serieId, function(err, docs) {
      if (err){
        console.log(err)
        reject();
      }
      else{
        resolve();
      }
    })
  });
}


/**
 * update a movie by Id
 *
 * movieId Integer 
 * movie Movie 
 * no response value expected for this operation
 **/
exports.updateMovie = function(movieId,movie) {
  return new Promise(function(resolve, reject) {
    Movie.findByIdAndUpdate(movieId, user, function (err, docs) {
      if (err){
        console.log(err)
        reject();
      }
      else{
        resolve();
      }
    })
  });
}



/**
 * update a serie by Id
 *
 * serieId Integer 
 * serie Serie 
 * no response value expected for this operation
 **/
exports.updateSerie = function(serieId,serie) {
  return new Promise(function(resolve, reject) {
    Serie.findByIdAndUpdate(serieId, serie, function (err, docs) {
      if (err){
        console.log(err)
        reject();
      }
      else{
        resolve();
      }
    })
  });
}
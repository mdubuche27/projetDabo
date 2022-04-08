'use strict';
const User = require("../models/user")

/**
 * Add User
 *
 * body User 
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const newUser = User({
      name: body.name,
      password: body.password,
      country: body.country,
      admin: body.admin,
      actif: body.actif
    })
    newUser.save(function (err, docs) {
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
 * delete a user by Id
 *
 * userId Integer 
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    User.findByIdAndDelete(userId, function(err, docs) {
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
 * get a user by Id
 *
 * userId Integer 
 * no response value expected for this operation
 **/
exports.getUser = function(userId) {
  var examples = {};
  return new Promise(function(resolve, reject) {
    User.findById(userId, function (err, docs) {
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
 * Returns users
 *
 * returns List
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    User.find(function (err, docs) {
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
 * delete a user by Id
 *
 * userId Integer 
 * user User 
 * no response value expected for this operation
 **/
exports.updateUser = function(userId,user) {
  return new Promise(function(resolve, reject) {
    User.findByIdAndUpdate(userId, user, function (err, docs) {
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


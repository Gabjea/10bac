const User = require("../../models/user");
const mongoose = require("../../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require('../../auth/passport');
const functions =  require('../functions')

const getAllUsers = (req,res)=>{
    User.find({}, (err,users) =>{
      if (err) res.send(err)
      else res.send(users)
    })
  }

module.exports = {
    getAllUsers
}
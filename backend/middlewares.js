const passport = require("./auth/passport");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const functions = require("./api/functions/");


function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
  }

function errorHandler(err, req, res, next) {
    
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    });
  }

  


  const Auth = async (req, res, next) => {
    const token = req.cookies.authtoken.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.send(err);
      else {
        passport.authenticate("jwt", { session: false });
        next();
      }
    });
  };
  

  module.exports = {
    notFound,
    errorHandler,
    Auth
  };
  
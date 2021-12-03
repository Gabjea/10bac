const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser")

require("dotenv").config();

const app = express();
const middlewares = require("./middlewares");
const api = require('./api')

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({
  origin: function(origin, callback){
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ['set-cookie']
}));

app.get("/", (req, res) => {
    res.json({
      message: "👋🌎 Team",
    });
  });

app.use("/api/v1", api);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', yourExactHostname);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
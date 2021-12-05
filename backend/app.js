const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser');
require("dotenv").config();


const app = express();
const middlewares = require("./middlewares");
const controller = require("./api/controllers/user");
const api = require('./api')
const fileUpload = require("express-fileupload")

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

app.use(fileUpload({
  createParentPath: true
}));

app.get("/", (req, res) => {
    res.json({
      message: "👋🌎 Team",
    });
  });

app.get("/uploads/icons/:img", controller.getUploadedIcon)
app.get("/uploads/sub_bac/:img", controller.getUploadedSubBac)
app.use("/api/v1", api);
app.use(express.static('public'));







app.use(bodyParser.urlencoded({ extended: true }));
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
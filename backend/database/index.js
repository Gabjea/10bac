const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CON_STRING, () => {
  console.log("Connected to database.");
}).catch((err) =>{
  console.log(err)
})


module.exports = mongoose
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/node-demo", ()=>{
  console.log(" connected to the database")
});

const members =new mongoose.Schema({
  "firstname":String,
  "lastname":String,
  "email":String,
  "gender":String,
  "city":String,
  "country":String,


})

module.exports = mongoose.model("catalist",members)

//mongoose sits on top of mongo (DRM)-document Relations Model

//on command prompt / terminal
//>show databases ---shows all databases in the mongodb
//>show dbs
//>use refactory --creates a new database called refactory if it does not exist else switches to that databases
//db.createCollection<<collection name>> -- creates a collection in specified database
//db.<<collection name>>.insert({<<key>>:"<<value>",<<key>>:"<<value>>"}) -- inserting objects into mongo database
//db.<<collection> name>..find() --returns the objects in a collection
//db.<<collection name>>.find().pretty() --returns the object in a tabula format
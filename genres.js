const mongoose = require('mongoose');

//Mongo DB connection
mongoose.connect('mongodb://localhost/BookStore');

var db = mongoose.connection;

//Test  DB connection
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Connection successfull!');
});

var genreSchema = mongoose.Schema({
    "_id": Number,
    name: String
  },{versionKey:false});

var Genres = mongoose.model('Genres', genreSchema,'genres');

// try{
// var Genere = function(callback){
//      Genres.find(function (err, Genres) {
//     if (err) return console.error(err);
//     //console.log(Genres);
//     db.close();
//   });
//     }
//     catch(err){
//         throw err;
//     }}

//Get documents
var getGenre = function(callback){
    Genres.find(callback);
}
// //save documents
// var addGenre = (name,callback)=>{
//     Genres.create(name,callback);
// }

var addGenre = (genre,callback)=>{
    console.log(genre);
    var newGenre = new Genres(genre);
    newGenre.save(callback);
}


// newGenre.save((err, Genres)=>{
//     if(err) return console.log(err);
//     console.log(Genres);
//     db.close();
// });

module.exports={
    getGenre,
    addGenre
}
 
    


  


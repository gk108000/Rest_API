const mongoose = require('mongoose');

//Mongo DB connection
mongoose.connect('mongodb://localhost/BookStore');

var db = mongoose.connection;

//Test  DB connection
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Connection successfull!');
});

var bookSchema = mongoose.Schema({
    _id: Number,
    title: String,
    Author:String,
    Genre: String,
    Price: Number
  });

var Books = mongoose.model('Books', bookSchema,'Books');

var getBooks = function(callback){
    Books.find(callback);
}
var getBookById = (id,callback) =>{
    Books.findById(id,callback);
}
// Books.findById(1,(err,book)=>{
//     console.log(book);
// });

module.exports={
    getBooks,
    getBookById
}
  


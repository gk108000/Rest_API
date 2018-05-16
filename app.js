const express = require('express');
const Books = require('./books');
const Genres = require('./genres');
const bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('got to /genres to get genres list or got to /books to get books list');
});

//Getting full list of available genres
app.get('/genres',(req,res)=>{
    try{
    Genres.getGenre(function(err,genres){
        res.json(genres);
    });}
    catch(err){
        throw err;
    }
});

//Getting full list of available books
app.get('/books',(req,res)=>{
    try{
    Books.getBooks(function(err,books){
        res.json(books);
    });
}catch(err){
    throw err;
}
});

//searching book by id
app.get('/books/:id',(req,res)=>{
    // console.log(req.params.id);
    Books.getBookById(req.params.id,function(err,book){
        res.json(book);
    });
});

//Post request
app.post('/genres',(req,res)=>{
    //console.log(req);
    var genreName = req.body;
    console.log(genreName);
    Genres.addGenre(genreName,(err,genres)=>{
            res.json(genres);
    })
});
//server setting
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Server is running on port 3000');
});
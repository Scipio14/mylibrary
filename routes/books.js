const express = require("express");
const router = express.Router();
const path = require("path");
const Book = require("../models/Book");
const Author = require("../models/Author");

//All books route

router.get('/', async (req,res)=>{
  res.send('All Books')
});

//New Book route
router.get('/new', async (req,res)=>{
  renderNewPage(res,new Book())

});

//Create book route
router.post('/', async (req,res)=>{
  
    const book = new Book({
    title:req.body.title,
    author:req.body.author,
    publishDate:new Date(req.body.publishDate),
    pageCount:req.body.pageCount,
    description:req.body.description
  
    
  })

  try {
    const newBook = await book.save();
    //res.redirect(`books/${newBook.id}`)
    res.redirect('books');
    
};




async function renderNewPage(res,book,hasError=false){
    try {
    // ! Tenemos que buscar a todos nuestros autores que tenemos en el modelo Author
    const authors = await Author.find({})
    const params = {
      authors: authors,
      book:book
    }
    // ! Una vez encontramos a los autores tenemos que guardar el nuevo libro creado
    const book = new Book()
    res.render('books/new', params)

}





module.exports = router;


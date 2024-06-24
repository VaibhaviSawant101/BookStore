const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

//Route for Get All books from database
router.get('/', async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).json(books);
    } catch (error) {
      console.error('Error fetching books:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  
  // Route to create a new book
router.post('/', async (req, res) => {
    try {
      const { title, author, publishYear } = req.body;
      const newBook = new Book({ title, author, publishYear });
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      console.error('Error saving book:', error.message);
      res.status(500).json({ error: error.message });
    }
});
  
  //Route to get Book By Id from database
router.get('/:id', async (req, res)=>{
      try{
          const {id} = req.params;
          const book = await Book.findById(id);
          res.status(200).json({book});
      }
      catch(error)
      {
          console.log(error);
          res.status(500).send({message:error.message});
      }
});
  
  
  //Route to Update a Book
router.put('/:id', async (req, res)=>{
      try{
          if(!req.body.title ||
          !req.body.author ||
          !req.body.publishYear){
              return res.status(400).send({message:'Send all required fields: title, author, publishYear'});
          }
  
          const {id} = req.params;
          const result = await Book.findByIdAndUpdate(id, req.body);
          if(!result){
              return res.status(404).json({message:'Book not found'});
          }
  
          res.status(200).send({message:"Book updated Successfully"});
      }catch(error){
          console.log(error);
          res.status(500).send({message:error.message});
      }
});
  
//Route to delete a book by id
router.delete('/:id', async (req, res) => {
      try {
          const { id } = req.params;
  
          // Delete the book using findByIdAndDelete
          const deletedBook = await Book.findByIdAndDelete(id);
  
          // Check if book with that id exists and was deleted
          if (!deletedBook) {
              return res.status(404).json({ message: 'Book not found' });
          }
  
          res.status(200).send({ message: 'Book deleted successfully' });
      } catch (error) {
          console.log(error);
          res.status(500).send({ message: error.message });
      }
});

module.exports = router;
  
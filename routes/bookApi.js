const express = require('express');
const Book = require('../models/BookModel');


const router = express.Router();

//get all book;
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.json({ message: err });
    }
});

//get by id;
router.get('/:bookId', async(req, res) => {
    try{
        const book = await Book.findById(req.params.bookId);
        res.json(book);
    } catch (err) {
        res.json({message : err});
    }
});


router.get('/book', (req, res) => {
    res.send("BOOK.....");
});

//add;
router.post('/', (req, res) => {
   console.log(req.body);
   const book = new Book({ 
       name: req.body.name,
       author: req.body.author,
       price: req.body.price,
       image: req.body.image
   });
   book.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message : err});
    });
});

//delete;
router.delete('/:bookId', async (req,res) => {
    try{
        const removedBook = await Book.remove({ _id: req.params.bookId });
        res.json(removedBook);
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router;
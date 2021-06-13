const express = require('express');
const Item = require('../models/ItemModel');


const router = express.Router();


//get all books in Cart ; http://localhost:8080/items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

//addToCart;
router.post('/', (req, res) => {
    console.log(req.body);
    const item = new Item({ 
        count: req.body.count,
        name: req.body.book.name,
        author: req.body.book.author,
        price: req.body.book.price,
        image: req.body.book.image   
    });
    item.save()
        .then(data => {
            res.json(data);
    })
    .catch(err => {
        res.json({message : err});
    });
});


// DELETE in Cart;
router.delete('/:bookId', async (req,res) => {
    try{
        const removedBook = await Item.remove({ _id: req.params.bookId });
        res.json(removedBook);
    } catch (err) {
        res.json({message: err})
    }
});

module.exports = router;
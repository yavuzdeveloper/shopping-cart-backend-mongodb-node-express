const express = require('express');
const Cart = require('../models/CartModel');


const router = express.Router();


//get all books in Cart ; http://localhost:8080/cart
router.get('/', async (req, res) => {
   try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    } catch (err) {
        res.json({ message: err });
    }
});

//by id;
router.get('/:cartId', async(req, res) => {  
    try{
        const cart = await Cart.findById(req.params.cartId);
        res.json(cart);
    } catch (err) {
        res.json({ message : err });
    }
});


//addToCart;
router.post('/', (req, res) => {
   console.log(req.body);
   const cart = new Cart({ 
       name: req.body.name,
       author: req.body.author,
       price: req.body.price,
       image: req.body.image,
       count: req.body.count
   });
   cart.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message : err });
    });
});

// DELETE in Cart;
router.delete('/:bookId', async (req, res) => {
    try{
        const removedBook = await Cart.remove({ _id: req.params.bookId });
        res.json(removedBook);
    } catch (err) {
        res.json({ message: err })
    }
});

//Update;
router.patch('/:cartId', async(req, res) => {
    try{
        const updatedCart = await Cart.updateOne(
            { _id : req.params.cartId },
            { $set : { count : req.body.count }
        });
        res.json(updatedCart);
    } catch (err) {
        res.json({ message : err });
    }
});



module.exports = router;
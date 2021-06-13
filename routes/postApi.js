const express = require('express');
const Post = require('../models/PostModel');


const router = express.Router();


router.get('/post', (req, res) => {
    res.send("burası post un yeri:");
});
router.get('/books', (req, res) => {
    res.send("BOOKS.....");
});
router.get('/books/book', (req, res) => {
    res.send("BOOK.....");
});


//get All post;
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//Add post;
router.post('/', (req, res) => {
   console.log(req.body);
   const post = new Post({
       title: req.body.title,
       description: req.body.description
   });
   post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message : err });
    });
});


//by id
router.get('/:postId', async(req, res) => {  
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message : err });
    }
});

//delete
router.delete('/:postId', async(req, res) => { // 
    try{
        const removedPost = await Post.remove({_id : req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({ message : err });
    }
});

// upadate;
router.patch('/:postId', async(req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id : req.params.postId },
            { $set : { title : req.body.title }
        });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message : err });
    }
});




module.exports = router ;
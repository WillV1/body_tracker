const express = require('express');
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const auth = require('../middleware/auth');
const db = require('../models');


router.post('/', auth, upload.single('image'), async (req, res) => {

  try {

    // const user = await db.User.findById(req.user.id).select('-password');
    const result = await cloudinary.uploader.upload(req.file.path);
  
    const newPost = new Post ({ 
      date: req.body.date,
      weight: req.body.weight,
      user: req.user.id,
      image: result.url
    })
    
    const post = await newPost.save();

    res.json(post);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const post = await db.Post.findById(req.params.id);

    if(!post) {
      return res.status(404).json({msg: 'Post not found'})
    }
    res.json(post)
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({msg: 'Post not found'})
    }
    res.status(500).send('Server Error')
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await db.Post.findById(req.params.id);

    if(!post) {
      return res.status(404).json({msg: 'Post not found'})
    }

    if(post.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'User not authorized'})
    }

    await post.remove();

    res.json({ msg: 'Post removed'})
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({msg: 'Post not found'})
    }
    res.status(500).send('Server Error')
  }
});


module.exports = router;
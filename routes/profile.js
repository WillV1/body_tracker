const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const db = require('../models');
const { check, validatorResult, validationResult } = require('express-validator');
const Profile = require('../models/Profile');


router.get('/me', auth, async (req, res) => {
  try {
    const profile = await db.Profile.findOne({ user: req.user.id }).populate('User', 
    ['name']);

    if(!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user'});
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

router.post('/', [
  auth,
  [
    check('gender', 'Gender is required').not().isEmpty(),
    check('goalWeight', 'Goal weight is required').not().isEmpty(),
    check('startingWeight', 'Starting weight is required').not().isEmpty(),
    check('height', 'Height is required').not().isEmpty(),
  ]
], async (req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }

  const { gender, goalWeight, startingWeight, height, bio } = req.body;

  const profileFields = {};
  profileFields.user = req.user.id
  if(gender) profileFields.gender = gender;
  if(goalWeight) profileFields.goalWeight = goalWeight;
  if(startingWeight) profileFields.startingWeight = startingWeight;
  if(height) profileFields.height = height;
  if(bio) profileFields.bio = bio;

  try {
    let profile = await db.Profile.findOne({ user: req.user.id});

    if(profile) {
      profile = await db.Profile.findOneAndUpdate(
        {user: req.user.id}, 
        {$set: profileFields}, 
        {new: true}
        );

        return res.json(profile);
    }

    profile = new Profile(profileFields);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

router.delete('/', auth, async (req, res) => {
  try {
    await db.Post.deleteMany({user: req.user.id});
    await db.Profile.findOneAndRemove({user: req.user.id});
    await db.User.findOneAndRemove({_id: req.user.id});

    res.json({ msg: 'User deleted'})
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

module.exports = router;
const express = require('express');
const shortid = require('shortid');
const moment = require('moment');
const commentData = require('../data.js');

const router = express.Router();

// get all comments
router.get('/', (req, res) => {
  res.json(commentData);
});

// get one comments
router.get('/:id', (req, res) => {
  const myComment = commentData.find(comment => comment.id === parseInt(req.params.id));
  if (myComment) {
    res.json(myComment);
  } res.status(404).json({ msg: 'Invalid ID' });
});

// create a comment
router.post('/', (req, res) => {
  // create new comment with text
  if (!req.body.text) { 
    res.status(400).json({ msg: 'Invalid Input Please Provide Text Comment' });
  } else { 
    const newComment = {
      text: req.body.text,
      timestamp: moment().format(),
      id: shortid.generate(),
    };
    commentData.push(newComment);
    res.status(201).json({ msg: 'Comment successfully added', comments: commentData });
  }
});

router.put('/:id', (req, res) => {
  const myComment = commentData.find(comment => comment.id === parseInt(req.params.id));
  if (!myComment) res.status(404).json({ msg: 'Invalid ID' });
  if (!req.body.text) res.status(400).json({ msg: 'Please Provide Comment Text' });
  myComment.text = req.body.text;
  res.status(202).json({ msg: 'Comment successfully updated', comments: commentData });
});
// myComment = 
// myComment ...
// text: req.body.text,

router.delete('/:id', (req, res) => {
  const idx = commentData.findIndex(comment => comment.id === parseInt(req.params.id));
  if (idx < 0) {
    res.status(404).json({ msg: 'Invalid Comment ID' });
  } else {
    commentData.splice(idx, 1);
    res.status(200).json({ msg: 'Removed Comment', comments: commentData });
  }
});

module.exports = router;
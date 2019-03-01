const express = require('express');
const shortid = require('shortid');
const moment = require('moment');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const commentData = require('../data');

// create the db file if it doesn't exist
// and seed it with data
const adapter = new FileSync('db.json', {
  defaultValue: { comments: commentData },
});

const db = lowdb(adapter);

const router = express.Router();

// get all comments
router.get('/', (req, res) => {
  const comments = db.get('comments').value();
  res.json(comments);
});

// get a single comment by id
router.get('/:id', (req, res) => {
  const myComment = db
    .get('comments')
    .find({ id: req.params.id })
    .value();
  if (myComment) {
    res.json(myComment);
  } else {
    res.status(404).json({ msg: 'Invalid ID' });
  }
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
    db.get('comments').push(newComment).write();
    res.status(201).json({ msg: 'Comment successfully added', comments: db.get('comments').value() });
  }
});

router.put('/:id', (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({ msg: 'Invalid Syntax: Please provide Comment Text' });
  }
  if (!db.get('comments').find({ id: req.params.id }).value()) {
    return res.status(404).json({ msg: 'Invalid ID' });
  }
  db.get('comments').find({ id: req.params.id }).assign({ text: req.body.text }).write();
  return res.json(db.get('comments').value());
});

router.delete('/:id', (req, res) => {
  console.log(db.get('comments').find({ id: req.params.id }).value());
  console.log(req.params.id);
  if (!db.get('comments').find({ id: req.params.id }).value()) {
    return res.status(404).json({ msg: 'Invalid ID' });
  }
  db.get('comments').remove({ id: req.params.id }).write();
  res.status(200).json({ msg: 'comment deleted', comments: db.get('comments').value() });
});

module.exports = router;

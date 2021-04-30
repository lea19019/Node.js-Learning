const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const booksData = require('./books');

const router = express.Router();

router.get('/', (req, res, next) => {
  const books = booksData.books;
  res.render('index', { 
    books: books,
    pageTitle: 'Home',
  });
});


module.exports = router;

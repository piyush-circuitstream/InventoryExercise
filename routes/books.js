const express = require('express');
const { Book } = require('../models');

const router = express.Router();

//Get list of books
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.render('books', { books });
});

//Render the add book form (URL: http://localhost:3000/books/add)
router.get('/add', (req, res) => {
    res.render('form', { title: 'Add a new book', action: '/books/add' }); //POST request on (URL: http://localhost:3000/books/add)
});

//Add a new book
router.post('/add', async (req, res) => {
    // Logic is here
    try {
        const tags = req.body.tags.split(',');
        req.body.tags = tags;
        await Book.create(req.body);
        res.render('form', { title: 'Add a new book', action: '/add', message: 'Book added successfully!' });
    } catch (err) {
        res.render('form', { title: 'Add a new book', action: '/add', message: `Error while adding book! Please try again! :( ${err}` });
    }
});

//Render the update book form
router.get('/edit/:id', async (req, res) => {
    const book = await Book.find({ _id: req.params.id })
    res.render('form', { title: 'Edit a book', action: `/books/edit/${req.params.id}`, book }); //localhost:3000/books/edit/:id
});

//Update an existing book
router.post('/edit/:id', async (req, res) => {
    // Logic is here
});

//Delete a book
router.delete('/delete/:id', async (req, res) => {
    // Logic is here
});

module.exports = router;
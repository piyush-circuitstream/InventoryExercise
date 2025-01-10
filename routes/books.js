const express = require('express');
const { Book } = require('../models');

const router = express.Router();

//Get list of books
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.render('books', { books });
});

//Render the add book form
router.get('/add', (req, res) => {
    res.render('form', { title: 'Add a new book', action: '/add' });
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
    res.render('form', { title: 'Edit a book', action: `/edit/${req.params.id}`, book });
});

//Update an existing book
router.put('/edit/:id', async (req, res) => {
    // Logic is here
});

//Delete a book
router.delete('/delete/:id', async (req, res) => {
    // Logic is here
});

module.exports = router;
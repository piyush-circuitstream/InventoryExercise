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
        res.render('form', { title: 'Add a new book', action: '/books/add', message: 'Book added successfully!' });
    } catch (err) {
        res.render('form', { title: 'Add a new book', action: '/books/add', message: `Error while adding book! Please try again! :( ${err}` });
    }
});

//Render the update book form
router.get('/edit/:id', async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });
    res.render('form', { title: 'Edit a book', action: `/books/edit/${req.params.id}`, book: book }); //localhost:3000/books/edit/:id
});

//Update an existing book
router.post('/edit/:id', async (req, res) => {
    // Logic is here
    try {
        const tags = req.body.tags.split(',')
        req.body.tags = tags
        await Book.updateOne({ _id: req.params.id }, req.body)
        const books = await Book.find();
        res.render('books', { books, message: `Book updated` })
    } catch (error) {
        res.render('form', { title: 'Edit a new book', action: `/edit/${req.params.id}`, message: `Hit an error while updating the book. ${error}` })
    }
});

//Delete a book
router.post('/delete/:id', async (req, res) => {
    // Logic is here
    try {
        await Book.deleteOne({ _id: req.params.id });
        const books = await Book.find();
        res.redirect('/books');
        // res.render('books', { books, message: `Book deleted` })
    } catch (error) {
        const books = await Book.find()
        res.render('books', { books, message: `Hit an error while deleting the book. ${error}` })
    }
});

module.exports = router;
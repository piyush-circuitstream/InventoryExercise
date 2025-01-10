const express = require('express');

const router = express.Router();

//Get list of books
router.get('/', (req, res) => {
    let booksList = [
        { title: "Title1", isbn: "1234567", publisher: "ABC", inventory: 5, unitsSold: 1, tags: ['Drama', 'Fiction'] },
        { title: "Title1", isbn: "1234567", publisher: "ABC", inventory: 5, unitsSold: 1, tags: ['Drama', 'Fiction'] },
        { title: "Title1", isbn: "1234567", publisher: "ABC", inventory: 5, unitsSold: 1, tags: ['Drama', 'Fiction'] },
        { title: "Title1", isbn: "1234567", publisher: "ABC", inventory: 5, unitsSold: 1, tags: ['Drama', 'Fiction'] }
    ];

    res.render('books', { books: booksList });
    // Logic is here
});

//Render the add/update book form
router.get('/form', (req, res) => {
    res.render('form', { title: 'Add a new book', action: '/add' });
});

//Add a new book
router.post('/', (req, res) => {
    // Logic is here
});

//Update an existing book
router.put('/', (req, res) => {
    // Logic is here
});

//Delete a book
router.delete('/', (req, res) => {
    // Logic is here
});

module.exports = router;
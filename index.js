const express = require('express');
const app = express();
const PORT = 3000;
const bookRouter = require('./routes/books');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

app.use(express.json());

app.use('/', bookRouter);

//Need to write the DB connection here...


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
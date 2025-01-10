const express = require('express');
const app = express();
const PORT = 3000;
const bookRouter = require('./routes/books');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); //Requried to parse the incoming form data which is in url-encoded form. 
app.use(express.json());

app.use('/books', bookRouter);

async function startApp() {
    try {
        await mongoose.connect('mongodb://localhost:27017/inventory');
    } catch (err) {
        console.error('Error on connecting to DB: ', err);
    }

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startApp();

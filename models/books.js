const mongoose = require("mongoose");
const { Schema } = mongoose;

const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    });

const BooksModel = mongoose.model("Book", booksSchema);

module.exports = BooksModel;

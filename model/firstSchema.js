const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Bookname : {
        type : String,
        required : true,
    },
    BookAuther : {
        type : String,
        required:true,
    },
    BookYear : {
        type : String,
        required : true,
    },
    BookPrice : {
        type : String,
        required : true,
    }
});

const admin = mongoose.model("Book",schema);

module.exports = admin;
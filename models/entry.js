const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entryScheme = new Schema({
    first: String, 
    second: String,
    third: String
}, {versionKey: false});

const Entry = mongoose.model("Entry", entryScheme);

module.exports = Entry;
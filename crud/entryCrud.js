var Entry = require("../models/entry");

async function saveEntry(entry) {
    try {
        return await Entry.create(entry);
    } catch (e) {
        console.log(e);
        throw e;
    }
}


module.exports = {saveEntry};
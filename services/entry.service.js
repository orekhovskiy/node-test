var EntryCrud = require("../crud/entryCrud");

async function saveEntry(entry) {
    return await EntryCrud.saveEntry(entry)
}


module.exports = {saveEntry};
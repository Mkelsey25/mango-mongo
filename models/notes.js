var mongoose = require("mongoose"); 
var Schema = mongoose.Schema
var noteSchema = new Schema ({
    title: {
        type: String
    },
    noteBody: {
        type: String
    }
});

var notes = mongoose.model("notes", noteSchema);

module.exports = notes;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
            type: String, 
            required: true
    }, 
    summary: {
        type: String, 
        required: true
    }, 
    url: {
        type: String, 
        required: true,
    },
    saved: {
        type: Boolean,
        default: false
    }
}); 

var articles = mongoose.model("Articles", articleSchema);

module.exports = articles;
var mongoose = require("mongoose");

// SCHEMA 

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground;
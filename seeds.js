var mongoose = require("mongoose");
var Campground = require("./models/campground");

var data = [
        {
            name: "Cloud's Rest", 
            image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
            description: "description of the campground."
        },
        {
            name: "Desert Mesa", 
            image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
            description: "description of the campground."
        },
        {
            name: "Canyon Floor", 
            image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
            description: "description of the campground."
        },
    ]

function seedDB(){
    // Remove campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        console.log("removed campgrounds");
        }
    });
    // Add campgrounds
    Campground.create({
        
    })
}

module.exports = seedDB;
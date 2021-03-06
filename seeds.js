var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest", 
            image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
            description: "description of the campground. Spicy jalapeno bacon ipsum dolor amet ut jerky tenderloin, cupidatat frankfurter esse ex duis beef consequat. Landjaeger bresaola shoulder in brisket nulla eu hamburger culpa boudin bacon short loin adipisicing. Magna aute et, swine doner flank sed jerky lorem dolor veniam ball tip consectetur hamburger voluptate. Commodo ham minim sirloin meatloaf quis, ad exercitation kielbasa fatback non burgdoggen. Drumstick chuck chicken ea, beef ribs shoulder ex. Tempor magna in, proident fugiat aliqua est tail pork loin cillum nulla. Filet mignon eu short loin proident, swine magna adipisicing shankle."
        },
        {
            name: "Desert Mesa", 
            image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
            description: "description of the campground. Spicy jalapeno bacon ipsum dolor amet ut jerky tenderloin, cupidatat frankfurter esse ex duis beef consequat. Landjaeger bresaola shoulder in brisket nulla eu hamburger culpa boudin bacon short loin adipisicing. Magna aute et, swine doner flank sed jerky lorem dolor veniam ball tip consectetur hamburger voluptate. Commodo ham minim sirloin meatloaf quis, ad exercitation kielbasa fatback non burgdoggen. Drumstick chuck chicken ea, beef ribs shoulder ex. Tempor magna in, proident fugiat aliqua est tail pork loin cillum nulla. Filet mignon eu short loin proident, swine magna adipisicing shankle."
        },
        {
            name: "Canyon Floor", 
            image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
            description: "description of the campground. Spicy jalapeno bacon ipsum dolor amet ut jerky tenderloin, cupidatat frankfurter esse ex duis beef consequat. Landjaeger bresaola shoulder in brisket nulla eu hamburger culpa boudin bacon short loin adipisicing. Magna aute et, swine doner flank sed jerky lorem dolor veniam ball tip consectetur hamburger voluptate. Commodo ham minim sirloin meatloaf quis, ad exercitation kielbasa fatback non burgdoggen. Drumstick chuck chicken ea, beef ribs shoulder ex. Tempor magna in, proident fugiat aliqua est tail pork loin cillum nulla. Filet mignon eu short loin proident, swine magna adipisicing shankle."
        },
    ];

function seedDB(){
    // Remove campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        Comment.remove({}, function(err){
            if(err){
                console.log(err);
            }
            console.log("removed comments");
             // Add campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "this place is cool but i wish there was wifi",
                                author: "camperdude99"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                                }
                            });
                    }
                });
            });
        });
    });
}

module.exports = seedDB;
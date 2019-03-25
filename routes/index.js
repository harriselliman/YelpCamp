var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


// root route

router.get("/", function(req, res){
    res.render("landing");
});

//=================
// AUTH ROUTES
//=================

//register form route

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
    var newUser = new User(
        {
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username
        }
        );
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

// show login form

router.get("/login", function(req, res){
    res.render("login");
});


// handling login logic

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }
    ), function(req, res){
});

//logout route

router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You have been logged out.");
    res.redirect("/campgrounds");
});

//user profile

router.get("/users/:id", function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err){
            req.flash("error", "Something went wrong.");
            res.redirect("/");
        }
        res.render("users/show", {user: foundUser});
    });
});



module.exports = router;


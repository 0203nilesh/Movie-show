const express = require('express'),
    router = express.Router();

    router.get("/register", (req, res)=>{
        res.render("home");
    })
    router.get("/login", (req, res)=>{
        res.render("login");
    })
    
    router.post("/register", (req, res)=>{
        const newObj= {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        User.register( newObj , req.body.password, function(err, user){
            if(err){
                console.log(err);
                res.json("Error in registration");
            } else{
                passport.authenticate("local")(req, res, function(){
                    res.json("user saved");
                })
            }
        })    
    })

    router.get("/secret", (req, res)=>{
        if(req.isAuthenticated()){
            res.json("success");
        } else{
            res.json("login first");
        }
    })

    router.post("/login", (req, res)=>{
        const user= new User({
            username: req.body.username,
            password: req.body.password
        })
        req.login(user, function(err){
            if(err){
                console.log(err);
                res.json({message:'error', username: user.username});
            } else{
                passport.authenticate("local")(req, res, function(){
                    res.json({message:'success', username: user.username});
                })
            }
        })
        
    })
    
    router.get("/logout", (req, res)=>{
        req.logout(function(err){
            if(err){
                res.json("Error");
            }else{
                res.json("success");
            }
        });
    })
    module.exports= router;
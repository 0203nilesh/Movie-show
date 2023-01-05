require('dotenv').config()
const express = require("express");
const mongoose= require("mongoose");
const bodyParser= require("body-parser");
const User= require('./models/user');
const Profile= require("./models/profile");
const Section= require("./models/section");
const Carousel= require("./models/carousel");
//session and cookies
const session= require("express-session");
const fileUpload= require("express-fileupload");
const passport= require("passport");
const passportLocalMongoose= require("passport-local-mongoose");
//session and cookies
const cors= require("cors");

const app= express();
const port= process.env.PORT;
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine" , "ejs");
app.set(express.static("public"));
app.use(fileUpload());

app.use(session({  //use session in our app
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize()); //intialize passport  in our app
app.use(passport.session());  //passport to deal with session

//Database connection
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, (err)=>{
    if(!err){
        console.log("Database connection successfull");
    } else{
        console.log("Not connected");
        console.log(err);
    }
});

passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

app.get("/profile/:username",async (req, res)=>{
    console.log(req.params.username);
    // if(req.isAuthenticated()){
        // console.log(req.user.username);
        let data = await Profile.find({});
        data =  data.map((info) => {
                const src = `data:image/png;base64,${Buffer.from(
                  info.img.data
                ).toString("base64")}`;
                return {id: info._id, src, firstName: info.user.firstName, lastName: info.user.lastName, username: info.user.username, email: info.user.email};
        });
        data= await data.filter((info)=>{
            return info.username=== req.params.username
        })
        res.json(data);
    // } else{
        // res.json("login first");
    // }
    // res.render("profile", {images: data});
})
app.get("/register", (req, res)=>{
    res.render("home");
})
app.get("/login", (req, res)=>{
    res.render("login");
})
app.get("/updateprofile", (req, res)=>{
    res.render("profile");
})
app.post("/register", (req, res)=>{
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
    // // console.log(req.body);
    // const newUser = new User({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //     password: req.body.password
    // })
    // User.findOne({email: req.body.email}, (err, foundUser)=>{
    //     if(foundUser){
    //         res.json("email already exist");
    //     } else{
    //         newUser.save((err)=>{
    //             if(!err){
    //                 console.log("User Saved");
    //                 res.json("user saved");
    //             } else{
    //                 console.log("Not Saved");
    //                 res.json("not saved");
    //             }
    //         })
    //     }
    // })
    
})

app.get("/secret", (req, res)=>{
    if(req.isAuthenticated()){
        res.json("success");
    } else{
        res.json("login first");
    }
})

app.post("/login", (req, res)=>{
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
    // const email= req.body.email;
    // const password= req.body.password;
    // User.findOne({email: email}, (err, foundUser)=>{
    //     if(!err){
    //         if(foundUser){
    //             if(foundUser.password=== password){
    //                 res.json("success");
    //             } else{
    //                 res.json("Password not matched");
    //             }
    //         } else{
    //             res.json("user not present");
    //         }
    //     } else{
    //         res.json("error occured");
    //     }
    //     })
})

app.get("/logout", (req, res)=>{
    req.logout(function(err){
        if(err){
            res.json("Error");
        }else{
            res.json("success");
        }
    });
})
app.post("/profile" , async (req, res)=>{
    const username= req.body.username;
     User.findOne({username: username} , function(err, user){
        if(!err){
            if(user){
                const newProfile= new Profile({
                    user: user,
                    img: {
                        data: req.files.image.data
                    }
                })
                newProfile.save((err)=>{
                    if(!err){
                        console.log("Profile saved");
                        res.send("saved");
                    }
                })
            }
        }
    })
})
app.post("/updateProfile/:id", async (req, res)=>{
    const username= req.params.id;
    Profile.findByIdAndUpdate(req.params.id, {user: req.body, img: {data: req.files.file.data}}, (err, doc)=>{
        if(!err){
            console.log("success");
            // console.log(doc);
            res.json("success");
        } else{
            console.log("not success");
            res.json("failed");
        }
    })
    // console.log(req.files.file.data);
    // console.log(req.body);
})

app.get("/allProfiles", (req, res)=>{ 
    // const user= Profile.findOneAndUpdate({user: {username: req.body}}); 
    console.log(user);
    // res.send(user);
})

//section
app.get("/section", (req, res)=>{
    res.render("section");data
})

app.get("/sectionData", async (req, res)=>{
    let sectionData = await Section.find({}).limit(6);
    sectionData = await sectionData.map((info) => {
                const src = `data:image/png;base64,${Buffer.from(
                  info.image.data
                ).toString("base64")}`;
                return { src, title: info.title  , detail: info.detail };
        });
    // console.log(sectionData);
    res.send(sectionData);
})

app.post("/carouselUpdate", async (req, res)=>{
    console.log(req.files.image);
    console.log(req.body);
    const newSection= new Section ({
        title: req.body.title,
        detail: req.body.details,
        image: {
            data: req.files.image.data
        }
    })
     newSection.save((err)=>{
        if(!err){
            console.log("Section saved");
            res.json("carousel");
        } else{
            console.log("Not saved");
            // console.log(err);
            res.json("Not saved");
        }
    })
})

//Carousel
app.get("/carousel", (req, res)=>{
    res.render("carousel");
})
app.post("/updateCarousel", (req, res)=>{
    const newCarousel= new Carousel ({
        title: req.body.title,
        detail: req.body.detail,
        image: {data: req.files.image.data}
    });
    newCarousel.save(function(err){
        if(!err){
            console.log("Saved");
            res.send("Updated");
        } else{
            console.log(err);
            res.send("Error");
        }
    })
})
app.get("/carouselData",async (req, res)=>{
    let carouselData = await Carousel.find({});
    carouselData = await carouselData.map((info) => {
                const src = `data:image/png;base64,${Buffer.from(
                  info.image.data
                ).toString("base64")}`;
                return { src, title: info.title  , detail: info.detail };
        });
    res.send(carouselData);
})

app.listen(port, (err)=>{
    console.log("Server is listening at port", port);
}) 

const express = require('express');
const router = express.Router();
router
    .get("/:username",async (req, res)=>{
        console.log(req.params.username);
        // if(req.isAuthenticated()){
            // console.log(req.user.username);
            let data = await Profile.find({});
            data = await data.map((info) => {
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
    
    .post("/setProfile" , async (req, res)=>{
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
    .post("/updateProfile/:id", async (req, res)=>{
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


module.exports= router;
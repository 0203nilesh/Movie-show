const mongoose= require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose);
module.exports=  mongoose.model("User", userSchema);
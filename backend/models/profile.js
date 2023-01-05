const mongoose= require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const profileSchma= mongoose.Schema({
    user: {
        firstName: {
            type: String,
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
    },
    img: {
        data: Buffer,
        contentType: String
    }
})

module.exports=  new mongoose.model("Profile", profileSchma);
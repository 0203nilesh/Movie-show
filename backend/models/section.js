const mongoose= require("mongoose");
const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    detail: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports=  mongoose.model("Section", sectionSchema);
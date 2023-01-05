const mongoose= require("mongoose");

const carouselSchema = new mongoose.Schema({
    title: {
        type: String
    },
    detail :{
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }
})

module.exports= mongoose.model("Carousel", carouselSchema);
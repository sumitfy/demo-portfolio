const mongoose = require('mongoose')
const sliderSchema = mongoose.Schema;
const sliders = new sliderSchema({
    sliderImage:String,
    sliderh1:String,
    sliderp:String,
    class:String
})

module.exports = sliders;
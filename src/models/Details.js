const mongoose = require('mongoose')
const schema = mongoose.Schema
const detail = new schema({
    brandURL:String,
    brandName:String,
    links:[
        {
            name:String,
            URL:String
        },
    ]
})
// module.exports = mongoose.model("detail",Detail);
module.exports = detail;
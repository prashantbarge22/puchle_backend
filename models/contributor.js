const mongoose = require("./mongo");

const contributorSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    institute:String,
    grade:String,
    password:String,
})

module.exports = mongoose.model("contributor",contributorSchema);
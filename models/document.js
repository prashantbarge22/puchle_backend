const mongoose = require("./mongo");
const mongoosePaginate = require('mongoose-paginate-v2');

const documentSchema = mongoose.Schema({
    filename:String,
    path:String,
    heading:String,
    uploadedAt:String,
    createdBy:String,
})

documentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("documents",documentSchema);
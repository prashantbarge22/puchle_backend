const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASEURL,(err)=>{
    if(err)
        console.log(err);
    console.log("Connected to database")
})


module.exports = mongoose;
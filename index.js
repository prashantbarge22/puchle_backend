const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

let port = process.env.PORT || 8000;

app.use(express.static("./my-uploads"));

require("./routes/route")(app);

app.listen(port,()=>{
    console.log(`Server has started at ${port}`);
})
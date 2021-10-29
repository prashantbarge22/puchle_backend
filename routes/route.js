const ContributeController = require("../controller/contributor");
const { upload } = require("../middlewares/multer");
const route = (app)=>{
    app.get("/",ContributeController.helloWorld);
    app.post("/signup",ContributeController.signup);
    app.post("/login",ContributeController.login);
    app.get("/getDocuments",ContributeController.fetchDocument);
    app.post("/saveDocument",upload.single("file"),ContributeController.saveDocument);

}

module.exports =  route;
const models = require("../models/model"); 
const upload = require("../middlewares/multer");
const Contributor = models.contributor;
const Document = models.document;
exports.helloWorld = (req,res)=>{
    res.send("Say Hello");
}

exports.signup = async (req,res)=>{
    const user = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        institute:req.body.institute,
        grade:req.body.grade,
        password:req.body.password,

    }

   let result =  await Contributor.find({$or:[{email:req.body.email},{phone:req.body.phone}]});
   if(result.length>0){
       res.status(200).send("Email or phone is Already Registered");
   }else{
       result = await Contributor.create(user);
       res.send({error:false,result:result});
   }
}

exports.login = async (req,res)=>{
    let result =  await Contributor.find({$or:[{email:req.body.email},{phone:req.body.email}]});
   if(result.length>0){
            user = result[0];
            if(user.password == req.body.password){
                res.send({error:false,result:user});
            }else{
                res.send("Password is Incorrect");
            }   
    }else{
       res.send("Not Registstered");
   }
}

exports.saveDocument = async(req,res)=>{
    const document = {
    filename:req.file.filename,
    path:req.file.path,
    heading:req.file.heading,
    uploadedAt:new Date(),
    createdBy:req.body.user,
    }
    try{
        let docuemnt = await Document.create(document);
        res.send({error:false,result:docuemnt});
    }catch(err){
        res.send({error:true,result:err});
    }
}

exports.fetchDocument = async(req,res)=>{
    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'itemsList',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        pagingCounter: 'slNo',
        meta: 'paginator',
      };

      const options = {
          page:req.body.pageNumber,
          limit:10,
          customLabels:myCustomLabels,
      }

    try{
        let documents = await Document.paginate({},options);
        res.send({error:false,result:documents,length:documents.length});
    }catch(err){
        res.send({error:true,result:err});
    }
}



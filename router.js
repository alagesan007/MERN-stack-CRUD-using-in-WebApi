const express = require('express');
const router = express.Router();
const InfoRouter = require('./infoschema.js');
const bodyparser = require('body-Parser');
//CREATE..
router.post('/',function(req,res){
    console.log(req.body);
    var data  = new InfoRouter({
        Name : req.body.Name,
        Age : req.body.Age,
        City : req.body.City
    });
    
    data.save();
    res.json(data);
});

//get all..

router.get("/",async(req,res)=>{
    var finddata = await InfoRouter.find();
    res.json(finddata);
})
//update..
router.put("/update",async(req,res)=>{
    var Update = await InfoRouter.update({_id:req.body._id},{$set:{
        Name : req.body.Name,
        Age: req.body.Age,
        City : req.body.City
    }});
    res.json(Update);
});
 

//delete..
router.delete("/del/:id",async(req,res)=>{
    var delData = await InfoRouter.findOneAndDelete(req.params.id).then(e =>{
        if (!e) {
            res.json({message:"deleted succesfully"});
        }
        
    });
});



router.get("/",(req,res)=>{
    res.json("router execution");
})


module.exports = router;
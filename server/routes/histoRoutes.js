const express = require('express')
const mongoose = require('mongoose')

const router = express.Router();

const FactureSimule = mongoose.model('FactureSimule')
const Reclamation=mongoose.model("reclamation")
const Demande=mongoose.model("Demande")

router.post('/req',async (req,res)=>{
    const {email} = req.body
    Reclamation.find({email}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })    
  })
router.post('/fs',async(req,res)=>{
    const {email} = req.body
    FactureSimule.find({email}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })   
})
router.post('/dem',async(req,res)=>{
    const {email} = req.body
    Demande.find({email}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/countDem',async(req,res)=>{
    Demande.find({email:req.body.email}).countDocuments(function(err, count){
        console.log("Number of docs: ", count );
        res.send({count})
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/countRec',async(req,res)=>{
    Reclamation.find({email:req.body.email}).countDocuments(function(err, count){
        console.log("Number of docs: ", count );
        res.send({count})
    }).catch(err=>{
        console.log(err)
    })
})
router.post('/countFs',async(req,res)=>{
    FactureSimule.find({email:req.body.email}).countDocuments(function(err, count){
        console.log("Number of docs: ", count );
        res.send({count})
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = router
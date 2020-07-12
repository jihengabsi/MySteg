const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const{jwtkey} =require('../keys')
const router = express.Router();
const User = mongoose.model('User')
const nodemailer = require('nodemailer');


//signup with google and mongodb
router.post('/signupp',async(req,res)=>{
  const {email} = req.body.email
  const user1 = await User.findOne({email})
  if(!user1){
    try{
  const user = new User({
    cin:req.body.cin,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone,
    adress:req.body.adress,
    picture:req.body.picture  
    })
    await user.save()
    .then(data=>{
      const token = jwt.sign({userId:user._id},jwtkey)
       console.log(data)
       res.send({token})

    })
  }
  catch(err){
    return res.status(422).send({error :"must provide email or password"})
}
  }
   
})
//signup 
router.post('/signup',async(req,res)=>{
  const {email} = req.body.email
  const user1 = await User.findOne({email})
  try{
  if(!user1){
  const user = new User({
    cin:req.body.cin,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone,
    adress:req.body.adress,
    picture:req.body.picture  
    })
    await user.save()
    .then(data=>{
      const token = jwt.sign({userId:user._id},jwtkey)
       console.log(data)
       res.send({token})

    })
  }
}
  catch(err){
    return res.status(422).send({error :"must provide email or password"})
}
  
})
//signin with google and mongodb
router.post('/signin1',async (req,res)=>{
  const {email} = req.body
 
  const user = await User.findOne({email})
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  
}

)
//signin
router.post('/signin',async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(422).send({error :"must provide email or password"})
  }
  const user = await User.findOne({email})
  if(!user){
      return res.status(422).send({error :"must provide email or password"})
  }
  try{
    await user.comparePassword(password);    
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
  


})

router.post('/reset',async(req, res)=> {
  const {email} = req.body
  const user1 = await User.findOne({email})
  if(!user1){
  }
  try{
      let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'mysteg123@gmail.com',
              pass: 'mySteg@123456'
           },
      

      });
      let mailOptions = {
          from: 'mysteg123@gmail.com',
          to: req.body.email,
          subject: 'Password Reset',
          text: 'That was easy!',
          html: "<h1>MySteg</h1><p>\
          <h3>Bonjour, "+user1.name+"</h3>\
          Nous avons reçu une demande de réinitialisation de votre mot de passe MySteg Voici votre code de réinitialisation du mot de passe :<br/>\
          <h3>"+req.body.code+"</h3>\
          </p>"
      };
      transporter.sendMail(mailOptions).then(info=>{
        console.log("email sent!")
        res.send({info})
    });
      
     
    }
    catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
  


});

module.exports = router


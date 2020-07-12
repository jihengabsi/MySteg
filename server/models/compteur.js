const mongoose=require('mongoose')


const CompteurShema =new mongoose.Schema({
    messageCompt:{
        type:String,
        required:true,
        trim:true,
        minlength:3},
        payereCompt:{
        type:String,
        required:true,}
})
const Compteur=mongoose.model('Compteur',CompteurShema)

module.exports=Compteur;
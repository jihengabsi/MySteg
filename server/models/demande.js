const mongoose=require('mongoose')


const DemandeShema =new mongoose.Schema({
    messageDemand:{
        type:String,
        required:true,
        trim:true,
        minlength:3},
    payeDemand:{
        type:String,
        required:true,},
        typeDemand:String,
        email:String,
        date:String,
        reponse:String
})
const Demande=mongoose.model('Demande',DemandeShema)

module.exports=Demande;
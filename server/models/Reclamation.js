const mongoose=require('mongoose')

const ReclamationShema =new mongoose.Schema({
    message:String,
    typeRec:String,
    email:String,
    date:String,
    reponse:String
})
mongoose.model("reclamation",ReclamationShema)


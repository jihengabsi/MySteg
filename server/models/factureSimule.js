const mongoose = require('mongoose')

const facSiSchema = new mongoose.Schema({
    email:{
    type:String,
    },
    consoElec:{
    type:String,
    required:true
    },
    consoGaz:{
    type:String,
    required:true
    },
   nbMois:{
    type:String,
    required:true
   },
   montantElec:{
    type:String,
    required:true
   },
   montantGaz:{
    type:String,
    required:true
   },
   montant:{
    type:String,
    required:true
   },
   date:{
    type:String,  
   }
})




mongoose.model('FactureSimule',facSiSchema);
const mongoose = require('mongoose')

const facSchema = new mongoose.Schema({
    reference:{
    type:String,
    required:true
    },
    dateDebut:{
    type:Date,
    required:true
       },
    dateFin:{
    type:Date,
    required:true
       },
   montant:{
    type:String,
    required:true
   },
   etat:{
    type:String,
    required:true
   },
})




mongoose.model('Facture',facSchema);
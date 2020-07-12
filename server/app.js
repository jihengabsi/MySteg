const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const app = express()


const hostname = '127.0.0.1';
const port = 3000;
const {mongoUrl} = require('./keys')

require('./models/User')
require('./models/Facture')
require('./models/FactureSimule')
require('./models/Reclamation')
require('./models/demande')
require('./models/Compteur')
require('./models/NoterService')
const requireToken = require('./middleware/requireToken')
const authRoutes = require('./routes/authRoutes')
const histoRoutes = require('./routes/histoRoutes')
const User = mongoose.model('User')
const Facture = mongoose.model('Facture')
const FactureSimule = mongoose.model('FactureSimule')
const NoterService=mongoose.model("noterservice")
const Reclamation=mongoose.model("reclamation")
const Demande=mongoose.model("Demande")
app.use(bodyParser.json())
app.use(authRoutes)
app.use(histoRoutes)



mongoose.connect(mongoUrl,{
    useFindAndModify: false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

app.get('/',requireToken,(req,res)=>{
    res.send({_id:req.user._id,cin:req.user.cin,email:req.user.email,password:req.user.password,phone:req.user.phone,name:req.user.name,adress:req.user.adress,picture:req.user.picture})
  
})
app.post('/new',(req,res)=>{
      
    const fact = new Facture({
        reference:req.body.reference,
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        montant:req.body.montant,
        etat:req.body.etat  
      })
       fact.save()
      .then(data=>{
        console.log(data)
        res.send(data)
  
      }).catch(err=>{
      return res.status(422).send({error :"must provide email or password"})
    })
    
  })
  app.post('/newFS',(req,res)=>{
      
    const factS = new FactureSimule({
        email:req.body.email,
        consoElec:req.body.consoElec,
        consoGaz:req.body.consoGaz,
        nbMois:req.body.nbMois,
        montantElec:req.body.montantElec,
        montantGaz:req.body.montantGaz,
        montant:req.body.montant,
        date:req.body.date
      })
      factS.save()
      .then(data=>{
        console.log(data)
        res.send(data)
  
      }).catch(err=>{
      return res.status(422).send({error :"must provide email or password"})
    })
    
  })


app.post('/find',(req,res)=>{
    Facture.find({reference:req.body.reference}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
  
})
app.post('/findDate',(req,res)=>{
  var date=req.body.dateDebut; 
  Facture.find({$or:[{dateDebut:new RegExp(date, 'i')},{dateFin:new RegExp(date, 'i')}]}).then(data=>{
      res.send(data)
  }).catch(err=>{
      console.log(err)
  })

})
app.post('/updatePwd', async (req,res)=>{
  const {email} = req.body
  const user1 = await User.findOne({email})
    bcrypt.hash(req.body.password,saltRounds,function(err,   hash) { 
      User.findByIdAndUpdate(user1._id,{
        cin:user1.cin,
        name:user1.name,
        email:email,
        password:hash,
        phone:user1.phone,
        adress:user1.adress,
        picture:user1.picture
        
    }).then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
      console.log(err)
    })
  })
})

app.post('/updateP',(req,res)=>{
    bcrypt.hash(req.body.password,saltRounds,function (err,   hash) {
    User.findByIdAndUpdate(req.body._id,{
       cin:req.body.cin,
        name:req.body.name,
        email:req.body.email,
        password:hash,
        phone:req.body.phone,
        adress:req.body.adress,
        picture:req.body.picture
        
    }).then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
      console.log(err)
    })
    })
  })
  app.post('/update',(req,res)=>{
    User.findByIdAndUpdate(req.body._id,{
        cin:req.body.cin,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        adress:req.body.adress,
        picture:req.body.picture
        
    }).then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
      console.log(err)
    })
  
  })
  app.post('/envoyer-Demande',async(req,res)=>{
    const demande=new Demande({
     messageDemand:req.body.messageBranch,
     payeDemand:req.body.payerBranch,
     typeDemand:req.body.typeBranch,
     email:req.body.email,
     date:req.body.date,
     reponse:'non répondu'
    })
    demande.save()
      .then(data=>{
         console.log(data)
         res.send(data)
     }).catch(err=>{
         console.log(err)
     })
    
 })
 app.post('/send-data',async(req,res)=>{
  const reclamation=new Reclamation({
   message:req.body.message,
   typeRec:req.body.typeRec,
   email:req.body.email,
   date:req.body.date,
   reponse:'non répondu'
  })
    reclamation.save()
    .then(data=>{
       console.log(data)
       res.send(data)
   }).catch(err=>{
       console.log(err)
   })
  
})

app.post('/envoyer-noterService',(req,res)=>{
  const noterservice=new NoterService({
   starCount:req.body.starCount,

  })
  noterservice.save()
    .then(data=>{
       console.log(data)
       res.send(data)
   }).catch(err=>{
       console.log(err)
   })
  
})


app.listen(port,hostname,() =>{
console.log("server running"+port)
})


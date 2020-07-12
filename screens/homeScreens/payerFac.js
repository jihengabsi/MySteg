import React, {useEffect,useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';

import {Button} from 'react-native-paper';
import {StyleSheet,TouchableOpacity,Image,
   Text,View, SafeAreaView, ScrollView,Modal, Alert,PermissionsAndroid} from 'react-native';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

   import AsyncStorage from '@react-native-community/async-storage';
import steg from '../../images/stegLogo.png'

 export default payerFac = (props) => {

    const {_id,reference,dateDebut,dateFin,montant,etat} = props.route.params.item
 
  return(
   
<SafeAreaView style={styles.container}>
  <ScrollView scrollEventThrottle={16} 
  
 
  >
     <Text style={{alignSelf: "center",marginTop:20,fontSize:16}} >Vous trouvez ici le resumé du votre facture: </Text>
<View style={styles.facture}>
<View style={styles.cub}>
<View style={{alignSelf: "center"}}>
 
  <View style={styles.profilImage}>
<Image source={steg} style={styles.image} />
  </View>
</View>

<View style={styles.infoContainer}>
<Text style={{fontWeight:"300",fontSize:30,color:"#365f91"}}>Facture  فاتورة</Text>
</View>

</View>



<View style={styles.cub2}>
<View style={{marginTop:0}}>
<View style={styles.info}>
<Text style={styles.texticon}>Reference</Text>
<Text style={styles.texticon}>{reference}</Text>
<Text style={styles.texticon1} >المرجع</Text>

</View>


<View style={styles.info}>

<Text style={styles.texticon}>Du</Text>

<Text style={styles.texticon}>{dateDebut.substring(0,10)}</Text>
<Text style={styles.texticon1}>الفترة من</Text>
</View>


<View style={styles.info}>


<Text style={styles.texticon}>Au</Text>
<Text style={styles.texticon}>{dateFin.substring(0,10)}</Text>
<Text style={styles.texticon1}>إلى</Text>
</View>

<View style={styles.info}>
<Text style={styles.texticon}>Montant</Text>
<Text style={styles.texticon}>{montant}</Text>
<Text style={styles.texticon1}>المبلغ</Text>
</View>
<View style={styles.info}>
<Text style={styles.texticon}>Etat</Text>
<Text style={styles.texticon}>{etat}</Text>
<Text style={styles.texticon1}>الحالة</Text>
</View>

{(() => {
              if (etat == 'non payé'){
  return (<TouchableOpacity style={styles.btn} >
     <Text style={styles.texticon2}>Payer</Text>
     </TouchableOpacity>)
    }
  })()}
      
<View >
  


</View>
</View>
</View>
</View>
</ScrollView>
</SafeAreaView>

);
};


const styles=StyleSheet.create({
  btn: {
    width: 100,
    height: 45,
    borderRadius: 5,
    backgroundColor:'#ce2223',
    borderWidth:2,
    borderColor:'#ce2223',
    justifyContent: 'center',
    alignSelf:'center',

    marginTop:-30,
    
  },
  facture:{
    borderColor:"#97cce6",
    alignSelf:'center',
    alignItems: 'center',
    width:380,
    height:620,
    marginTop:5,
    backgroundColor:"#ecf7fb",
    borderWidth:2,
    
  },
  direct:{
    position:"absolute",
   marginLeft:330,
   fontSize:20,
  },
  modalView:{
    position:"absolute",
    bottom:2,
    width:"100%",
    backgroundColor:"white"

},
modalButtonView:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10
},
  cub2:{
    shadowColor: "#000",
    shadowOffset: {
     width: 0,
   height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: null,
   
  },

  container:{
   flex:1,
backgroundColor:'rgba(255,255,255,0.25)'

  },
profilImage: {
top:-30,
width: 350,
height:200,

overflow:"hidden"
  },
  image: {
    flex:1,
    width:undefined,
    height:undefined
  },


infoContainer:{
 top:-60,
  alignSelf:'center',
  alignItems: 'center',
  width:300,
 

},

info:{
  top:-50,
  borderColor:"rgba(255,255,255,255)",
  backgroundColor:"rgba(255,255,255,255)",
  borderWidth:2,
  marginTop:20,
  flexDirection:'row',
  width:360,
  height:50,
  alignItems:"center",
},
icons:{
  marginStart:20,
},
texticon: {
  width:120,
  marginStart:20,
  fontSize:20,
  fontWeight:'bold',
  color:'#41444B'
  
},
texticon2: {
  width:120,
  marginStart:20,
  fontSize:20,
  fontWeight:'bold',
  color:'rgba(255,255,255,255)'
  
},
texticon1: {
  width:120,
  marginStart:-60,
  fontSize:20,
  fontWeight:'bold',
  color:'#41444B'
  
},
background: {
  flex: 1,
  width: null,
  height: null,
}


});




  
import React, {useEffect,useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';

import {Button} from 'react-native-paper';
import {StyleSheet,TouchableOpacity,Image,
   Text,View, SafeAreaView, ScrollView,Modal, Alert,PermissionsAndroid} from 'react-native';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

   import AsyncStorage from '@react-native-community/async-storage';
import steg from '../../images/stegLogo.png'

 export default payerFac = (props) => {

    const {_id,date,messageDemand,typeDemand,reponse} = props.route.params.item
 
  return(
   
<SafeAreaView style={styles.container}>
  <ScrollView scrollEventThrottle={20} >
<View style={styles.facture}>
<View style={styles.cub}>

<View style={styles.profilImage}>
<FontAwesome5 name="wpforms" style={styles.image}  size={70} color="lightblue" />
  </View>



<View style={styles.infoContainer}>
<Text style={{fontWeight:"300",fontSize:30,color:"#365f91"}}>Demande</Text>
</View>

</View>



<View style={styles.cub2}>
<View style={{marginTop:0}}>
<View style={styles.info}>
<Text style={styles.texticon}>Date:</Text>
<Text style={styles.texticon1}>{date}</Text>
</View>


<View style={styles.info}>
<Text style={styles.texticon}>Type de la demande:</Text>
<Text style={styles.texticon1}>{typeDemand}</Text>
</View>


<View style={styles.info}>
<Text style={styles.texticon}>Message de la demande:</Text>
<Text style={styles.texticon1}>{messageDemand}</Text>
</View>

<View style={styles.info}>
<Text style={styles.texticon}>Réponse:</Text>
<Text style={styles.texticon1}>{reponse}</Text>

</View>



      
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
    height:'100%',
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
width: 350,
height:150,

overflow:"hidden"
  },
  image: {
    alignSelf:'center',
    alignItems: 'center',
marginTop:20,

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
  width:350,
  height:100,

},
icons:{
  marginStart:20,
},
texticon: {
  width:120,
  marginStart:2,
  fontSize:20,
  fontWeight:'bold',
  color:'#41444B',
  width:150
  
},
texticon1: {
    width:120,
    marginStart:2,
    fontSize:20,
    fontWeight:'bold',
    color:'grey',
    width:150
    
  },

background: {
  flex: 1,
  width: null,
  height: null,
}


});




  
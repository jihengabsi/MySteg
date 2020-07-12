import React, {useEffect,useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';

import {Button} from 'react-native-paper';
import {StyleSheet,Image,
   Text,View,TextInput, KeyboardAvoidingView, ScrollView,Modal, Alert,PermissionsAndroid} from 'react-native';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

   

   const updateE = ({navigation,route}) => {
    const _id = route.params._id
    const {email,password,name,phone,adress,picture} = route.params
    const [modal,setModal] = useState(false)
    const [adress1,setAdress] = useState("")

 
  const updateDetails = ()=>{
      fetch("http://10.0.2.2:3000/update",{
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            _id,
            name,
            email,
            password,
            phone,
            adress:adress1,
            picture
          })
      })
      .then(res=>res.json())
      .then(data =>{
        Alert.alert(`${data.name} is updated successfuly`)
        setModal(false)
        navigation.goBack()
      })
      .catch(err=>{
        Alert.alert("someting went wrong")
    })
      
  }
  
return(
<View style={styles.cub2}>
<View style={{marginTop:15}}>
   
<Text style={styles.texticon}>Changer votre adresse:</Text>
<View style={styles.info}>
<View style={styles.icons}>
  <FontAwesome5 name="map-marker-alt" size={30} color="rgba(0,0,0,0.8)"  />
</View>
<Text style={styles.texticon}>{adress}</Text>
<FontAwesome5 name="pen" style={styles.direct} color="rgba(0,0,0,0.8)" 

onPress={() => setModal(true)}
/>
</View>
</View>
<Modal
             animationType="slide"
             transparent={true}
             visible={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
               <ScrollView>
              <KeyboardAvoidingView>
              <View style={styles.modalView}>
             
                <View style={{borderRadius:10,backgroundColor:"#ffffff",marginBottom:hp('50%'),marginTop:hp('20%'),marginHorizontal:wp('10%'),padding:40,flex:1}} >
               
                 <Text>Modifier votre adresse:</Text>
                 <View style={styles.modalTextView}>
                 <TextInput style={styles.input} onChangeText={(text)=>setAdress(text)}  />
                 </View>
                  <View style={styles.modalButtonView}>
                        <Button 
                        title="Envoyer"
                        icon="send"                         
                        theme={theme}
                        mode="contained"
                        onPress={() => updateDetails()}>
                                Envoyer
                        </Button>
                        <Button 
                title="cancel"
                 theme={theme}
                onPress={() => setModal(false)}>
                        Annuler
                </Button>
                        </View>
         
               </View> 
              </View>
              </KeyboardAvoidingView>
              </ScrollView>
             </Modal>
    </View>
    );
};

const theme = {
  colors:{
      primary:"#006aff"
  }
}

const styles=StyleSheet.create({
  
 input: {
  padding:10,
  marginVertical:20,
  fontSize:16,
  backgroundColor: 'rgba(0,0,0,0.35)',
  color:'rgba(255,255,255,0.7)',
},
  direct:{
    position:"absolute",
   marginLeft:330,
   fontSize:20,
  },
  modalView:{
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor:"#000000aa",
    flex:1

},
modalButtonView:{

    marginVertical:10,
    backgroundColor:"#ffffff",
    flexDirection:"row",
    justifyContent:"space-around",
    
},
modalTextView:{
  
  backgroundColor:"#ffffff",
  flexDirection:"column",
  justifyContent:"space-around",
},
  cub2:{
    backgroundColor:'rgba(255,255,255,0.25)',
    shadowColor: "#000",
    shadowOffset: {
     width: 0,
   height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: null,
   
  },
  cub:{
  backgroundColor:'rgba(47,163,218,0.4)',
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

width: 200,
height:200,
borderRadius:200,
borderColor:"rgba(255,255,255,255)",
borderWidth:4,
overflow:"hidden"
  },
  image: {
    flex:1,
    width:undefined,
    height:undefined
  },

add:{
  backgroundColor: "rgba(0,0,0,0.75)",
  position:"absolute",
  bottom:0,
  right:0,
  width:50,
  height:50,
  borderRadius:30,
  alignItems:"center",
  justifyContent:"center"
},
infoContainer:{
  alignSelf:'center',
  alignItems: 'center',
  marginTop:5,
  
},

info:{
  backgroundColor:"rgba(255,255,255,255)",
  borderColor:"rgba(47,163,218,0.4)",
  borderWidth:2,
  marginTop:20,
  flexDirection:'row',
  width:wp('95%'),
  height:50,
  marginLeft:10,
  alignItems:"center",
  borderRadius:10,
},
icons:{
  marginStart:20,
},
texticon: {
  marginStart:20,
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

export default updateE;
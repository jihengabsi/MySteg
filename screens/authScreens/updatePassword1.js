import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect,useState}from 'react';
import { StyleSheet,Dimensions, KeyboardAvoidingView,Text, View ,ImageBackground,Image,
   TextInput,Alert,
  TouchableOpacity,ScrollView} 
   from 'react-native';
   import {Card} from 'react-native-paper'
import Logo from '../../images/stegLogo.png'
import bgImage from '../../images/background.jpg'
import { Form } from 'react-native-form-auto-next';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const updatePwd1 =(props) => {
  const [passError,setpassError] = useState('')
  const [passError1,setpassError1] = useState('')
  const [pwd,setPwd] = useState('');
  const [pwd1,setPwd1] = useState('');
  const verifPassword=(props)=>{
   if(pwd==pwd1){
    updatePsw(props)
   }
   else{
     Alert.alert("c'est incorrect, veuillez réessayer")
   }
  }
  const updatePsw=async(props)=>{
   const email=await AsyncStorage.getItem("email1")
    fetch("http://10.0.2.2:3000/updatePwd",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "password":pwd1
     })
    })
    .then(res=>res.json())
    .then(async(data)=>{
      try {
       Alert.alert("Mot de passe changé avec succées")
       props.navigation.replace("signin")
      }catch (e) {
       Alert.alert("Erreur!")
      }
           })
    
  }
  const passValidation=()=>{
    if(pwd=="" ){
        setpassError("Ce Champ est Obligatoire*")
    }else{
      setpassError("")
    }
  }
  const passValidation1=()=>{
    if(pwd1=="" ){
        setpassError1("Ce Champ est Obligatoire*")
    }else{
      setpassError1("")
    }
  }

     return (
      <ScrollView>
       <KeyboardAvoidingView>
   <ImageBackground   style={styles.background}>
  
   <Card style={styles.mycard}>
   <Card style={styles.mycard1}>
     
     <FontAwesome5 name="user-shield" size={60} color={'lightblue' } style={styles.Icon1}
        />
      </Card>
    <View style={styles.bot}>
    <Form>
    <View style={styles.inputContainer}>
    <Text style={styles.textlog1}>Changer votre mot de passe:</Text>
      </View>
    <View style={styles.inputContainer}>

    <FontAwesome5 name="lock" size={25} color={'#136FAF' } style={styles.Icon}
       />
     
      <TextInput 
          onBlur={()=>passValidation()}
      style={styles.input}
      placeholder={'Mot de passe'}
      placeholderTextColor={'#136FAF'}
      underlineColorAndroid='transparent'
      onChangeText={(text)=>setPwd(text)}
      
      />
    </View>
    <Text style={{color:'red',top:-40}}>{passError}</Text>
    <View style={styles.inputContainer}>
    <FontAwesome5 name="lock" size={25} color={'#136FAF' } style={styles.Icon}
       />
     
      <TextInput 
        onBlur={()=>passValidation1()}
      style={styles.input}
      placeholder={'Confirmer le mot de passe'}
      placeholderTextColor={'#136FAF'}
      underlineColorAndroid='transparent'
      onChangeText={(text)=>setPwd1(text)}
      
      />
    </View>
    <Text style={{color:'red',top:-40}}>{passError1}</Text>

    </Form>
    <TouchableOpacity  style={styles.login}  onPress={() => verifPassword(props)} >
 <Text style={styles.textlog}>Valider</Text>
</TouchableOpacity>

</View>

</Card>
   </ImageBackground>
   </KeyboardAvoidingView>
   </ScrollView>
 )}
const styles = StyleSheet.create({
 
    
  mycard:{

    width:  wp('100%'),
    height:  hp('50%'),
    shadowColor: "rgba(255, 255, 255, 0.4)",
      backgroundColor:"rgba(255, 255, 255, 0.4)",
      borderColor:'rgba(255, 255, 255, 0.4)',
      borderWidth:2,
    borderRadius:10,
   

  },
  mycard1:{
    alignSelf:"center",
    top:-80,
    width: 130,
    height:130,
    borderRadius:200,
    borderColor:"rgba(255,255,255,0.8)",
    backgroundColor:"rgba(255, 255, 255, 0.8)",
    borderWidth:4,
 position:"absolute"
      },
 
 
  signUp:{
    flex:1,
    flexDirection: 'row',

   justifyContent:'center',
    marginTop:20
  },
 background: {
  justifyContent:'center',
  alignSelf:'center',
  alignItems:'center',
  flex: 1,
  width:  wp('100%'),
  height:  hp('100%'),
  backgroundColor: 'rgba(47,163,218,0.4)',

  
 },

 logocontainer: {
   flex:1,
alignItems:'center',


 },

 input: {
   width: 330,
   height:45,
   borderRadius: 10,
   fontSize:16,
   paddingLeft:45,
   backgroundColor: 'rgba(255,255,255,0.50)',
   color:'#136FAF',
   marginHorizontal:25,
   top:-50
   
 },
 Icon1: {
  position:'absolute',
  top: 20,
  left:28

},
 Icon: {
   position:'absolute',
   top: -40,
   left:37
 },
 inputContainer: {
   marginTop:20,
  
 },


 eyes: {
   position:'absolute',
   top: -40,
   right:37
 },
 login: {

   width: 330,
   height:45,
   borderRadius:10,
  backgroundColor: '#136FAF',
  justifyContent: 'center',
  marginTop:-20
 },
 texticon: {
  paddingBottom:35,
  marginStart:20,
  fontSize:20,
  fontWeight:'bold',
  color:'#136FAF'
  
},
textlog1: {
  paddingTop:40,
  paddingBottom:50,
  color: '#136FAF',
  textAlign: 'center',
  fontSize: 20
   },
 textlog: {

color: 'white',
textAlign: 'center',
fontSize: 20
 },
 bot: {
   flex:1,
   alignItems:'center',

   
 }
})
export default updatePwd1;

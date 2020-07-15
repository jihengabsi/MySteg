import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect,useState}from 'react';
import { StyleSheet,Dimensions, KeyboardAvoidingView,Text, View ,ImageBackground,Image,
   TextInput,Alert,
  TouchableOpacity,ScrollView} 
   from 'react-native';
   import {Card} from 'react-native-paper'


import { Form } from 'react-native-form-auto-next';
import AsyncStorage from '@react-native-community/async-storage';


const LoginScreen = (props) => {
  const [EmailError,setEmailError] = useState('')

  const [email,setEmail] = useState('');
  const [code,setCode] = useState('');
  const EmailValidation=()=>{
    if(email==""){
        setEmailError("Ce Champ est Obligatoire*")
    }else{
      let rjx=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      let isVAlid=rjx.test(email)
      if(isVAlid){
        setEmailError("")
     }else{
      setEmailError("email incorrect")
     }
    }
}

  const codeGeneretor=()=>{
    setCode(Math.floor(Math.random() * 1000000) + 1)
  }
  useEffect(()=>{
    codeGeneretor()
  },[])

const passwordforgotten=async(props)=>{
  if(email==''){
    Alert.alert("Tapez l'email d'abord!")
  }else{
    fetch("http://10.0.2.2:3000/reset",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "code":code
     })
    })
    .then(res=>res.json())
    .then(async(data)=>{
      try {
       await AsyncStorage.setItem('code', JSON.stringify(code))
       await AsyncStorage.setItem('email1',email)
       Alert.alert("Un mail a été envoyé a votre email!")
       props.navigation.push("insertCode")
      }catch (e) {
       Alert.alert("Changer l'email!")
      }
           })
  }
  
  
}

     return (
      <ScrollView>
      <View style={{ flex: 1,position:"relative" }}>
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
    <Text style={styles.textlog1}>Saisi votre email:</Text>
      </View>
    <View style={styles.inputContainer}>

    <FontAwesome5 name="user" size={25} color={'#136FAF'} style={styles.Icon}
       />
     
      <TextInput 
      style={styles.input}
      keyboardType="email-address"
      placeholder={'Email'}
      placeholderTextColor={'#136FAF'}
      underlineColorAndroid='transparent'
      value={email}
      onChangeText={(text)=>setEmail(text)}
      onBlur={()=>EmailValidation()}
      />
   
    </View>
    <Text style={{color:'red',top:-40}}>{EmailError}</Text>


    </Form>


    <TouchableOpacity  style={styles.login}  onPress={() => passwordforgotten(props)}>
 <Text style={styles.textlog}>Valider</Text>
</TouchableOpacity>

</View>

</Card>
   </ImageBackground>
   </KeyboardAvoidingView>
   </View>
   </ScrollView>
 )}
const styles = StyleSheet.create({

    
  mycard:{

    height:300,
    width:350,
    shadowColor: "black",
      backgroundColor:"rgba(255, 255, 255, 0.4)",
     top:200,
      borderColor:'rgba(255, 255, 255, 0.4)',
      borderWidth:4,
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
   flex: 1,
   backgroundColor: 'lightblue', 
   alignItems: 'center',
   width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
   marginTop:75,
  
 },


 eyes: {
   position:'absolute',
   top: -40,
   right:37
 },
 login: {

   width: 330,
   height:45,
   borderRadius: 10,
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
export default LoginScreen;

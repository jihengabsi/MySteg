import React,{useState} from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,
   TextInput,Alert,
  TouchableOpacity, ScrollView,KeyboardAvoidingView} 
   from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import bgImage from '../../images/background.jpg';
import Logo from '../../images/stegLogo.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  // create a function that saves your data asyncronously
  
  export default  CreateUser = (props)=>{

  const [EmailError,setEmailError] = useState('')
  const [nameError,setnameError] = useState('')
  const [passError1,setpassError1] = useState('')
  const [passError,setpassError] = useState('')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [password1,setPassword1] = useState('')
  const picture="https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"


  const {navigate} = props.navigation;
  const sendCred = async(props)=>{
    if (password==password1){
        fetch("http://10.0.2.2:3000/signup",{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              "name":name,
              "email":email,
              "password":password,
              "phone":" ",
              "adress":" ",
              "picture":picture,
              "cin":""
            })
        })
        .then(res=>res.json())
        .then(async(data)=>{
          console.log(data)
          await AsyncStorage.setItem('token',data.token)
          Alert.alert(`${name} is saved successfuly`)
          navigate("loading1")
        })
      }
      else{
        Alert.alert("Ce ne sont pas les mêmes mots de passe!")
      }
      
       
  }
  const firstValidation=()=>{
    
    if(name==""){
     
        setnameError("Ce Champ est Obligatoire*")
    }else{
      let rjx=/^[a-zA-Z]+$/;
      let isVAlid=rjx.test(name)
      if(isVAlid){
        setnameError("")
     }else{
      setnameError("Nom non valide")
     }
     
    }
}
const EmailValidation=()=>{
    if(email==""){
        setEmailError("Ce Champ est Obligatoire*")
    }else{
      let rjx=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      let isVAlid=rjx.test(email)
      if(isVAlid){
        setEmailError("")
     }else{
      setEmailError("Email non valide")
     }
    }
}
const passValidation=()=>{
    if(password=="" ){
        setpassError("Ce Champ est Obligatoire*")
    }else{
      setpassError("")
    }
}
const passValidation1=()=>{
  if(password1=="" ){
      setpassError1("Ce Champ est Obligatoire*")
  }else{
    setpassError1("")
  }
}
  

  return (
    <ScrollView>
    <ImageBackground  source={bgImage}  style={styles.background}>
    <View style={styles.backContainer}>
   <KeyboardAvoidingView behavior="position">
    <View style={{marginTop:-150}}>
  <View style={styles.logocontainer}> 
    <Image source={Logo} style={styles.logo}/>
  </View>
  
  <View style={styles.bot}>
  <View style={styles.inputContainer}>
  <FontAwesome5 name="user" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
        style={[styles.input,
       ]}
            placeholder={'Nom et prénom'}
            autoCapitalize="none"
            onBlur={(text)=>firstValidation()}
            onChangeText={(text)=>setName(text)}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>
         <Text style={{color:'red',marginStart:30}}>{nameError}</Text>
    </View>
   
    <View style={styles.inputContainer}>
    <FontAwesome5 name="mail-bulk" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
         style={[styles.input,
          ]}
            placeholder={'Email'}
            autoCapitalize="none"
            onBlur={()=>EmailValidation()}
            onChangeText={(text)=>setEmail(text)}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            keyboardType="email-address"
            underlineColorAndroid='transparent'
        ></TextInput>
        <Text style={{color:'red',marginStart:30}}>{EmailError}</Text>
    </View>

    <View style={styles.inputContainer}>
    <FontAwesome5 name="lock" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
           style={[styles.input,
           ]}
            placeholder={'Mot de passe'}
            autoCapitalize="none"
            onBlur={()=>passValidation()}
            onChangeText={(text)=>setPassword(text)}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>
         <Text style={{color:'red',marginStart:30}}>{passError}</Text>
    </View>
    <View style={styles.inputContainer}>
    <FontAwesome5 name="lock" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
           style={[styles.input,
           ]}
            placeholder={'Confirmez le mot de passe'}
            autoCapitalize="none"
            onBlur={()=>passValidation1()}
            onChangeText={(text)=>setPassword1(text)}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>
         <Text style={{color:'red',marginStart:30}}>{passError1}</Text>
    </View>



    <TouchableOpacity
    style={styles.login} 
    onPress onPress={() =>sendCred(props)}>
        <Text style={styles.textlog}>SignUp</Text>
    </TouchableOpacity>

           
    <View style={styles.signIn}>
    <Text style={{color:'white',fontSize:15}}>Déjà Inscrit ? </Text>
                <Text  style={{color:'lightblue',fontWeight:'bold',fontSize:15}} 
                 onPress={() => props.navigation.navigate("signin")}
                >Connectez vous</Text>
           </View>
            </View>
            
</View>
</KeyboardAvoidingView>
</View>
   </ImageBackground>
    </ScrollView>
  
  )
  }
  



  const styles = StyleSheet.create({
    backContainer: {
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      flex: 1,
      width:  wp('100%'),
      height:  hp('100%'),
      backgroundColor: 'rgba(47,163,218,0.4)'
    },
    signUp:{
      flexDirection: 'row',
     marginStart:-90,
    },
    background: {
      flex: 1,
      width:  wp('100%'),
      height:  hp('100%'),
    },
  
   logocontainer: {
  alignItems:'center',
  
   },
   
  
   input: {
     width: 330,
     height:45,
     borderRadius: 45,
     fontSize:16,
     paddingLeft:45,
     backgroundColor: 'rgba(0,0,0,0.35)',
     color:'rgba(255,255,255,0.7)',
     marginHorizontal:25,
     
     
   },
   Icon: {
     position:'absolute',
     top: 8,
     left:37
   },
   inputContainer: {
     marginTop:10,
    
   },
 
   eyes: {
     position:'absolute',
     top: 8,
     right:37
   },
   login: {
     width: 330,
     height:45,
     borderRadius: 45,
    backgroundColor: '#136FAF',
    justifyContent: 'center',
    marginTop:20
   },
  
   textlog: {
  color: 'rgba(255,255,255,0.7)',
  textAlign: 'center',
  fontSize: 20
   },
   bot: {
    marginTop:-80,
     alignItems:'center',
     
   },
   error1:{
       borderWidth:3,
       borderColor:'red'
   },
   signIn:{
    flexDirection: 'row',
   //justifyContent:'center',
    marginTop:20
  },
  });
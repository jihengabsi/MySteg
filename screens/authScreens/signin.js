import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect,useState}from 'react';
import { StyleSheet,Dimensions, KeyboardAvoidingView,Text, View ,ImageBackground,Image,
   TextInput,Alert,
  TouchableOpacity,ScrollView} 
   from 'react-native';
   import bgImage from '../../images/background.jpg';
import Logo from '../../images/stegLogo.png'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: '547369259874-vdu2osgnk46jvspi6jh7fehotdp2hamv.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess:true,

});

import AsyncStorage from '@react-native-community/async-storage';
import { Form } from 'react-native-form-auto-next';



const LoginScreen = (props) => {
  const [EmailError,setEmailError] = useState('')
  const [passError,setpassError] = useState('')
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [showPass1,setShowPass]= useState(true);
  const [press,setPress]= useState(false);  

  const showPass = () => {
    if(press == false){
      setShowPass(false)
      setPress(true)
    
    }else{
      setShowPass(true)
      setPress(false)
      
    }
  };
  const passValidation=()=>{
    if(password=="" ){
        setpassError("Ce Champ est Obligatoire*")
    }else{
      setpassError("")
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
  const _signIn=async()=>{

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if(userInfo){
        const name1=userInfo.user.name;
        const email=userInfo.user.email;
        const pic1=userInfo.user.photo;
        await AsyncStorage.setItem('ref',"null")
        await AsyncStorage.setItem('ref1',"null")
        await AsyncStorage.setItem('email',userInfo.user.email)
        Alert.alert("Bonjour "+userInfo.user.name,
        "Bienvenue!",
        [
          
          {
            text: "Ok",
            onPress: () => props.navigation.replace("loading", {email,name1,pic1}),
            style: "cancel"
          },
        
        ],
        { cancelable: false }
      );
      }
 
    };


    const sendCred = async (props)=>{
  
      fetch("http://10.0.2.2:3000/signin",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
         "email":email,
         "password":password
       })
      })
      .then(res=>res.json())
      .then(async (data)=>{
        try {
               await AsyncStorage.setItem('token',data.token)
               await AsyncStorage.setItem('ref',"null")
               await AsyncStorage.setItem('email',email)
               Alert.alert(`Bienvenu`)
               props.navigation.replace("loading1")
        }catch (e) {
         Alert.alert("Changer le mot de passe ou email!")
        }
             }
      )
      
   }
 

  return (
    <ScrollView scrollEventThrottle={16} >
       <View style={{ flex: 1 }}>
        <KeyboardAvoidingView>
    <ImageBackground  source={bgImage}  style={styles.background}>
    <View style={styles.backContainer}>
      <Image source={Logo} style={{marginTop:-50}}/>


    <Form>
    <View style={styles.inputContainer}>
    
    <FontAwesome5 name="user" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
       />
     
      <TextInput 
      style={styles.input}
      keyboardType="email-address"
      placeholder={'email'}
      onBlur={()=>EmailValidation()}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'
      value={email}
      onChangeText={(text)=>setEmail(text)}
      
      />
      <Text style={{color:'red',marginStart:30}}>{EmailError}</Text>
    </View>


    <View style={styles.inputContainer}>
    <FontAwesome5 name="lock" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
       />
      <TextInput 
      style={styles.input}
      placeholder={'Mot de passe'}
      secureTextEntry={showPass1}
      onBlur={()=>passValidation()}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'
      value={password}
      onChangeText={(text)=>{setPassword(text)}}
      />
      <Text style={{color:'red',marginStart:30}}>{passError}</Text>
                 
<TouchableOpacity  style={styles.eyes}
onPress ={() => showPass()}>
 <FontAwesome5 name={press == false ?'eye' : 'eye-slash'} 
 size={25} 
 color={'rgba(255,255,255,0.6)' } 
 />
</TouchableOpacity>
      </View>



    </Form>


    <TouchableOpacity  style={styles.login}  onPress={() => sendCred(props)}>
 <Text style={styles.textlog}>Login</Text>
</TouchableOpacity>

 <Text style={{shadowRadius:22,shadowColor:'black',color:'white',fontSize:23,alignContent:"center"}}>Ou</Text>

<GoogleSigninButton
    style={{ width: 250, height: 45,borderBottomEndRadius:45 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={_signIn}
   
    />
    <View style={styles.signUp}>
    <TouchableOpacity  onPress={() => props.navigation.navigate("forgotPassword")}> 
      <Text style={{color:'lightblue',fontWeight:'bold',fontSize:15}} >Mot de passe oublié ? </Text>
      </TouchableOpacity>
</View>
<View style={styles.signUp}>

  <Text style={{color:'white',fontSize:15,alignContent:"center"}}>Vous n'avez pas de compte ? </Text>
  <TouchableOpacity  onPress={() => props.navigation.navigate("signup")}> 
  <Text style={{color:'lightblue',fontWeight:'bold',fontSize:15}} >Créer en un!</Text>
</TouchableOpacity>

</View>

</View>
   </ImageBackground>
   </KeyboardAvoidingView>
   </View>
   </ScrollView>
 )}
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
    flex:1,
    flexDirection: 'row',

   justifyContent:'center',
  },
  background: {
    flex: 1,
    width:  wp('100%'),
    height:  hp('100%'),
  },
 logocontainer: {
   flex:1,
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
  marginTop:10,
   position:'absolute',
   left:37
 },
 inputContainer: {
  marginTop:10,
  
 },

 eyes: {
  marginTop:10,
   position:'absolute',
   right:40,
  
 },
 login: {

   width: 330,
   height:45,
   borderRadius: 45,
  backgroundColor: '#136FAF',
  justifyContent: 'center',
 },

 textlog: {
  
color: 'rgba(255,255,255,0.7)',
textAlign: 'center',
fontSize: 20
 },
 bot: {
   flex:1,
   alignItems:'center',

   
 }
})
export default LoginScreen;

import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect,useState}from 'react';
import { StyleSheet,Dimensions, KeyboardAvoidingView,Text, View ,ImageBackground,
   TextInput,Alert,
  TouchableOpacity,ScrollView} 
   from 'react-native';

import {Card} from 'react-native-paper'

import { Form } from 'react-native-form-auto-next';
import AsyncStorage from '@react-native-community/async-storage';


const LoginScreen =(props) => {
  const [passError,setpassError] = useState('')
  const [code,setCode] = useState('');
  const verifCode=async(props)=>{
   const codeV=await AsyncStorage.getItem("code");
   if(code==codeV){
    props.navigation.replace("updatePwd1")
   }
   else{
     Alert.alert("c'est incorrect, veuillez réessayer")
   }
  }
  const passValidation=()=>{
    if(code=="" ){
        setpassError("Ce Champ est Obligatoire*")
    }else{
      setpassError("")
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
    <Text style={styles.textlog1}>Saisi le code de validation:</Text>
      </View>
    <View style={styles.inputContainer}>
    <FontAwesome5 name="lock" size={25} color={'#136FAF' } style={styles.Icon}
       />
     
      <TextInput 
      onBlur={()=>passValidation()}
      style={styles.input}
      keyboardType="number-pad"
      placeholder={'code'}
      placeholderTextColor={'r#136FAF'}
      underlineColorAndroid='transparent'
      onChangeText={(text)=>setCode(text)}
      
      />
    </View>
    <Text style={{color:'red',marginStart:30}}>{passError}</Text>


    </Form>


    <TouchableOpacity  style={styles.login}  onPress={() => verifCode(props)} >
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

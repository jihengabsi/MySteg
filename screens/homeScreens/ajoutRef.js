import React, { useEffect,useState,Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, ImageBackground,
  Dimensions, StyleSheet, Alert
} from 'react-native';
import bgImage from '../../images/background.jpg'
import Logo from '../../images/stegLogo.png'
import AsyncStorage from '@react-native-community/async-storage';
import {strings} from './localization'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default ajoutRef = ({navigation}) => {
    
    const [reff,setReff] = useState('');
    const [reffError,setReffError] = useState('');
    const [textInputHolder,setTextInputHolder] = useState(0);
    const [code,setCode] = useState('');

  const codeGeneretor=()=>{
    setCode(Math.floor(Math.random() * 1000000) + 1)
  }
  useEffect(()=>{
    codeGeneretor()
  },[])
    

  const sendCred = async (props)=>{
   var temp = code;
    if (textInputHolder == temp) {
      Alert.alert("Vous avez ajouté une nouvelle référence:"+reff);
    await AsyncStorage.setItem('ref',reff) 
     navigation.replace("accueil")
   }
   else {
      Alert.alert("c'est incorrect, veuillez réessayer");
  }
   codeGeneretor();
  
 }

  const reffValidator = () =>{
    if (reff == "") {
      setReffError( "Remplir le champs SVP" );
    }

    else {
        setReffError( "" );
    }
  }

    return (
      <ImageBackground source={bgImage} style={styles.container}>

        <View style={styles.backContainer}>
          <View style={styles.top} >
            <Image source={Logo} style={styles.logo} />
          </View>
          <KeyboardAvoidingView behavior="position">
          <View style={styles.partie2}>
            <TextInput
              style={styles.input}
              onBlur={() => reffValidator()}
              placeholder={strings.refPlacholder}
              placeholderTextColor={'rgba(47,163,218,0.5)'}
              underlineColorAndroid='transparent'
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(text)=>setReff(text)}
              
            />
          </View>
          <Text style={{ color: 'red', marginStart: 50 }} >{reffError}</Text>
          <View style={styles.partie4}>
           <Text  style={styles.code}>{code}</Text>

          </View>

          <View style={styles.partie3}>

            <TextInput
              style={styles.input1}
              placeholder={strings.refPlacholder1}
              placeholderTextColor={'rgba(47,163,218,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={(data) => setTextInputHolder(data)}
              keyboardType="numeric"
            />
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <TouchableOpacity style={styles.login} onPress={sendCred}>
              <Text style={styles.textlog}>{strings.refbtn_add}</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView> 
        </View>
       
      </ImageBackground >
   )}
  


const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: null,
    height: null
  },
  backContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218,0.25)',

  },
  top: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  partie2: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50
  },
  input: {
    width: wp('85%'),
    borderRadius: 45,
    height: 45,
    fontSize: 16,
    paddingLeft: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#136FAF',
    marginLeft:30,
    alignItems:"center",


  },
  input1: {
    width: wp('85%'),
    borderRadius: 45,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#136FAF',
    marginLeft:30,
    alignItems:"center",
    marginTop:20

  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 15,
    color: '#136FAF',

  },
  partie3: {
    
    flexDirection: 'row',
    //marginTop:15
  },
  partie4: {
   alignSelf:'center',
    marginTop: 50,
    marginStart: -60
  },
  code:{
   borderColor:'#136FAF',
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#136FAF',
    width: 100,
    borderRadius: 10,
    height: 50,
    fontSize: 20,
    paddingTop:10,
    paddingLeft: 22,
  },
  
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 3,
    color: '#136FAF',
  },
  login: {
    width: 330,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#136FAF',
    justifyContent: 'center',
    //marginTop:20
  },
  textlog: {
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    fontSize: 20
  },

  error: {
    borderWidth: 3,
    borderColor: 'red'
  }


})
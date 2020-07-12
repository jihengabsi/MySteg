
import React,{useEffect} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  View,
  StyleSheet,Alert
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const LoadingScreen = ({navigation,route}) => {
    const email = route.params.email
    const name = route.params.name1
    const password="password"
    const phone = "phone"
    const adress = "adresse"
    const cin="cin"
    const picture=route.params.pic1
 
    const detectLogin1 = async()=>{
    
      fetch("http://10.0.2.2:3000/signin1",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
         "email":email
       })
      })
      .then(res=>res.json())
      .then(async (data)=>{
        try {
          await AsyncStorage.setItem('token',data.token)
          navigation.replace("accueil")
        } catch (error) {
          Alert.alert(error)
        }
             
             }
      )
     
}
    
  
    const detectLogin = async()=>{
    
        fetch("http://10.0.2.2:3000/signupp",{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              "cin":cin,
              "name":name,
              "email":email,
              "password":password,
              "phone":phone,
              "adress":adress,
              "picture":picture
              
            })
        })
        .then(res=>res.json())
        .then(async(data)=>{
          try {
            console.log(data)
            await AsyncStorage.setItem('token',data.token)
            navigation.replace("accueil")
          } catch (error) {
            detectLogin1()
          }
         
          
        })
       
  }
  useEffect(()=>{
   detectLogin()
  },[])

  return (

       <View style={styles.container}> 
    <ActivityIndicator color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator} />
   </View>

  );
};


const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
 },
 activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
})


export default LoadingScreen;
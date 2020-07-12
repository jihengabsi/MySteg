import React, {useEffect,useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,Alert
} from 'react-native';


import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const LoadingScreen = ({navigation,route}) => {
  const detectLogin1 = async()=>{
    
    const toggleEcc =await AsyncStorage.getItem("toggleEcc");
    const toggleGaz=await AsyncStorage.getItem("toggleGaz");
    const PC= await AsyncStorage.getItem("PC")
    const usage= await AsyncStorage.getItem("usage")
  
    const puiElec= await AsyncStorage.getItem("puiElec")
    const puiGaz= await AsyncStorage.getItem("puiGaz")
  
    const textElec= await AsyncStorage.getItem("textElec")
    const InputGaz= await AsyncStorage.getItem("InputGaz")
  
    function consoG(){
      if(toggleGaz=='true'){
        return InputGaz;
      }
      else{
    return 0;
      }
     }
     function consoE(){
      if(toggleEcc=='true'){
        return textElec;
      }
      else{
    return 0;
      }
    }

function calculE(){
  
  const RFe=(PC*parseFloat(puiElec)*0.700);
  if(toggleEcc=='true'){
    if(50>=textElec){
      const PuE=0.101;
      return Number(((PuE*textElec)+RFe).toFixed(3));
     }
     else if(100>=textElec&&textElec>50){
      const PuE=0.101;
      return Number(((PuE*textElec)+RFe).toFixed(3));
     }
     else if(1000>=textElec&&textElec>100){
      const PuE=0.181;
      return Number(((PuE*textElec)+RFe).toFixed(3));
     }
     else if(textElec>1000){
      const PuE=0.62;
      return Number(((PuE*textElec)+RFe).toFixed(3));
    }
  }
  else if(usage=='2'&&toggleEcc=='true'){
    if(100>=textElec){
      const PuE=0.109;
      return Number(((PuE*textElec)+RFe).toFixed(3));
     }
     else if(800>=textElec&&textElec>100){
      const PuE=0.200
      return Number(((PuE*textElec)+RFe).toFixed(3));
     }
     else if(1000>=textElec&&textElec>800){
      const PuE=0.245;
      return Number(((PuE*textElec)+RFe).toFixed(3));
     }
     else if(textElec>1000){
      const PuE=0.396;
      return Number(((PuE*textElec)+RFe).toFixed(3));
    }
  }
  else{
    return 0;
  }

  
}

function calculG(){
      const RFg=(PC*parseFloat(puiGaz)*0.750);
      if(usage=='1'&&toggleGaz=='true'){
        if(30>=InputGaz){
          const PuG=0.231;
          return Number(((PuG*InputGaz)+RFg).toFixed(3));
          }
          else if(60>=InputGaz&&InputGaz>30){
            const PuG=0.341;
            return Number(((PuG*InputGaz)+RFg).toFixed(3));
          }
          else if(150>=InputGaz&&InputGaz>60){
            const PuG=0.447;
            return Number(((PuG*InputGaz)+RFg).toFixed(3));
      
          }
          else if(InputGaz>150) {
          const PuG=0.557;
          return Number(((PuG*InputGaz)+RFg).toFixed(3));
          }
      }
      else if(usage=='2'&&toggleGaz=='true'){
        if(60>=InputGaz){
          const PuG=0.231;
          return Number(((PuG*InputGaz)+RFg).toFixed(3));
          }
          else if(250>=InputGaz&&InputGaz>60){
            const PuG=0.341;
            return Number(((PuG*InputGaz)+RFg).toFixed(3));
          }
          else if(600>=InputGaz&&InputGaz>250){
            const PuG=0.447;
            return Number(((PuG*InputGaz)+RFg).toFixed(3));
      
          }
          else if(InputGaz>600){
            const PuG=0.629;
            return Number(((PuG*InputGaz)+RFg).toFixed(3));
          }
      }
      else{
        return 0;
      }

}

  function calcul(){
    
      if(toggleEcc=='true'&&toggleGaz=='false'){
        return Number((calculE()+(calculE()*0.14)).toFixed(3));
            }
      else if(toggleEcc=='false'&&toggleGaz=='true'){
        return Number((calculG()+(calculG()*0.19)).toFixed(3));
      }
      else if(toggleEcc=='true'&&toggleGaz=='true'){
        return Number((calculE()+calculG()+((calculE()+calculG())*0.19)).toFixed(3));
      }

    }
  await AsyncStorage.setItem('montantE',JSON.stringify(Number((calculE()+(calculE()*0.14)).toFixed(3))))
  await AsyncStorage.setItem('montantG',JSON.stringify(Number((calculG()+(calculG()*0.19)).toFixed(3))))
  await AsyncStorage.setItem('montant',JSON.stringify(calcul()))
  const email=(await (AsyncStorage.getItem('email'))).toString()
  const date = moment().locale('fr-ca').utcOffset('+01').format('LLL');
  fetch("http://10.0.2.2:3000/newFS",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "consoElec":consoE(),
        "consoGaz":consoG(),
        "nbMois":PC,
        "montantElec":Number((calculE()+(calculE()*0.14)).toFixed(3)),
        "montantGaz":Number((calculG()+(calculG()*0.19)).toFixed(3)),
        "montant":calcul(),
        "date":date
      })
  })
  .then(res=>res.json())
  .then(async(data)=>{
    try {
      console.log(data)
      navigation.navigate("simulerFac2")
    } catch (error) {
      Alert.alert("someting went wrong")
    }
   
    
  })
 
}
useEffect(()=>{
detectLogin1()
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
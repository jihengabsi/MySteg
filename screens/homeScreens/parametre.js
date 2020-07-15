import React, {useEffect,useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button,
  View, Text, TouchableOpacity, Animated, ImageBackground,
  ScrollView, Dimensions, StyleSheet,Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import bgImage from '../../images/background.jpg';
import IconBadge from 'react-native-icon-badge';
import {strings} from './localization'
import Flag from 'react-native-flags';
import {Card,FAB, ActivityIndicator} from 'react-native-paper'
  
export default  accueil =   ({navigation}) => {


  const [arab, setArabe] = useState("");
  const [french, setFrancais] = useState("");
  const [ang, setEnglais] = useState("");

  

 arabe = () => {
  strings.setLanguage('ar');
  setArabe();
  navigation.replace("accueil")
}


 francais=()=>{
  strings.setLanguage('fr');
  setFrancais();
  navigation.replace("accueil")

}

 anglais=()=>{
  strings.setLanguage('en');
  setEnglais();
  navigation.replace("accueil")

}

  



  
    return (
        <ImageBackground source={bgImage} style={styles.container1}>
        <View style={styles.backContainer}>
    <Text style={{color:'white',alignSelf:'center',top:100,fontSize:20,fontStyle:"italic",fontWeight:"bold"}}>{strings.parlng}</Text>
  <View style={{alignItems:'center',top:120}}>
 
<Card style={{width:200,marginHorizontal:20,height:250,alignSelf:'center',backgroundColor:'rgba(255,255,255,0.5)'}}>
<View style={styles.cardView}>
  
  <TouchableOpacity onPress={()=>arabe()}  >
    <Flag style={styles.flag}
    code="TN"/>
    </TouchableOpacity>  
    <View style={{ borderBottomColor: 'lightgrey',borderBottomWidth: 1,width:300}}/>
        <TouchableOpacity onPress={()=>francais()} >
    <Flag style={styles.flag}
    code="FR"/>
    </TouchableOpacity>   
    <View style={{ borderBottomColor: 'lightgrey',borderBottomWidth: 1,width:300}}/>

   <TouchableOpacity onPress={()=>anglais()} >
    <Flag  style={styles.flag}
    code="US" />
    </TouchableOpacity> 



</View>

</Card>
      
     
     </View>
    </View>
</ImageBackground>
     
    );
  }



 
  const styles = StyleSheet.create(
    {   mycard:{
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      borderColor:"#0065bd",
      borderWidth:4,
      elevation: 15,
        margin:5,
        backgroundColor:"white",
        borderRadius:14
       
    },
    cardView:{
         flexDirection:"column",
         padding:4,
         alignItems:"center",
         backgroundColor:"rgba(255,255,255,0.5)"
    },
      container1: {
          flex: 1,
          width: null,
          height: null
          },
          backContainer: {
          flex: 1,
          backgroundColor: 'rgba(47,163,218,0.25)',
          
          },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
      },
      touchableButton: {
        width: '80%',
        padding: 10,
        backgroundColor: '#0040FF',
        borderRadius:25,
        marginTop:-120
  
  
      },
      TextStyle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
      touchableButton1: {
          width: '80%',
          padding: 10,
          backgroundColor: '#0B610B',
          borderRadius:25
        },
  flag:{
    borderRadius:300,
      width:90,
      height:80
  }
  
    });

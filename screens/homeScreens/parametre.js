import React, {useEffect,useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button,
  View, Text, TouchableOpacity, Animated, ImageBackground,
  ScrollView, Dimensions, StyleSheet,Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import bgImage from '../../images/background.jpg';
//import IconBadge from 'react-native-icon-badge';

import Flag from 'react-native-flags';

  
export default  parametre =   ({navigation}) => {


  const [arab, setArabe] = useState("");
  const [french, setFrancais] = useState("");
  const [ang, setEnglais] = useState("");

  

 arabe = () => {
  strings.setLanguage('ar');
  setArabe();
  navigation.push('accueil')
}


 francais=()=>{
  strings.setLanguage('fr');
  setFrancais();
}

 anglais=()=>{
  strings.setLanguage('en');
  setEnglais();
}



  



  
    return (
     
   
<View>
        <TouchableOpacity onPress={()=>arabe()}  >
    <Flag  style={styles.flag}
    code="TN"/>
    </TouchableOpacity>  
   
        <TouchableOpacity onPress={()=>francais()} >
    <Flag style={styles.flag}
    code="FR"/>
    </TouchableOpacity>   


   <TouchableOpacity onPress={()=>anglais()} >
    <Flag 
    code="US" style={styles.flag} />
    </TouchableOpacity> 


    </View>
    )
}

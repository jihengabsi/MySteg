import React, {useEffect,useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button,
  View, Text, TouchableOpacity, Animated, ImageBackground,
  ScrollView, Dimensions, StyleSheet,Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import bgImage from '../../images/background.jpg';
import Modal from 'react-native-modal';
import {Card} from 'react-native-paper'
import {strings} from './localization'


  
export default  historique =   ({navigation}) => {
  const [demC,setDemC]=useState("0")
  const [rec,setRec]=useState("0")
  const [fs,setFs]=useState("0")
  const Boiler = async ()=>{
    const email= await AsyncStorage.getItem("email")
        fetch('http://10.0.2.2:3000/countDem',{
          method:"POST",
        headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            email:email
          })
      })
          .then(res=>res.json())
          .then(async(data)=>{
            try {
           setDemC(data.count)
          console.log(data)
        
            }
            catch (e) {
              Alert.alert("erreur ")
             }
          })
          }
          const Boiler1 = async ()=>{
            const email= await AsyncStorage.getItem("email")
                fetch('http://10.0.2.2:3000/countRec',{
                  method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify({
                    email:email
                  })
              })
                  .then(res=>res.json())
                  .then(async(data)=>{
                    try {
                      setRec(data.count)
                  console.log(data)
                
                    }
                    catch (e) {
                      Alert.alert("erreur ")
                     }
                  })
                  }
            const Boiler2 = async ()=>{
                    const email= await AsyncStorage.getItem("email")
                        fetch('http://10.0.2.2:3000/countFs',{
                          method:"POST",
                        headers:{
                            'Content-Type': 'application/json'
                          },
                          body:JSON.stringify({
                            email:email
                          })
                      })
                          .then(res=>res.json())
                          .then(async(data)=>{
                            try {
                              setFs(data.count)
                          console.log(data)
                        
                            }
                            catch (e) {
                              Alert.alert("erreur ")
                             }
                          })
                          }
   
   
  useEffect(()=>{
      Boiler()
      Boiler1()
      Boiler2()
    },[])
  
    return (
     
        <ImageBackground  source={bgImage}  style={styles.container}>
  
          <View style={styles.backContainer}>
            <Card style={styles.mycard} onPress={()=>navigation.navigate("demandeE")}>
            <View style={styles.cardView}>
            <FontAwesome5 name="wpforms" style={{paddingVertical:10}}  size={80} color="lightblue" />
            <Text style={styles.police}>{strings.histDemanEnv}</Text>
            <Text style={styles.police}>{demC}</Text>
            </View>

            </Card>
            <Card style={styles.mycard} onPress={()=>navigation.navigate("reclamationE")}> 
            <View style={styles.cardView}>
            <FontAwesome5 name="exclamation-circle" style={{paddingVertical:10}}  size={70} color="lightblue" />
            <Text style={styles.police}>{strings.histRecEnv}</Text>
    <Text style={styles.police}>{rec}</Text>
            </View>

            </Card>
            <Card style={styles.mycard} onPress={()=>navigation.navigate("fs")}>
            <View style={styles.cardView}>
            <FontAwesome5 name="money-check" style={{paddingVertical:10}}  size={70} color="lightblue" />
            <Text style={styles.police}>{strings.histFactSim}</Text>
            <Text style={styles.police}>{fs}</Text>
            </View>

            </Card>

</View>
</ImageBackground>
    )};
    
    

    
  const theme = {
    colors:{
        primary:"#006aff"
    }
  }
  
const styles = StyleSheet.create({
   police:{
    
    marginHorizontal:-10,
    fontSize: 16, 
    color: 'black',
     fontWeight: 'bold',
      marginTop: 10, 
 
   },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  backContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218,0.4)'
  },
  mycard:{
    width:180,
    height:180,
    backgroundColor:'rgba(255,255,255,1)',
    margin:20,
    borderRadius:25, 
    alignSelf:'center',
    padding:5,
    
     
  },
  cardView:{
    position:"absolute",
       justifyContent:'center',
       alignSelf:'center',
       alignItems:'center',
       flexDirection:"column",
       padding:4
  },
})

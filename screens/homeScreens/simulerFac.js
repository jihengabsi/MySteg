import React, {useEffect,useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Card,FAB, ActivityIndicator} from 'react-native-paper'
import {Image,
  View, Text, TouchableOpacity, TextInput, ImageBackground,
  ScrollView, KeyboardAvoidingView, StyleSheet,Alert,FlatList
} from 'react-native';
import Logo from '../../images/stegLogo.png'
import bgImage from '../../images/background.jpg'
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import { strings } from './localization';
export default  accueil =({navigation}) => {

  const [toggleEcc, setEcc] = useState(false);
  const [toggleGaz, setGaz] = useState(false);

  const [PC, setPC] = useState(1);
  const [usage, setUsage] = useState(1);

  const [puiElec, setPuiElec] = useState(0);
  const [puiGaz, setPuiGaz] = useState(0);

  const [textElec,setConsoElec] = useState(0);
  const [InputGaz,setConsoGaz] = useState(0);

const sendCred=async()=>{
  await AsyncStorage.setItem('toggleEcc',toggleEcc.toString())
  await AsyncStorage.setItem('toggleGaz',toggleGaz.toString())
  
  await AsyncStorage.setItem('PC',PC.toString())
  await AsyncStorage.setItem('usage',usage.toString())

  await AsyncStorage.setItem('puiElec',puiElec.toString())
  await AsyncStorage.setItem('puiGaz',puiGaz.toString())

  await AsyncStorage.setItem('textElec',textElec.toString())
  await AsyncStorage.setItem('InputGaz',InputGaz.toString())
  navigation.navigate("simulerFac1")
}

    return (
  

      <ImageBackground source={bgImage} style={styles.container}>
 <ScrollView scrollEventThrottle={16}>
      <View style={styles.backContainer}>
        <View style={styles.top} >
          <Image source={Logo} style={{top:-20}} />
        </View>
        <View style={styles.cardView1} >
        <Text style={{ fontSize: 18, color: 'black',top:-50 }}>{strings.period_cons}</Text> 
        <Picker
  selectedValue={PC}
  style={{height:40, width:150,left:10,top:-61,backgroundColor: 'rgba(255,255,255,0.5)',}}
  onValueChange={(itemValue, itemIndex) =>
    setPC(itemValue)
  }>
  <Picker.Item  label={strings.moisWehed} value="1" />
  <Picker.Item label={strings.moisWehed2} value="2" />
  <Picker.Item  label={strings.moisWehed4} value="4" />
  <Picker.Item label={strings.moisWehed6} value="6" />
  <Picker.Item  label={strings.moisWehed8} value="8" />
  <Picker.Item label={strings.moisWehed10} value="10" />
  <Picker.Item  label={strings.moisWehed12} value="12" />
  </Picker>
          </View>
          <View style={styles.cardView1} >
        <Text style={{ fontSize: 18, color: 'black',top:-50,width:217 }}>{strings.usage}</Text> 
        <Picker
  selectedValue={usage}
  style={{height:40, width:150,left:10,top:-61,backgroundColor: 'rgba(255,255,255,0.5)',}}
  onValueChange={(itemValue, itemIndex) =>
    setUsage(itemValue)
  }>
  <Picker.Item  label={strings.domestic} value="1" />
  <Picker.Item label={strings.nndomestic} value="2" />
  </Picker>
          </View>
        <View style={styles.cardView1} >
          <CheckBox
          style={{top:-50}}
    disabled={false}
    value={toggleEcc}
    onValueChange={() => toggleEcc ? setEcc(false) : setEcc(true)}
  />
     <Text style={{ fontSize: 18, color: 'black',top:-50 }}>{strings.compteurEclai}</Text> 
  </View>
        <Card style={styles.mycard}>
      <View style={styles.cardView}>
        
            <Text style={{ fontSize: 18, color: '#1e5565'}}>{strings.puisDebit}</Text>
            <Picker
  selectedValue={puiElec}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    setPuiElec(itemValue)
  }>
  <Picker.Item  label={strings.fils} value="1" />
  <Picker.Item label={strings.fils1} value="2" />
  <Picker.Item label={strings.fils2} value="3" />
  <Picker.Item label={strings.fils3} value="4" />
  <Picker.Item label={strings.fils4} value="5" />
  <Picker.Item label={strings.fils5} value="6" />
  <Picker.Item label={strings.fils6} value="7" />
  <Picker.Item label={strings.fils7} value="8" />
  <Picker.Item label={strings.fils8} value="9" />
  <Picker.Item label={strings.fils9} value="10" />
  <Picker.Item label={strings.fils10} value="11" />
  <Picker.Item label={strings.fils11} value="12" />
  <Picker.Item label={strings.fils12} value="3" />
  <Picker.Item label={strings.fils13} value="7" />
  <Picker.Item label={strings.fils14} value="10" />
  <Picker.Item label={strings.fils15} value="13" />
  <Picker.Item label={strings.fils16} value="20" />
  <Picker.Item label={strings.fils14} value="33" />
  <Picker.Item label={strings.fils18} value="42" />
  <Picker.Item label={strings.fils19} value="50" />
  <Picker.Item label={strings.fils20} value="53" />
  <Picker.Item label={strings.fils21} value="67" />
  <Picker.Item label={strings.fils22} value="83" />
  <Picker.Item label={strings.fils23} value="6" />
  <Picker.Item label={strings.fils24} value="32" />
  <Picker.Item label={strings.fils25} value="65" />
  <Picker.Item label={strings.fils26} value="0" />
</Picker>
            <Text style={{ fontSize: 18, color: '#1e5565'}}>{strings.consomation}</Text>   
          

<TextInput
            placeholder={strings.placeholderSim}
            style={styles.input1}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
            onChangeText={(text)=> setConsoElec(text)}
            keyboardType="numeric"
          />   
          
          </View>  
      
     </Card>
     <View style={styles.cardView1} >
          <CheckBox
           style={{top:-50}}
    disabled={false}
    value={toggleGaz}
    onValueChange={() => toggleGaz ? setGaz(false) : setGaz(true)}
  />
     <Text style={{ fontSize: 18, color: 'black' ,top:-50 }}>{strings.compteurGaz}</Text> 
  </View>
        <Card style={styles.mycard}>
      <View style={styles.cardView}>
        
            <Text style={{ fontSize: 18, color: '#1e5565'}}>{strings.puisDebit}</Text>
            <Picker
  selectedValue={puiGaz}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    setPuiGaz(itemValue)
  }>
  <Picker.Item label="5 m3" value="1" />
  <Picker.Item label="10 m3" value="2" />
  
</Picker>
            <Text style={{ fontSize: 18, color: '#1e5565'}}>{strings.consomation}</Text>   
          

<TextInput
            placeholder={strings.placeholderSim}
            style={styles.input1}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
            onChangeText={(text) => setConsoGaz(text)}
            keyboardType="numeric"
          />   
          </View>  
      
     </Card>
     
     <View style={{ marginLeft:130,width:200, marginTop: -80 }}>
            <TouchableOpacity style={styles.login} onPress={sendCred}>
              <Text style={styles.textlog}>{strings.btSimuler}</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    </ImageBackground >

    )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: null,
    height: null,
  },
  backContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218,0.25)',
    top:-50
  },
  top: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  partie2: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 60,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 15,
    color: '#136FAF',
  },
  partie3: {
    flexDirection: 'row',
    marginTop:15
  },
  partie4: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginStart: 20
  },
  input1: {
    width: 250,
    height:45,
    borderRadius: 2,
    fontSize:16,
    backgroundColor: 'rgba(255,255,255,0.7)',
    color:'black',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 3,
    color: '#136FAF',
  },
  login: {
    width: 150,
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


  mycard:{
    top:-90,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderColor:"white",
    borderWidth:4,
    elevation: 15,
      margin:5,
      backgroundColor:"white",
      borderRadius:14
     
  },
  cardView:{
       flexDirection:"column",
       padding:6,
       margin:5,
   
  },
  cardView1:{
    top:-40,
    padding:6,
    left:20,
    flexDirection:"row",
},
cardView2:{
  flexDirection:"column",
  
},
  text:{
      fontSize:18,
  },
  fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    modalView:{
      flex:1,
      position:"absolute",
      bottom:300,
      left:45,
      width:300,
      height:206,
      borderRadius: 10,
      backgroundColor:"white"
  
  },
  modalButtonView:{
    padding:10,
    flexDirection:"row",
    justifyContent:"space-around",
   
    
  },

})
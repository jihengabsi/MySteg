import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,
   KeyboardAvoidingView, Image, 
  ImageBackground,Dimensions, StyleSheet, Alert, ListView} from 'react-native';
import Textarea from 'react-native-textarea';
import bgImage from '../../images/steg9.jpeg'
import Logo from '../../images/stegLogo.png'
import {Picker} from '@react-native-community/picker';
//import {strings} from './localization'
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import {strings} from './localization'

import AsyncStorage from '@react-native-community/async-storage';
const sendMessage = ({navigation})=>{

const [messageBranch,setMessageBranch] = useState('vide')
const [payerBranch,setPayerBranch] = useState('Tunis ville')
const [typeBranch,setTypeBranch] = useState('Nouveau Branchement')



const saveRec=async()=> {
const email=(await (AsyncStorage.getItem('email'))).toString()
const date = moment()
      .locale('fr-ca')
      .utcOffset('+01')
      .format('LLL');
fetch("http://10.0.2.2:3000/envoyer-Demande",{
method:"POST",
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({
    messageBranch,
    payerBranch,
    typeBranch,
    email,
    date
})
})
.then(res=>res.json())
.then(async(data)=>{
  try {
console.log(data)
Alert.alert(`Votre Demande a été envoyée avec succées`)
navigation.replace("accueil")
  }
  catch (e) {
    Alert.alert("Remplissez les champs s'il vous plais! ")
   }
})
}
     return(
      
        <ImageBackground source={bgImage} style={styles.container}>

        <View style={styles.backContainer}>
          <View style={styles.top} >
            <Image source={Logo} style={styles.logo} />
          </View>
          <ScrollView>
          <KeyboardAvoidingView>
          <View style={styles.partie2}>
<Text style={{color:'#136FAF',fontWeight:'bold',fontSize:15,marginStart:20}}>{strings.demandeType}</Text>
</View>


<View style={{backgroundColor:'rgba(255,255,255,0.1)'
}}>

<Picker
               selectedValue={typeBranch}
             onValueChange={(itemValue, itemIndex) => setTypeBranch(itemValue)}
          
            style={{
              placeholder: {color: '#136FAF'},
              padding:10
            }}
  
        >
          <Picker.Item  label={strings.demandLabel1} value= 'Nouveau Branchement' />
          <Picker.Item  label={strings.demandLabel2}  value= 'Remplacer ou Deplacer Compteur' />
    
        </Picker>


        </View>
  
        <View>
<Text>{`\n`}</Text>
</View>

<View style={{backgroundColor:'rgba(255,255,255,0.1)'
}}>

<Picker
             selectedValue={payerBranch}
            onValueChange={(itemValue, itemIndex) => setPayerBranch(itemValue)}
            style={{
              placeholder: {color: '#136FAF'},
              padding:10
            }}
        >
                <Picker.Item label= 'Tunis ville' value= 'Tunis ville' />
                <Picker.Item label= 'Nabeul' value= 'Nabeul' />
                <Picker.Item  label= 'Ariana' value= 'Ariana' />
                <Picker.Item  label= 'Bardo' value= 'Bardo' />
                <Picker.Item  label= 'Ben guerden' value= 'Ben guerden' />
                <Picker.Item  label= 'Bizert ' value= 'Bizert' />
                <Picker.Item  label= 'Djerba' value= 'Djerba' />
                <Picker.Item  label= 'Eljam' value= 'Eljam' />
                <Picker.Item label= 'ElKef' value= 'ElKef' />
                <Picker.Item  label= 'ElKram' value= 'Eljam' />
                <Picker.Item  label= 'Elmanzah' value= 'Elmanzah' />
                  <Picker.Item  label= 'Elzahra' value= 'Elzahra' />
                  <Picker.Item  label= 'Gabes' value= 'Gabes' />
                  <Picker.Item  label= 'Gabsa' value= 'Gabsa' />
                  <Picker.Item  label= 'Hammamet' value= 'Hammamet' />
                  <Picker.Item  label= 'Jandouba' value= 'Jandouba' />
                  <Picker.Item  label= 'Kairouan' value= 'Kairouan' />
                  <Picker.Item  label= 'Kairouan Nord' value= 'Kairouan Nord' />
                  <Picker.Item  label= 'Kasserin' value= 'Kasserin' />
                  <Picker.Item  label= 'Kebili' value= 'Eljam' />
                  <Picker.Item  label= 'Mahdia' value= 'Mahdia' />
                  <Picker.Item  label= 'Mahres' value= 'Mahres' />
                  <Picker.Item  label= 'Medenin' value= 'Medenin' />
                  <Picker.Item  label= 'Manouba' value= 'Manouba' />
                  <Picker.Item  label= 'Meknessi' value= 'Eljam' />
                  <Picker.Item  label= 'Metlaoui' value= 'Metlaoui' />
                  <Picker.Item  label= 'Ml Temimi' value= 'Ml Temimi' />
                  <Picker.Item  label= 'Ml Bou zalfa' value= 'Ml Bou zalfa' />
                  <Picker.Item  label= 'Ml Bourguiba' value= 'Ml Bourguiba' />
                  <Picker.Item  label= 'Moknin' value= 'Moknin' />
                  <Picker.Item  label= 'Monastir' value= 'Monastir' />
                  <Picker.Item  label= 'Mourouj' value= 'Mourouj' />
                  <Picker.Item  label= 'Sfax Nord' value= 'Sfax Nord' />
                  <Picker.Item  label= 'Sfax Sud' value= 'Sfax Sud' />
                  <Picker.Item  label= 'Sfax Ville' value= 'Sfax Ville'  />
                  <Picker.Item  label= 'Sidi Bouzid' value= 'Sidi Bouzid' />
                  <Picker.Item  label= 'Siliana' value= 'Siliana' />
                  <Picker.Item  label= 'Soussa Nord' value= 'Soussa Nord' />
                  <Picker.Item  label= 'Soussa ville' value= 'Soussa ville' />
                  <Picker.Item  label= 'Tabarka' value= 'Tabarka' />
                  <Picker.Item  label= 'Tataouine ' value= 'Tataouine ' />
                  <Picker.Item  label= 'Touzeur' value= 'Touzeur' />
                  <Picker.Item  label= 'Zaghouan' value= 'Zaghouan' />
                  <Picker.Item  label= 'Zarzis' value= 'Zarzis' />
        </Picker>
         
   
   

        </View>
   
        <View>
<Text>{`\n`}</Text>
</View>
<View style={styles.partie3}>
<Textarea

onChangeText={text=>setMessageBranch(text)}
containerStyle={styles.textareaContainer}
style={styles.textarea}
maxLength={300}
placeholder={strings.demandePlaceholder}
placeholderTextColor={'#136FAF'}
underlineColorAndroid={'transparent'}

/>
 

      </View>


      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <TouchableOpacity style={styles.login}
         onPress={()=>saveRec()}>
          <Text style={styles.textlog}>{strings.bt_env}</Text>
        </TouchableOpacity>
      </View>
     
        </KeyboardAvoidingView> 

        </ScrollView>




    </View>
  </ImageBackground >
  
);
}



const styles = StyleSheet.create({
textareaContainer: {
height: "80%",
padding: 5,
backgroundColor: 'rgba(255,255,255,0.25)',
width:"90%",
marginStart:20
},
textarea: {
textAlignVertical: 'top',  
height: 170,
fontSize: 15,
color: '#136FAF',
},
input:{
  textAlignVertical: 'top',  
  fontSize: 15,
  color: '#136FAF',
  backgroundColor: 'rgba(255,255,255,0.25)',
width:"90%",
marginStart:20


},
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
height: '28%',
alignItems: 'center',
justifyContent: 'center'
},
partie2: {
flexDirection: 'row',
marginTop: 20,
//marginStart:30
},

text: {
fontWeight: 'bold',
fontSize: 16,
marginStart: 15,
color: '#136FAF',

},
partie3: {
flexDirection: 'row',
marginTop:5
},
partie4: {
alignItems: 'center',
justifyContent: 'center',
marginTop: 50,
marginStart: 20
},
input1: {
width: 350,
borderRadius: 45,
height: 45,
fontSize: 16,
paddingLeft: 45,
backgroundColor: 'rgba(255,255,255,0.5)',
color: '#136FAF',
marginHorizontal: 25,

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
},



itemSeparatorStyle:{
height: 1,
width: "90%",
alignSelf: "center",
backgroundColor: "#D3D3D3"
},
searchBarContainerStyle: {
marginBottom: 10,
flexDirection: "row",
height: 40,
shadowOpacity: 1.0,
shadowRadius: 5,
shadowOffset: {
  width: 1,
  height: 1
},
// backgroundColor: "rgba(255,255,255,0.5)",
shadowColor: "#d3d3d3",
borderRadius: 10,
elevation: 3,
marginLeft: 10,
marginRight: 10
},

selectLabelTextStyle: {
color: "#136FAF",
fontWeight:'bold',
textAlign: "left",
width: "99%",
fontSize:18,
padding: 10,
flexDirection: "row"
},
placeHolderTextStyle: {
color: "#136FAF",
fontWeight:'bold',
padding: 10,
textAlign: "left",
width: "99%",
flexDirection: "row",

},

listTextViewStyle: {
color: "#136FAF",
marginVertical: 10,
flex: 0.9,
marginLeft: 20,
marginHorizontal: 10,
textAlign: "left"
},
pickerStyle: {
marginLeft: 18,
elevation:3,
paddingRight: 25,
marginRight: 10,
marginBottom: 2,
shadowOpacity: 1.0,
shadowOffset: {
  width: 1,
  height: 1
},
borderWidth:1,
borderColor:'rgba(255,255,255,0.1)',
shadowRadius: 10,

shadowColor: "#d3d3d3",
flexDirection: "row"
}



})

export default sendMessage;
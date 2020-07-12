import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,
   KeyboardAvoidingView, Image, 
  ImageBackground,Dimensions, StyleSheet, Alert, ListView} from 'react-native';
import Textarea from 'react-native-textarea';
import bgImage from '../../images/steg9.jpeg'
import Logo from '../../images/stegLogo.png'
import {Picker} from '@react-native-community/picker';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
const sendMessage = ({navigation})=>{

const [message,setMessage] = useState('vide')
const [typeRec,settypeRec] = useState('Réclamation et renseignants sur facture')





const saveRec=async()=> {
const email=(await (AsyncStorage.getItem('email'))).toString()
const date = moment().locale('fr-ca').utcOffset('+01').format('LLL');
fetch("http://10.0.2.2:3000/send-data",{
method:"POST",
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify({
    message,
    typeRec,
    email,
    date
})
})
.then(res=>res.json())
.then(async(data)=>{
  try {
console.log(data)
Alert.alert(`Votre Réclamation a été envoyée avec succées`)
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
          <KeyboardAvoidingView >
          <View style={styles.partie2}>
<Text style={{color:'#136FAF',fontWeight:'bold',fontSize:15,marginStart:20,marginBottom:10}}>Type de la réclamation:</Text>
</View>

<View style={{backgroundColor:'rgba(255,255,255,0.25)', width:"90%",
  marginStart:20,       
}}>
 <Picker
          selectedValue={typeRec}
          onValueChange={(itemValue, itemIndex) => settypeRec(itemValue)}
          
          style={{
              placeholder: {color: '#136FAF'},
              padding:10}}
        >
          <Picker.Item  label= 'Réclamation et renseignants sur facture' value= 'Réclamation et renseignants sur facture' />
          <Picker.Item  label= 'Relance pour étude ou exécution' value= 'Relance pour étude ou exécution' />
          <Picker.Item  label= 'Réclamation pour réfection trottoir' value= 'Réclamation pour réfection trottoir' />
          <Picker.Item  label= 'Réclamation pour constats dégéts matériels suite incident' value= 'Réclamation pour constats dégéts matériels suite incident' />
          <Picker.Item  label= 'Vérification de tension ou pression' value= 'Vérification de tension ou pression' />
          <Picker.Item  label= 'Vérification de disjoncter  ou détenteur ou compteur' value= 'Vérification de disjoncter  ou détenteur ou compteur' />
          <Picker.Item  label= 'Correction dadress ou nom' value= 'Correction dadress ou nom' />
          <Picker.Item  label= 'Autre' value= 'Autre' />
        </Picker>

        </View>
   
        <View>
<Text>{`\n`}</Text>
</View>
<View style={styles.partie3}>
<Textarea

onChangeText={text=>setMessage(text)}
containerStyle={styles.textareaContainer}
style={styles.textarea}
maxLength={300}
placeholder={'Rédigez votre réclamation ici'}
placeholderTextColor={'#136FAF'}
underlineColorAndroid={'transparent'}

/>
 

      </View>


      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.login}
         onPress={()=>saveRec()}>
          <Text style={styles.textlog}>Envoyer</Text>
        </TouchableOpacity>
      </View>

        </KeyboardAvoidingView> 

    </View>
  </ImageBackground >
  
);
}



const styles = StyleSheet.create({
  pickerStyle:{
    placeholderColor: 'red',
  },
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
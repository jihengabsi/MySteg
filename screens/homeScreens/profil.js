import React, {useEffect,useState} from 'react';
import ImagePicker from 'react-native-image-picker';

import {Button} from 'react-native-paper';
import {TouchableOpacity,StyleSheet,RefreshControl,Image,
   Text,View, SafeAreaView, ScrollView,Modal, Alert,PermissionsAndroid} from 'react-native';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

   import AsyncStorage from '@react-native-community/async-storage';
import { createIconSetFromFontello } from 'react-native-vector-icons';
   export default Profil = ({navigation}) => {
    

 
   
    const [email,setEmail] = useState("loading")
    const [cin,setCin] = useState("loading")
    const [password,setPassword] = useState("loading")
    const [name,setName] = useState("loading")
    const [adress,setAdress] = useState("loading")
    const [phone,setPhone] = useState("loading")
    const [picture,setPicture] = useState("loading")
    const [pic,setPic] = useState("loading")
    const [_id,setId] = useState("loading")
    const [modal,setModal] = useState(false)
    const [loading,setLoading] = useState(true)
    
   
    const updateDetails = ()=>{
      fetch("http://10.0.2.2:3000/update",{
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            _id,
            name,
            email,
            password,
            phone,
            adress,
            "picture":pic,
            cin
          })
      })
      .then(res=>res.json())
      .then(data =>{
        Alert.alert(`${data.name} is updated successfuly`)
        setModal(false)
      })
      .catch(err=>{
        Alert.alert("someting went wrong")
    })
      
  }
  
    const handleUpload = async(image)=>{
      var data = new FormData()
      data.append('upload_preset', "sqnsfsup");
      data.append('file',image);
data.append('cloud_name','jiheng');


await fetch("https://api.cloudinary.com/v1_1/jiheng/image/upload",{
  method: 'post', 
  body:data,
    }).then(async r => {
    let file = await r.json()
    console.log("done2")
    console.log(file);
    setPic(file.secure_url)
    updateDetails()
    setModal(false)  
    }).catch(err => console.log(err))  

     
 }
    const pickFromCamera = () => {
        let options = {
          allowsEditing:true,
          aspect:[1,1],
          quality:0.5,
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchCamera(options, (response) => {
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let newfile = { 
              uri:response.uri,
              type:`test/${response.uri.split(".")[1]}`,
              name:`test.${response.uri.split(".")[1]}` 

          }
          handleUpload(newfile);
          
          setPicture(newfile)
          }
        });
    
      }
    
    const pickFromGallery = () => {
      let options = {
        allowsEditing:true,
        aspect:[1,1],
        quality:0.5,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
        ImagePicker.launchImageLibrary(options, (response) => {
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let newfile = { 
              uri:response.uri,
              type:`test/${response.uri.split(".")[1]}`,
              name:`test.${response.uri.split(".")[1]}` 

          }
          handleUpload(newfile);
          
          setPicture(newfile)
            
          }
        });
    
      };
  
 
  


    const fetchData = async ()=>{
       const token = await AsyncStorage.getItem("token")
     fetch('http://10.0.2.2:3000/',{
     headers:new Headers({
       Authorization:"Bearer "+token
     })
     }).then(res=>res.json())
     .then(data=>{
       console.log(data)
       setId(data._id)
       setEmail(data.email)
       setPassword(data.password)
       setName(data.name)
       setAdress(data.adress)
       setPicture(data.picture)
       setPhone(data.phone)
       setCin(data.cin)
       setLoading(false)
     }
     )
    }
 useEffect(()=>{
    fetchData()
 },[])

  return(
   
<SafeAreaView style={styles.container}>

  
  <ScrollView scrollEventThrottle={16} 
  
  refreshControl={
    <RefreshControl refreshing={loading} onRefresh={()=>fetchData()} />
  }
  >

<View style={styles.cub}>
<View style={{alignSelf: "center",marginTop:20}}>
  <View style={styles.profilImage}>
<Image source={{uri:picture}} style={styles.image} />
  </View>
<View style={styles.add}>
  <FontAwesome5 name="plus" size={30} color="rgba(255,255,255,0.9)" 

onPress={() => setModal(true)}
  />
</View>
</View>

<View style={styles.infoContainer}>
<Text style={{fontWeight:"300",fontSize:30,color:"#525750"}}>{name}</Text>
</View>

</View>



<View style={styles.cub2}>
<View style={{marginTop:0}}>
<View style={styles.info}>
<View style={styles.icons}>
  <FontAwesome5 name="id-card" solid size={30} color="rgba(0,0,0,0.8)"  />
</View>
<Text style={styles.texticon}>{cin}</Text>
<FontAwesome5 name="chevron-right" style={styles.direct} color="rgba(0,0,0,0.8)" 

onPress={() => navigation.navigate('updateCin', {_id,cin,email,password,name,phone,adress,picture})}
/>
</View>

<View style={styles.info}>
<View style={styles.icons}>
  <FontAwesome5 name="envelope" solid size={30} color="rgba(0,0,0,0.8)"  />
</View>
<Text style={styles.texticon}>{email}</Text>
<FontAwesome5 name="chevron-right" style={styles.direct} color="rgba(0,0,0,0.8)" 

onPress={() => navigation.navigate('updateE', {_id,email,password,name,phone,adress,picture})}
/>
</View>


<View style={styles.info}>
<View style={styles.icons}>
  <FontAwesome5 name="user-lock" size={30} color="rgba(0,0,0,0.8)"  />
</View>
<Text style={styles.texticon}>********</Text>
<FontAwesome5 name="chevron-right" style={styles.direct} color="rgba(0,0,0,0.8)"  
onPress={() => navigation.navigate('updatePwd', {_id,email,password,name,phone,adress,picture})}
/>
</View>


<View style={styles.info}>
  
<View style={styles.icons}>

  <FontAwesome5 name="phone" size={30} color="rgba(0,0,0,0.8)"  />
</View>
<Text style={styles.texticon}>{phone}</Text>
<FontAwesome5 name="chevron-right" style={styles.direct} color="rgba(0,0,0,0.8)"
onPress={() => navigation.navigate('updateP', {_id,email,password,name,phone,adress,picture})}
/>
</View>

<View style={styles.info}>
<View style={styles.icons}>
  <FontAwesome5 name="map-marker-alt" size={30} color="rgba(0,0,0,0.8)"  />
</View>
<Text style={styles.texticon}>{adress}</Text>
<FontAwesome5 name="chevron-right" style={styles.direct} color="rgba(0,0,0,0.8)"
onPress={() => navigation.navigate('updateA', {_id,email,password,name,phone,adress,picture})}
/>

</View>



</View>
<Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button icon="camera"
                        title="camera"
                         theme={theme}
                        mode="contained"
                        onPress={() => pickFromCamera()}>
                                camera
                        </Button>
                        <Button 
                        title="gallery"
                        icon="image-area"
                         mode="contained"
                         theme={theme}
                          onPress={() => pickFromGallery()}>
                                gallery
                        </Button>
                  </View>
                <Button 
                title="cancel"
                 theme={theme}
                onPress={() => setModal(false)}>
                        cancel
                </Button>
              </View>
             </Modal>
</View>

     
</ScrollView>
</SafeAreaView>

);
};

const theme = {
  colors:{
      primary:"#006aff"
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  direct:{
    position:"absolute",
   marginLeft:330,
   fontSize:20,
  },
  modalView:{
    position:"absolute",
    bottom:2,
    width:"100%",
    backgroundColor:"white"

},
modal1View:{
 
  width:"100%",
  height:"100%",
  backgroundColor:"white"

},
modalButtonView:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10
},
  cub2:{
    backgroundColor:'rgba(255,255,255,0.25)',
    shadowColor: "#000",
    shadowOffset: {
     width: 0,
   height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: null,
   
  },
  cub:{
  backgroundColor:'rgba(47,163,218,0.4)',
  shadowColor: "#000",
  shadowOffset: {
   width: 0,
 height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: null,
 
  },
  container:{
   flex:1,
backgroundColor:'rgba(255,255,255,0.25)'

  },
profilImage: {

width: 200,
height:200,
borderRadius:200,
borderColor:"rgba(255,255,255,255)",
borderWidth:4,
overflow:"hidden"
  },
  image: {
    flex:1,
    width:undefined,
    height:undefined
  },

add:{
  backgroundColor: "rgba(0,0,0,0.75)",
  position:"absolute",
  bottom:0,
  right:0,
  width:50,
  height:50,
  borderRadius:30,
  alignItems:"center",
  justifyContent:"center"
},
infoContainer:{
  alignSelf:'center',
  alignItems: 'center',
  marginTop:5,
  
},

info:{
  backgroundColor:"rgba(255,255,255,255)",
  borderColor:"rgba(47,163,218,0.4)",
  borderWidth:2,
  marginTop:20,
  flexDirection:'row',
  width:360,
  height:50,
  marginLeft:10,
  alignItems:"center",
  borderRadius:10,
},
icons:{
  marginStart:20,
},
texticon: {
  marginStart:20,
  fontSize:20,
  fontWeight:'bold',
  color:'#41444B'
  
},
background: {
  flex: 1,
  width: null,
  height: null,
}


});




  
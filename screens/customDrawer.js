import 'react-native-gesture-handler';
import React, {useEffect,useState} from 'react';
import {StyleSheet,Image,
   Text,View,ScrollView} from 'react-native';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  
   import {   createDrawerNavigator,  DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import { strings } from './homeScreens/localization'
   import accueil1 from "../screens/homeScreens/accueil"
   import profil from "../screens/homeScreens/profil";
   import help from "../screens/homeScreens/help";
   import signout from "../screens/authScreens/signout";
   import noterService from '../screens/homeScreens/noterservice'
   import map from './map';
   import site from './site';
import AsyncStorage from '@react-native-community/async-storage';
const Drawer = createDrawerNavigator();

import MyTabs from './customButtomTab';


    const customDrawer = () => {
     
      const [name,setName] = useState("loading")
      const [picture,setPicture] = useState('https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png')
      const Boiler = async ()=>{
         const token = await AsyncStorage.getItem("token")
       fetch('http://10.0.2.2:3000/',{
       headers:new Headers({
         Authorization:"Bearer "+token
       })
       }).then(res=>res.json())
       .then(async(data)=>{
         
         console.log(data)
         setName(data.name)
         setPicture(data.picture)
         
         
         
       }
       )
      }
      
    useEffect(()=>{
      Boiler()
    },[])


    const _CustomDrawerContent=(props) =>{
      
      return(
        <DrawerContentScrollView {...props}>
        <View style={styles.avatar}>
        <Image source={{uri:picture}} style={styles.logo} />
 <Text style={styles.name}>{name}</Text>
       </View>
       <ScrollView>
                    <Text style={{marginVertical: 10,marginHorizontal:15,color:'gray'}}>{strings.custFact}</Text>
                    <View style={{ flexDirection: 'row',alignItems: "center"}}>
                    <FontAwesome5 style={{marginVertical: 10,marginHorizontal:15}} name={'money-bill'} size={20} color="lightblue" />
                    <Text style={{marginVertical: 10,marginHorizontal:10,color:'gray'}} onPress={() => props.navigation.navigate('affichFac')} >{strings.custFact1}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',alignItems: "center"}}>
                    <FontAwesome5 style={{marginVertical: 10,marginHorizontal:20}} name={'calculator'} size={20} color="lightblue" />
                    <Text style={{marginVertical: 10,marginHorizontal:10,color:'gray'}} onPress={() => props.navigation.navigate('simulerFac')} >{strings.custSim}</Text>
                    </View>
                </ScrollView>
                <View style={{ borderBottomColor: 'lightgrey',borderBottomWidth: 1}}/>
 <DrawerItemList {...props} />
 <View style={{ borderBottomColor: 'lightgrey',top:100,borderBottomWidth: 1}}/>
 <View style={{ flexDirection: 'row',alignItems: "center"}}>
                    <FontAwesome5 style={{marginVertical: 120,marginHorizontal:20}} name={'sign-out-alt'} size={20} color="lightblue" />
                    
                    <Text style={{marginVertical: 10,marginHorizontal:10,color:'gray'}} onPress={() => props.navigation.navigate('signout',{picture})} >{strings.custDeco}</Text>
                    </View>
    
   </DrawerContentScrollView>
    
      );
    
    };

  return(
    <Drawer.Navigator
    drawerContent={props => _CustomDrawerContent(props)}
    drawerStyle={{
      
      borderTopRightRadius:25,
      opacity:0.9,
      backgroundColor: 'white',
      width: 250,
      
    }}
    drawerContentOptions={{
    
      activeTintColor: 'gray',
      itemStyle: { marginVertical: 5}, 
      activeBackgroundColor:'#e8ffff',
  
      
    }}
    initialRouteName="accueil"
  
    > 
   
     <Drawer.Screen name="noterService" component={noterService} 
    options={{
       drawerLabel: 'Noter les services',
      drawerIcon:() => (   <FontAwesome5 name={"grin-stars"} solid size={20} color="lightblue" /> ),
  }}
    />
     <Drawer.Screen name="map" component={map} 
    options={{
       drawerLabel: 'Map',
      drawerIcon:() => (   <FontAwesome5 name={"map-marked-alt"} size={20} color="lightblue" /> ),
  }}
    />
    <Drawer.Screen name="site" component={site} 
    options={{
       drawerLabel: 'Site offciel STEG',
      drawerIcon:() => (   <FontAwesome5 name={"external-link-square-alt"} size={20} color="lightblue" /> ),
  }}
    />
     <Drawer.Screen name="help" component={help} 
    options={{
       drawerLabel: 'Aide',
      drawerIcon:() => (   <FontAwesome5 name={"question-circle"} solid size={20} color="lightblue" /> ),
  }}
    />
  <Drawer.Screen name="accueil"  component={accueil1} 
    options={{
       drawerLabel: 'Accueil',
      drawerIcon:() => (   <FontAwesome5 name={"home"} size={20} color="lightblue" /> ),
  }}
    />
 
    
  </Drawer.Navigator>
 );
};


  
const styles = StyleSheet.create({

    logo: {

      top:10,
      width: 80,
      height: 80,
      borderRadius: 200,
      borderColor:'white',
      left:70
     
    },
    name: {
      flex:1,
      position:"relative",
      color: '#fff',
      width: 150,
      left:160,
      top:-50,
      fontSize: 18,

     
    },
    avatar:{
      borderTopRightRadius:30,
      right:50,
      top:-4,
      backgroundColor: '#ADD8E6',
      height: 110,
      width:300
    }
  });
  
export default customDrawer;
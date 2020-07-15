import 'react-native-gesture-handler';
import {Provider,useSelector} from 'react-redux'
import React,{useEffect} from 'react';
import { StyleSheet,Image, View, TabBarIOS} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { DrawerActions } from '@react-navigation/native';

//screens:

import signup from "./screens/authScreens/signup";
import signin from "./screens/authScreens/signin";
import forgotPassword from "./screens/authScreens/forgotPassword";
import insertCode from "./screens/authScreens/insertCode";
import updatePwd1 from './screens/authScreens/updatePassword1';
import signout from "./screens/authScreens/signout";
import splash from "./screens/splash";
import profil from "./screens/homeScreens/profil";
import updateE from './screens/updateScreens/updateEmail';
import updateP from './screens/updateScreens/updatePhone';
import updatePwd from './screens/updateScreens/updatePassword';
import updateA from './screens/updateScreens/updateAdress';
import updateCin from './screens/updateScreens/updtateCin';
import MyDrawer from './screens/customDrawer';
import loading from './screens/authScreens/loading'
import loading1 from './screens/authScreens/loading1'
import ajoutRef from './screens/homeScreens/ajoutRef'
import affichFac from './screens/homeScreens/affichFacture'
import facture from './screens/homeScreens/payerFac'
import simulerFac from './screens/homeScreens/simulerFac'
import simulerFac1 from './screens/homeScreens/simulerFac1'
import simulerFac2 from './screens/homeScreens/simulerFac2'
import reclamation from './screens/homeScreens/reclamation'
import reclamationE from './screens/homeScreens/reclamationE'
import rec from './screens/homeScreens/rec'
import historique from './screens/homeScreens/historique'
import demande from './screens/homeScreens/demande'
import demandeE from './screens/homeScreens/demandesE'
import help from './screens/homeScreens/help'
import fs from './screens/homeScreens/factureS'
import fs1 from './screens/homeScreens/fs'
import ds from './screens/homeScreens/ds'
import noterService from './screens/homeScreens/noterservice'
import MyTabs from './screens/customButtomTab';

import parametre from './screens/homeScreens/parametre'


import maps from './screens/map';
import site from './screens/site';
import steg from './images/steg.jpg'
const AuthStack= createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer > 
 <AuthStack.Navigator>
 <AuthStack.Screen
    name="Splash"
    component={splash}
    options={{ headerShown:false,
    }}
   
  /> 
  <AuthStack.Screen
    name="signin"
    component={signin}
    options={{ title: "Signin" }}
    options={{ headerShown:false}}
  />
     
   <AuthStack.Screen
    name="reclamation"
    component={reclamation}
    options={{ headerShown:true,title: "Envoyer une réclamation",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />

  <AuthStack.Screen
    name="parametre"
    component={parametre}
 
  />
  
   <AuthStack.Screen
    name="reclamationE"
    component={reclamationE}
    options={{ headerShown:true,title: "Réclamations envoyées",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
  <AuthStack.Screen
    name="maps"
    component={maps}
    options={{ headerShown:true,title: "Map",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
   <AuthStack.Screen
    name="site"
    component={site}
    options={{ headerShown:true,title: "Site",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
  <AuthStack.Screen
    name="rec"
    component={rec}
    options={{ headerShown:true,title: "Votre réclamation",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
  <AuthStack.Screen
    name="fs1"
    component={fs1}
    options={{ headerShown:true,title: "Votre facture simulée",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
  <AuthStack.Screen
    name="ds"
    component={ds}
    options={{ headerShown:true,title: "Votre demande",
    headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
   <AuthStack.Screen
    name="demande"
    component={demande}
    options={{ headerShown:true,title: "Envoyer une demande",
    headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
    
  />
  <AuthStack.Screen
    name="demandeE"
    component={demandeE}
    options={{ headerShown:true,title: "Demandes envoyées",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
   <AuthStack.Screen
    name="historique"
    component={historique}
    options={{ headerShown:true,title: "Historique",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
   <AuthStack.Screen
    name="help"
    component={help}
    options={{ headerShown:true,title: "Aide",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
   <AuthStack.Screen
    name="fs"
    component={fs}
    options={{ headerShown:true,title: "Factures simulées",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
    <AuthStack.Screen
    name="noterService"
    component={noterService}
    options={{ title: "Noter les services" }}
    options={{ headerShown:true,  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
  <AuthStack.Screen
    name="signout"
    component={signout}
    options={{ title: "Signout" }}
    options={{ headerShown:true,title: "Déconnexion",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
     }}
  />
  <AuthStack.Screen
    name="signup"
    component={signup}
    options={{headerShown:true, title: "Créer une compte",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 }}
 
  />
    <AuthStack.Screen
    name="forgotPassword"
    component={forgotPassword}
    options={{headerShown:true, title: "Mot de pass oublié",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 }}
  />
   <AuthStack.Screen
    name="insertCode"
    component={insertCode}
    options={{headerShown:true, title: "Inserer le code",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 }}
  />
<AuthStack.Screen
    name="profil"
    component={profil}
    options={{ title: "Profil",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  />
   <AuthStack.Screen
    name="updateE"
    component={updateE}
    options={{ title: "Email" ,  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
     <AuthStack.Screen
    name="updateCin"
    component={updateCin}
    options={{ title: "Cin" ,  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />

   <AuthStack.Screen
    name="updateP"
    component={updateP}
    options={{ title: "Numéro de téléphone" ,  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
   <AuthStack.Screen
    name="updateA"
    component={updateA}
    options={{ title: "Adresse",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }, }}
  />

  <AuthStack.Screen
    name="updatePwd"
    component={updatePwd}
    options={{ title: "Mot de passe",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }, }}
  />
   <AuthStack.Screen
    name="updatePwd1"
    component={updatePwd1}
    options={{ title: "Mot de passe" ,  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
  />
  <AuthStack.Screen
    name="loading"
    component={loading}
    options={{ headerShown:false}}
  />
  <AuthStack.Screen
    name="loading1"
    component={loading1}
    options={{ headerShown:false      
    }}
  />
 <AuthStack.Screen
  name="ajoutRef1"
  component={ajoutRef}
  options={{ headerShown:true,
    title: "Ajouter une référence" ,  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
/>


<AuthStack.Screen
  name="affichFac"
  component={affichFac}
  options={{ headerShown:true,
    title: "Vos factures",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
/>

<AuthStack.Screen
  name="facture"
  component={facture}
  options={{ headerShown:true,
    title: "Votre facture",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
/>
<AuthStack.Screen
    name="simulerFac1"
    component={simulerFac1}
    options={{ headerShown:true,
      title: "Simuler votre facture",  headerStyle: {
        backgroundColor: '#5DADE2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}}
  />
  <AuthStack.Screen
    name="simulerFac2"
    component={simulerFac2}
    options={{ headerShown:true,
      title: "Simuler votre facture",  headerStyle: {
        backgroundColor: '#5DADE2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}}
  />
<AuthStack.Screen
  name="simulerFac"
  component={simulerFac}
  options={{ headerShown:true,
    title: "Simuler votre facture",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
/>
<AuthStack.Screen
  name="services"
  component={MyTabs}
  options={{ 
    title: "Facturation",  headerStyle: {
      backgroundColor: '#5DADE2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}
/>
  <AuthStack.Screen
      name="accueil"
    component={MyDrawer}
    options={({navigation}) => ({

      title: "Accueil",
    headerTitleAlign:"center",
    headerLeftContainerStyle:{
      paddingLeft: 20
    },
    headerTitle:() => (  <Image source={steg} style={{width:30,height:40}} />), 
    headerLeft: () => (
      <FontAwesome5 right={30} name={"bars"} size={20} color="#0065bd"  
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
     /> 
    
    ),
    headerRight: () => (<View style={{ flexDirection:'row',}}>
      <FontAwesome5 style={{paddingRight:20}} name={"home"} size={20} color="#0065bd" onPress={() => navigation.replace("accueil")} />
    </View>
      
    ),
    

  })}
  />
</AuthStack.Navigator>
    
    </NavigationContainer>
  );
  
};

const styles = StyleSheet.create({

  logo: {
    left:20,
    top:20,
    width: 120,
    height: 120,
    borderRadius: 400/ 2,
    borderColor:'white',
    borderWidth:4
    
   
  },
  name: {
    color: '#fff',
    height: 40,
    width: 150,
    left:5,
    top:25,
    fontSize: 24,
    paddingLeft: 40,
   
    borderRadius: 400/ 2
   
  },
  avatar:{
    borderTopRightRadius:25,
    top:-4,
    backgroundColor: '#ADD8E6',
    height: 200,
    width:300
  }
});
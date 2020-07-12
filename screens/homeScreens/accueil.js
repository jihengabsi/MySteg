import React, {useEffect,useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button,
  View, Text, TouchableOpacity, Animated, ImageBackground,
  ScrollView, Dimensions, StyleSheet,Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import bgImage from '../../images/background.jpg';
import IconBadge from 'react-native-icon-badge';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Card } from "@paraboly/react-native-card";

  
export default  accueil =   (props) => {
  const [reference, setReference] = useState("");

  const ajouter = async()=>{
    setReference(await AsyncStorage.getItem("ref")); 
   
}
useEffect(()=>{
  ajouter()
},[])

  



  
    return (
     
      <ImageBackground source={bgImage} style={styles.container}>

        <View style={styles.backContainer}>


          <View style={styles.top} >
            
        
    
     {(() => {
              if (reference=="null"){
              return (
                <Card
                title="Bienvenu"
                iconName="plus"
                IconBadge
                defaultTitle=""
                iconType="Entypo"
                defaultContent=""
                content="Pour continuer ajoutez une référence"
                onPress={() => props.navigation.push('ajoutRef1')}
                iconBackgroundColor="lightblue"
                containerHeight={100}
              />
             
                   
                   ) }
             else {return(
            <View>
                   <Card
                title="Changer votre référence"
                iconName="edit"
                IconBadge
                defaultTitle=""
                iconType="Entypo"
                defaultContent=""
                onPress={() => props.navigation.push('ajoutRef1')}
                content={reference}
                iconBackgroundColor="lightblue"
                containerHeight={100}
              />
                  </View>
              ) }
           })()}
  
          </View>
                  


          <View style={styles.menu1}>
            
          <View style={styles.menuItems}>
              <View style={styles.icons}>
              <TouchableOpacity style={{ alignItems: "center" }}  onPress={() => props.navigation.push('profil')} > 
                <IconBadge                   
                  BadgeElement={
                  <FontAwesome5 name={'user-tie'} size={30} color='rgba(255,255,255,0.9)' />
                }
                IconBadgeStyle={
                  {position:'relative',
                  width:80,
                  height:80,
                  borderRadius:55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.4)'}
                }
                />
                  <Text style={{ fontSize: 15.5, color: '#ffffff', fontWeight: 'bold' }}>Profil</Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.menuItems}>
              <View style={styles.icons}>
              <TouchableOpacity style={{ alignItems: "center" }} onPress={() =>props.navigation.push('services')} >
                <IconBadge                   
                  BadgeElement={
                  <FontAwesome5 name={'money-bill'} size={30} color='rgba(255,255,255,0.9)' />
                }
                IconBadgeStyle={
                  {position:'relative',
                  width:80,
                  height:80,
                  borderRadius:55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.4)'}
                }
                />
                  <Text style={{  fontSize: 15.5, color: '#ffffff', fontWeight: 'bold' }}>Facturation</Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.menuItems}>
              <View style={styles.icons}>
              <TouchableOpacity style={{ alignItems: "center" }}onPress={() =>props.navigation.push('historique')} >
                <IconBadge                   
                  BadgeElement={
                  <FontAwesome5 name={'archive'} size={30} color='rgba(255,255,255,0.9)' />
                }
                IconBadgeStyle={
                  {position:'relative',
                  width:80,
                  height:80,
                  borderRadius:55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.4)'}
                }
                />
                  <Text style={{  fontSize: 15.5, color: '#ffffff', fontWeight: 'bold'}}>Historique</Text>
                </TouchableOpacity>
              </View>
            </View>
</View>
<View style={styles.menu}> 
            <View style={styles.menuItems}>
            <View style={styles.icons}>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() =>props.navigation.push('demande')} >
                <IconBadge                   
                  BadgeElement={
                  <FontAwesome5 name={'envelope-open-text'} size={30} color='rgba(255,255,255,0.9)' />
                }
                IconBadgeStyle={
                  {position:'relative',
                  width:80,
                  height:80,
                  borderRadius:55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.4)'}
                }
                />
                  <Text style={{  fontSize: 15.5, color: '#ffffff', fontWeight: 'bold' }}>Demande</Text>
                </TouchableOpacity>
              </View>
            </View>

            

        


            <View style={styles.menuItems}>
              <View style={styles.icons}>
              <TouchableOpacity style={{ alignItems: "center" }} onPress={() =>props.navigation.push('reclamation')} >
                <IconBadge                   
                  BadgeElement={
                  <FontAwesome5 name={'envelope'} size={30} color='rgba(255,255,255,0.9)' />
                }
                IconBadgeStyle={
                  {position:'relative',
                  width:80,
                  height:80,
                  borderRadius:55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.4)'}
                }
                />
                  <Text style={{ fontSize: 15.5, color: '#ffffff', fontWeight: 'bold'}}>Réclamation</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.menuItems}>
              <View style={styles.icons}>
              <TouchableOpacity style={{ alignItems: "center" }} onPress={() =>props.navigation.push('parametre')} >
                <IconBadge                   
                  BadgeElement={
                  <FontAwesome5 name={'wrench'} size={30} color='rgba(255,255,255,0.9)' />
                }
                IconBadgeStyle={
                  {position:'relative',
                  width:80,
                  height:80,
                  borderRadius:55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.4)'}
                }
                />
                  <Text style={{ fontSize: 15.5, color: '#ffffff', fontWeight: 'bold'}}>Paramétres</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
         
        </View>
  
       
      </ImageBackground>

    );
  }



  const theme = {
    colors:{
        primary:"#006aff"
    }
  }
  
const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: null,
    height: null
  },
  backContainer:  {
  width:  wp('100%'),
  height:  hp('100%'),
    flex: 1,
    backgroundColor: 'rgba(47,163,218,0.4)'
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginHorizontal:20,
    height: 120,
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:25,
    backgroundColor: 'rgba(255,255,255,0.1)',
  
  },
  menu1: {
    top:-100,
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menu: {
    top:-300,
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
 
  
  menuItems: {

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '33.333%',
    height: '50%',
    padding: 15,

  },
  icons: {
    position:"absolute",
    width: '100%',
    height: '100%',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(170,200,200,0.12)'
  },
  scrollView: {

    marginHorizontal: 20,
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

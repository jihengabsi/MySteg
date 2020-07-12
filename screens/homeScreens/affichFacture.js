import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Alert, TextInput,Button} from 'react-native';
import {Card,FAB, ActivityIndicator} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';

import Modal from 'react-native-modal';
const Home = ({navigation})=>{
      
     const [data,setData] = useState([])
    const [loading,setLoading]= useState(true)
    const [isModalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
   
     
   const SearchFunc=(text)=>{
    fetch('http://10.0.2.2:3000/findDate',{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        dateDebut:text
      })
  })
      .then(res=>res.json())
      .then(results=>{
  
       setData(results)
       setLoading(false)
       

      }).catch(err=>{
          Alert.alert("someting went wrong")
      })
  
   }
    const Boiler = async ()=>{
      const reference= await AsyncStorage.getItem("ref")
     
      if(reference!="null"){
          fetch('http://10.0.2.2:3000/find',{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              reference:reference
            })
        })
            .then(res=>res.json())
            .then(results=>{
        
             setData(results)
             setLoading(false)
             
    
            }).catch(err=>{
                Alert.alert("someting went wrong")
            })
        
        }
      else{
        toggleModal()
        }  
      }
     
     
    useEffect(()=>{
        Boiler()
      },[])
    const renderList = ((item)=>{
          return(
              <View>
               
            <Card style={styles.mycard}
            
            onPress={()=>navigation.navigate("facture",{item})}
            >
            <View style={styles.cardView}>
            <View style={{ flex:1,paddingHorizontal: 10, paddingVertical: 10 }}>
            <FontAwesome5 name="money-check" style={{paddingVertical:10}}  size={70} color="#0065bd" />
            </View>
                <View style={{ flex:1,paddingHorizontal: 8, paddingVertical: 16,flexDirection:"column", }}>
            <Text style={{ fontSize: 18, color: 'black' }}>Date Debut:</Text>   
                    <Text style={{ fontSize: 18, color: 'black' }}>Date Fin:</Text>
                  <Text style={{ fontSize: 20, color: '#1e5565'}}>Etat:</Text>   
                  </View>  
                 <View style={{ paddingHorizontal: 20, paddingVertical: 16,flexDirection:"column",  }}>

                    <Text style={{ fontSize: 18, color: 'gray' }}>{item.dateDebut.substring(0,10)}</Text>   
                    <Text style={{ fontSize: 18, color: 'gray' }}>{item.dateFin.substring(0,10)}</Text>
                  <Text style={{ fontSize: 20, color: 'black'}}>{item.etat}</Text>     
                </View>
           
            </View>
            
           </Card>
           </View>
          )
    })
   return(
       <View style={{flex:1}}>
          <View style={{top:0, flexDirection: 'column',}}>
          <Searchbar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => SearchFunc(text)}
          onClear={Boiler}
          placeholder="Tapez une date ici..."
                     
       
      />
                   </View>
    {
       loading?
       <ActivityIndicator size="small" color="#00ff00" />
 
       :
        <FlatList
        style={{ flex: 1 }}
              data={data}
              
              renderItem={({item})=>{
                
                return (                  
                  renderList(item))
              }}
              keyExtractor={item=>item._id}
              ListEmptyComponent={() => (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50
                  }}
                >
                  <Text style={{ color: 'red' }}>Aucune facture trouvé</Text>
                </View>
              )}
              />
             
            }
             <Modal isVisible={isModalVisible}>
         <View style={styles.modalView}>
         <Text style={{top:20,left:100,fontSize: 22, color: '#d31607', }} >Interdit!</Text>
         <Text style={{top:40,left:10,fontSize: 18, color: 'black', }} >S'il vous plais ajouter une référence d'abord</Text>
         
         <View style={{width:'100%',flexDirection:"row"}}>
           <TouchableOpacity style={{borderColor:'white',borderWidth:1,borderBottomLeftRadius:10,bottom:-97,width:150,backgroundColor:'lightgrey'}} onPress={() => {
             toggleModal()
             navigation.replace('ajoutRef1')}}>
           <Text style={{left:50,fontSize: 25, color: '#fff', fontWeight:'normal'}} >OK</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{borderColor:'white',borderWidth:1,borderBottomRightRadius:10,bottom:-97,width:150, backgroundColor:'lightgrey'}}  onPress={() => {navigation.replace('accueil')}}>
           <Text style={{left:30,fontSize: 25, color: '#fff', fontWeight:'normal'}} >Annuler</Text>
           </TouchableOpacity>
            </View>
                 
         
                   </View>
                 </Modal>
       </View>
      
     
   ) 
}

const styles = StyleSheet.create({
 
    mycard:{
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
         flexDirection:"row",
         padding:4
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

export default Home;
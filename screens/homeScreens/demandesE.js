import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList,Alert, ImageBackground,Button} from 'react-native';
import {Card,FAB, ActivityIndicator} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';
import bgImage from '../../images/steg9.jpeg'
import Modal from 'react-native-modal';
const Home = ({navigation})=>{
      
     const [data,setData] = useState([])
    const [loading,setLoading]= useState(true)
   

    const Boiler = async ()=>{
      const email= await AsyncStorage.getItem("email")

          fetch('http://10.0.2.2:3000/dem',{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              "email":email
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
     
     
    useEffect(()=>{
        Boiler()
      },[])
    const renderList = ((item)=>{
          return(
              <View>
               
            <Card style={styles.mycard} onPress={()=>navigation.navigate("ds",{item})}>
            <View style={styles.cardView}>
            <View style={{ flex:1,paddingHorizontal: 8, paddingVertical: 16,flexDirection:"column" }}>
            <Text style={{ fontSize: 18, color: 'black',paddingBottom:5,height:30}}>Date:</Text>   
            <Text style={{ fontSize: 18, color: 'black',paddingBottom:5 ,height:70}}>Type de demande:</Text>   
                    <Text style={{ fontSize: 18, color: 'black',paddingBottom:5,height:40 }}>Réponse:</Text>
                  </View>  
                 <View style={{ flex:1,paddingHorizontal: 8, paddingVertical: 16,flexDirection:"column",width:200,height:150 }}>

                    <Text style={{ fontSize: 18, color: 'gray',paddingBottom:5 ,height:30 }}>{item.date}</Text>   
                    <Text style={{ fontSize: 18, color: 'gray',paddingBottom:5 ,height:70 }}>{item.typeDemand}</Text>   
                    <Text style={{ fontSize: 18, color: 'gray',paddingBottom:5,height:40}}>{item.reponse}</Text>
</View>
</View>
            
           </Card>
           </View>
          )
    })
   return(
    <ImageBackground source={bgImage} style={styles.container}>
       <View style={{flex:1}}>
          <View style={{top:0, flexDirection: 'column',}}>
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
            
       </View>
      </ImageBackground>
     
   ) 
}

const styles = StyleSheet.create({
 
    mycard:{
      shadowColor: "black",
      borderBottomColor:'lightblue',
      borderBottomWidth:5,
      borderLeftColor:'lightblue',
      borderLeftWidth:5,
      elevation: 5,
        margin:5,
        backgroundColor:"white",
        borderRadius:14
       
    },
    cardView:{
         flexDirection:"row",
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
    container: {
        flex: 1,
        width: null,
        height: null
        },
})

export default Home;
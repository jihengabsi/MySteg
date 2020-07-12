import 'react-native-gesture-handler';
import React from 'react';

   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import { BottomTabBar,createBottomTabNavigator } from '@react-navigation/bottom-tabs';

    import { BottomTabBarWrapper, MultiBarButton, MultiBarProvider } from 'react-native-multibar';
    import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import affichFac from './homeScreens/affichFacture'
import simulerFac from './homeScreens/simulerFac'
const Tab= createBottomTabNavigator();

export default  MyTabs=({ navigation })=>{
  
  return (
    
    <MultiBarProvider
    data={[
      () => (
        <FontAwesome5
          name="chevron-left"
          color="#d31607"
          size={30}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
        />
      ),
      () => (
        <FontAwesome5 name={"user-tie"} size={40} color="#d31607" onPress={() => {
          navigation.push('profil');
        }} />
       
      ),
      () => (
        <FontAwesome5
        name="map-marked-alt"
        color="#d31607"
        size={30}
        onPress={() => {
        }}
      />
       
      ),
      () => (
        <FontAwesome5
        name="home"
        color="#d31607"
        size={30}
        onPress={() => {
          navigation.navigate('accueil');
        }}
      />
      ),
   
    ]}
    iconSize={30}
    overlayRadius={100}
    initialExtrasVisible={false}
  >

    <Tab.Navigator
      tabBar={(props) => (
        <BottomTabBarWrapper  style={{backgroundColor:"blue"}} navigation={props.navigation}>
          <BottomTabBar {...props} />
        </BottomTabBarWrapper>
      )}
    >
     
     <Tab.Screen
  name="simulerFac"
  component={simulerFac}
  options={{
    tabBarLabel: 'Simuler votre facture',
    tabBarIcon: ({ color, size }) => (
      <FontAwesome5 name="calculator" color={color} size={size} />
    ),
  }}
/>  
  
        
       
<Tab.Screen
            name="Center"
            component={affichFac}
            options={{
              tabBarLabel: '',
              tabBarButton: () => (
                <MultiBarButton
                  style={{
                    backgroundColor: '#d31607'
                  }}
                >
                  <FontAwesome5
                    name="plus"
                    style={{
                      fontSize: 32,
                      color: '#EDF2F4'
                    }}
                  />
                </MultiBarButton>
              )
            }}
          />

<Tab.Screen
name="affichFac"
component={affichFac}
options={{
  tabBarLabel: 'Vos factures',
  tabBarIcon: ({ color, size }) => (
    <FontAwesome5 name="list-alt" color={color} size={size} />
  ),
}}
/>        

 


</Tab.Navigator>
</MultiBarProvider>
  )
}
   
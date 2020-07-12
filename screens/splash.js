
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View,Text,StyleSheet,Image,Animated,ImageBackground,Dimensions,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logo from '../images/stegLogo.png';

const { width: WIDTH } = Dimensions.get("window");
class Splash extends Component{
state={
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    LoadingSpinner: false,
};

componentDidMount(){
    const {LogoAnime, LogoText} = this.state;
    const {navigate} = this.props.navigation;
setTimeout(() => {
   navigate('signin'); 
}, 2000);
    Animated.parallel([
        Animated.spring(LogoAnime, {
            toValue: 1,
            tension: 10,
            friction: 2,
            duration:2000,
            useNativeDriver: false, 
        }).start(),

Animated.timing(LogoText, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false, 
}),
]).start(() => {
    this.setState({
LoadingSpinner: true,
    });
});
}
render() {
    return(
<View style={styles.container}>

    <View style={{marginStart:  wp('2%'),marginTop:10}}>
    <Animated.View
    style={{
        
        opacity: this.state.LogoAnime,
        top:this.state.LogoAnime.interpolate({
            inputRange: [0, 1],
            outputRange: [80, 0],
        })
    }}
    >
    <Image source={logo}/>
    </Animated.View>
  
</View>

</View>
        
    );
}

}

export default Splash;

const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#D8E3DB',
    justifyContent:'center'
    
},



});

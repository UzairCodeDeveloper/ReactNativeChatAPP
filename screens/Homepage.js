import { Alert, StatusBar,StyleSheet, Text, View } from 'react-native'
import {  TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Homepage() {
    const onPresss=()=>{
        alert("Now lets works with signIN and Sign Up page")
    }
    const navigation=useNavigation();
  return (
    <>
    <View style={styles.container}>
      <View style={styles.welcome}>
        <LottieView style={{ flex: 1 }} source={require('../assets/HomepageAnimation.json')} autoPlay loop />
      </View>
      <View>
        <Text style={styles.texxt}>Panda Convo</Text>
        <Text style={styles.text2}>Bringing People together, Where Conversations Spark and Friendships Flourish.</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.buttonBorder}>
        <TouchableOpacity style={[styles.button, styles.buttonBorderRadius]} onPress={()=>navigation.push("Login")}>
          <Text style={styles.button}>Get Started</Text>
        </TouchableOpacity>

      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texxt: {
    fontSize: 40,
    color: '#ff4f5b',
    paddingLeft: 10,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500'
  },
  text2: {
    fontSize: 22,
    paddingLeft: 10,
    textAlign: 'center'
  },
  welcome: {


    height: '52%',
    aspectRatio: 1,
    marginTop: 55
  },
  buttonBorderRadius: {
    // borderWidth:2,
    backgroundColor: '#ff4f5b',
    borderRadius: 40
  },
  button: {

    color: 'white',
    textAlign: 'center',

    textAlign: 'center',
    fontSize: 17,
    padding: 10
  },
  buttonBorder: {
    backgroundColor:'white',
    // marginTop: 10,
    padding: 50
  }
});
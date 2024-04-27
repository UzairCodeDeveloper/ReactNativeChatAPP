import { SafeAreaView, StyleSheet, Text, View,Image, ImageBackground,Dimensions, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
export default function Login() {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window');
    const navigation=useNavigation()
  return (
    <View style={styles.Container}>
    
      <ImageBackground
     source={require('../assets/svg.png')}
     style={styles.Background}
      > 
        <View style={[styles.InnerDiv,{ marginTop: height * 0.038,}]}>
        <Text style={styles.Text}>Login</Text>
        <View style={[styles.borderbottom, { width: width * 0.15 }]}/>
        <View  style={styles.Input}>
            <View >
                <Text style={styles.InputPlaceholders}> Email </Text>
                <TextInput style={styles.inputfield}></TextInput>
                <View style={styles.inputbottom}></View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.InputPlaceholders}> Password: </Text>
                <TextInput style={styles.inputfield} secureTextEntry></TextInput>
                <View style={styles.inputbottom}></View>
                <TouchableOpacity>
                <Text style={styles.ftext}>Forget Password</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={[styles.BtnContainer,{ marginTop: height * 0.1,}]}>
            <View style={styles.btn}>
                <TouchableOpacity onPress={()=>navigation.push('Signup')}>
                    <Text style={styles.btnStyling}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.btn,styles.btnBlack]}>
                <TouchableOpacity>
                    <Text style={[styles.btnStyling,styles.btnColorBlack]}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.sociallogin}>
            <View>
                <Text style={styles.fotterText}>Or login with </Text>
            </View>
            <View style={styles.IconsContainer}>
                <View style={styles.Icon}>
                    <Image
                        source={require('../assets/googleicon.png')}
                        style={styles.iconImage}
                    />
                </View>
                <View style={styles.Icon}>
                    <Image
                        source={require('../assets/twitter.png')}
                        style={styles.iconImage}
                    />
                </View>
                <View style={styles.Icon}>
                    <Image
                        source={require('../assets/github.png')}
                        style={styles.iconImage}
                    />
                </View>
            </View>
        </View>
        
        </View>
        <TouchableOpacity onPress={()=>navigation.pop()}>
            <Text>To Back</Text>
        </TouchableOpacity>
      </ImageBackground>
     
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{backgroundColor:"white"},
    welcome:{
        height: '52%',
    aspectRatio: 1,
    marginTop: 55
    },
    Background:{
        borderWidth:2,
        height:"100%",
        width:'100%'
        
    }
    ,InnerDiv:{
       
        padding:40
    },Text:{
        fontSize:35,
        color:'white',
        fontWeight:'bold'
        // borderWidth:2,
        
    },
    borderbottom:{
        borderWidth:2,
        borderColor:'white',
        marginTop:5
    },Input:{
        marginTop:70
    },inputBox:{
        marginTop:40
    }
    ,InputPlaceholders:{
        fontSize:20,
        color:'white',
        fontWeight:'600'
    },inputfield:{
        height:40,
        color:'white',
        marginLeft:4,
        fontSize:14,
        
    },inputbottom:{
        borderWidth:1,
        borderColor:'white'
    },ftext:{
        color:'white',
        marginTop:13,
        textAlign:'right'
    },
    BtnContainer:{
        
        // flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        gap:10
        // borderWidth:4,
        // height:40

    },
    btnStyling:{
        fontSize:20,
        color:'black',
        // borderWidth:1
    },

    btn:{
        backgroundColor:'white',
        paddingHorizontal:35,
        paddingVertical:10
        ,borderRadius:20,
        borderWidth:1
    },
    btnBlack:{
        backgroundColor:'black',
        color:'white'
    },
    btnColorBlack:{
        color:'white'
    },
    sociallogin:{
        marginTop:30
    },
    fotterText:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    IconsContainer:{
        marginTop:40,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        gap:20
    },
    Icon: {
        width: 55,
        height: 55,
        backgroundColor: 'white', // Changed background color to white
        padding: 10,
        borderRadius: 10, // Added borderRadius to make it a rounded shape
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android devices
      },
    iconImage:{
        // width:'20px',
        height:30,
        width:30
    }
})
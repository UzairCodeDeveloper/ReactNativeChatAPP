import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window');
    const navigation=useNavigation();
    return (
        <View style={styles.Container}>


            <View style={[styles.InnerDiv, { marginTop: height * 0.08, }]}>
                <Text style={styles.Text}>Welcome</Text>
                {/* <View style={[styles.borderbottom, { width: width * 0.24 }]} /> */}
                <Text style={styles.textInst}>Signup into your account</Text>
                <View style={styles.Input}>

                    <View style={styles.inputfieldBox}>
                        
                        <TextInput style={styles.inputfield} placeholder='Name' placeholderTextColor={"white"}></TextInput>
                        <View style={styles.inputbottom}></View>
                    </View>
                    <View style={styles.inputfieldBox}>
                        
                        <TextInput style={styles.inputfield} placeholder='Email' placeholderTextColor={"white"}></TextInput>
                        <View style={styles.inputbottom}></View>
                    </View>
                    <View style={[styles.inputBox, styles.inputfieldBox]}>
                       
                        <TextInput style={styles.inputfield} secureTextEntry placeholder='Password' placeholderTextColor={"white"}></TextInput>
                        <View style={styles.inputbottom}></View>
                    </View>


                    <View style={[styles.BtnContainer]}>

                        <View style={[styles.btn, styles.btnBlack]}>
                            <TouchableOpacity>
                                <Text style={[styles.btnStyling, styles.btnColorBlack]}>SignUp</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.fotter}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <View >
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text  style={styles.footerNavigationBtn}>Login in</Text>
                </TouchableOpacity>
            </View>
                </View>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    Container: { backgroundColor: "white", height:"100%"},
    

    Background: {
        borderWidth: 2,
        height: "100%",
        width: '100%'

    }
    ,textInst:{
        fontSize:20,
        marginTop:5
    }
    , InnerDiv: {

        padding: 20,
        
    }, Text: {
        fontSize: 35,
        // color: 'white',
        fontWeight: 'bold'
        // borderWidth:2,

    },
   Input: {
        height:'73%',
        
        backgroundColor: '#ff2c54',
        marginTop: 40,
        paddingVertical:40,
        paddingHorizontal:20,
        borderTopRightRadius:50,
        // borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        borderTopLeftRadius:50
    }, inputBox: {
        // marginTop: 40
    }
    , inputfieldBox: {
        borderWidth: 1,
        borderColor: 'white',
        marginBottom:25,
        padding:10
    }
    , InputPlaceholders: {
        fontSize: 15,
        color: 'white',
        fontWeight: '600',

    }, inputfield: {
        height: 40,
        color: 'white',
        marginLeft: 4,
        fontSize: 20,
        

    }, inputbottom: {
        // borderWidth: 1,
        borderColor: 'white'
    },
    BtnContainer: {

        marginTop:5,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        

    },
    btnStyling: {
        fontSize: 20,
        color: 'black'
    },

    btn: {
        // backgroundColor: 'white',
        paddingHorizontal: 85,
        paddingVertical: 13
        , borderRadius: 20
    },
    btnBlack: {
        backgroundColor: 'white',
        color: 'black'
    },
    btnColorBlack: {
        color: 'black'
    },
    
    
   fotter:{
    marginTop:15,
   
    flexDirection:'row',
   
    justifyContent:'center'
    
    
   },
   footerText:{
    fontSize:15,
    fontWeight:'bold'
   },
   footerNavigationBtn:{
    fontSize:16,
    color:"#ff2c54",
    fontWeight:'bold'
   }
    
})
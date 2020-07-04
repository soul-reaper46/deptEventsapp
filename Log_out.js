import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import firebase from 'firebase';
require('firebase/auth')

export default class Log_out extends React.Component {

    handleLogout = () => {
        firebase
        .auth()
        .signOut()
        .then(() => this.props.navigation.navigate('Home'))
      }
   

   render() {
     return (
       <View>
         { console.disableYellowBox = true }
         <StatusBar backgroundColor = "#009387" barStyle = "light-content"/>
         <View style = {styles.button1}>
         <Text style={[styles. textSign2, {color : "#009387"}]}>LOG OUT</Text>
         </View>
         <View style = {styles.button}>
        

                   <TouchableOpacity style={[styles.signIn, styles.loginButton]} 
                      onPress={this.handleLogout}>
                    <Text style={styles. textSign1}>Log Out</Text>
                    </TouchableOpacity>
                    </View>
                    
       </View>
      );
    }
  }

  const styles = StyleSheet.create({
   
    button : {
        alignItems : 'center',
        margin: 50,
        marginTop : 15
    },
    button1 : {
      alignItems : 'center',
      margin: 10
  },
    signIn : 
    {
        width : '100%',
        height : 50,
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 10
    },
    textSign : {
        fontSize : 18,
        fontWeight : 'bold',
    },
    
      loginButton: {
        backgroundColor: '#009387',
      },
    textSign1 : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 16
    },
    textSign2: {
      color : 'white',
      fontWeight : 'bold',
      fontSize : 25
  }
});






import React, { Component } from 'react';
import { Text, View, StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Zocial1 from 'react-native-vector-icons/Zocial';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
require('firebase/auth')

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checktext : false,
      hidePassword: true 
    }
  };

  textInputChange = () => 
  {
    const { email, password } = this.state

    if(email.length!=0){
      this.setState({checktext : true});
    }else {
      this.setState({checktext : false});
    }
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  handleLogin = () => {
    const { email, password } = this.state

    if(email) {
      if(password) {

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('adm_home'))
        .catch(error => this.setState({ errorMessage: error.message }))
      }
      else {
        alert('Please insert Password');
      }
    } 
    else {
      alert('Please insert Email');
    }
  }

   render() {
     return (
      <View style = {styles.container}>
              { console.disableYellowBox = true }
                <StatusBar backgroundColor = "#009387" barStyle = "light-content"/>
             <View style = {styles.header}>
               <Text style = {styles.text_header}>Welcome!!</Text>
             </View>

             <View 
             style = {styles.footer}>
               <ScrollView>
                   <Text style = {styles.text_footer}>Email</Text>
                   <View style = {styles.action}>
                               <Zocial1
                               name = "email"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your Email"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                               keyboardType="email-address"
                               onChangeText={(email) => this.setState({email})}
                               />
                         

                   </View>
                   <Text style = {[styles.text_footer, {marginTop : 30}]}>Password</Text>
                   <View style = {styles.action}>
                               <FontAwesome
                               name = "lock"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your Password"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                               secureTextEntry = {this.state.hidePassword}
                               onChangeText={(password) => this.setState({password})}
                               />
                                <TouchableOpacity onPress = { this.managePasswordVisibility }>
                              <Feather  size = {20} color = "grey" name = { ( this.state.hidePassword ) ?  
                              "eye-off" 
                                :
                              "eye"
                              } />
                              </TouchableOpacity>
                         
                  </View>
                  <View style = {styles.button1}>
                  <TouchableOpacity>
                  <Text style={[styles. textSign1, {color : "#009387"}]}>Forgot your password?</Text>
                  </TouchableOpacity>
                  </View>
       
                   <View style = {styles.button}>
                   <TouchableOpacity style={[styles.signIn, styles.loginButton]} 
                   onPress={this.handleLogin} >
                    <Text style={styles. textSign1}>Log In</Text>
                    </TouchableOpacity>
       
                 
                    </View>
                    </ScrollView>
             </View>
            </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: '#009387'
    }, 
    header : {
        flex: 1,
        justifyContent : 'flex-end',
        paddingVertical : 20,
        paddingHorizontal : 25,
    },
    footer : {
        flex: 3,
        backgroundColor : "#fff",
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        paddingVertical : 50,
        paddingHorizontal : 30,
    },
    text_header : {
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 30,
    },
    text_footer : {
        color : '#05375a',
        fontSize : 18
    },
    action : {
        flexDirection : 'row',
        marginTop : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#f2f2f2',
        paddingBottom : 5
    },
    textInput: {
        flex : 1,
        paddingLeft :10,
        color: '#05375a',
        marginTop : -12
    },
    button : {
        alignItems : 'center',
        marginTop : 15
    },
    button1: {
      alignItems : 'center',
      margin : 10
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
    buttonContainer: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:150,
        borderRadius:50,
      },
      loginButton: {
        backgroundColor: '#009387',
      },
    textSign1 : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18
    }
});





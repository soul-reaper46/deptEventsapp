import React, { Component } from 'react';
import { Text, View, StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  Modal,
  Switch,
  Button,
 } from 'react-native';

  import Feather from       'react-native-vector-icons/Feather';
  import Zocial1 from       'react-native-vector-icons/Zocial';
  import FontAwesome from   'react-native-vector-icons/FontAwesome';
  import FontAwesome1 from 'react-native-vector-icons/FontAwesome5';

  import firebase from 'firebase';
import { DrawerItems } from 'react-navigation-drawer';
  require('firebase')

export default class App extends React.Component {



  componentDidMount(){
    firebase.database().ref().on('value', (snapshot)=> {
      var part = []
      snapshot.forEach((child) => {
        part.push({
          key: child.key,
          Name: child.val().Name,
          email: child.val().email,
          PhoneNumber: child.val().PhoneNumber,
          switchValue: child.val().switchValue,
         
          
         
        })
      })
    //console.log(part)
    this.setState({participants:part})
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      email1 : '',
      isVisible: false,
      
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

  toggleSwitch = (value) => 
  {
    this.setState({switchValue : value})
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  checkadmin = () => {
   firebase.database().ref('isee-6a467/').on('value',function (snapshot){
     console.log(snapshot.val(switchValue))
     var sc = switchValue;
   });
  }

  handleLogin = () => {
    const { email, password, sc } = this.state
   
    
    

    if(email){
      if(password){

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      
      .then(() =>  this.props.navigation.navigate(this.state.sc ? 'user_home' : 'adm_home'))
      .catch(error => this.setState({ errorMessage: error.message }))


    }else{
      alert('Please insert Password');
    }
  }else{
      alert('Please insert Email');
    }

  }

  sendPasswordReset = () =>  {
    var auth = firebase.auth();
var emailAddress = this.state.email1;

auth.sendPasswordResetEmail(emailAddress).then(function() {
// Email sent.

alert('Email is sent');

}).catch(function(error) {
// An error happened.
alert('This Email is not registered');
});
  }




   render() {
     return (
      <View style = {styles.container}>
              { console.disableYellowBox = false }
                <StatusBar backgroundColor = "#009387" barStyle = "light-content"/>
             <View style = {styles.header}>
               <Text style = {styles.text_header}>Log In!!</Text>
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

                           {/*   <Text style = {[styles.text_footer, {marginTop : 30}]}>Role</Text>
                   <View style = {styles.action}>
                               <FontAwesome1
                               name = "graduation-cap"
                               color = "#05375a"
                               size = {20}
                               />
                              <Text>{this.state.switchValue ? 'Admin' : 'User'}</Text>
                              <Switch 
                              onValueChange = {this.toggleSwitch}
                              value = {this.state.switchValue}/>
                       
                  
                         
                  </View>
                            */}

                  <View style = {styles.button1}>
                  <TouchableOpacity 
                   onPress = {() => {this.setState({ isVisible: true})}} >
                  <Text style={[styles. textSign1, {color : "#009387"}]}>Forgot your password?</Text>
                  
                  </TouchableOpacity>
                  </View>
       
                   <View style = {styles.button}>
                   <TouchableOpacity style={[styles.signIn, styles.loginButton]} 
                   onPress={this.handleLogin} >
                    <Text style={styles. textSign1}>Log In</Text>
                    </TouchableOpacity>

                    <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {this.state.isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <View  style = {styles.add}  >
              <Text style = {styles.text_footer}>Enter Your Email</Text>
              </View>
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
                               onChangeText={(email1) => this.setState({email1})}
                               />
                               </View>
                               
          
                   <TouchableOpacity style={[styles.signIn1, styles.loginButton1]} 
                   onPress={this. sendPasswordReset} >
                    <Text style={styles. textSign1}>Reset Password</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={[styles.signIn1, styles.loginButton1]} 
                   onPress = {() => {  
                    this.setState({ isVisible:!this.state.isVisible})}      }  >
                    <Text style={styles. textSign1}>Back</Text>
                    </TouchableOpacity>
 
          </View>  
        </Modal>  
                 
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
    },
    container1: {  
      flex: 1,  
      alignItems: 'center',  
      justifyContent: 'center',  
      backgroundColor: '#ecf0f1',  
    },  
    modal: {  
    justifyContent: 'center',  
    alignItems: 'center',   
     
    height: 300 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 80,  
    marginLeft: 40,  
     
     },  
     text: {  
        color: '#3f2949',  
        marginTop: 10  
     },
     signIn1 : 
    {
        width : '100%',
        height : 35,
        justifyContent: 'center',
        alignItems : 'center',
        marginTop : 15,
        borderRadius : 10
    },  
    loginButton1: {
      backgroundColor: '#009387',
    },
    action1 : {
      flexDirection : 'row',
      marginTop : 10,
      borderBottomWidth : 1,
      borderBottomColor : '#f2f2f2',
      paddingBottom : 5,
    
  },
  add : {
    marginBottom : 10
  }
});





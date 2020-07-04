import React from 'react';

import {
   
    StyleSheet,
    ScrollView,
    View,
    Text,
 
    StatusBar,
   
    TextInput,
    Switch,
    TouchableOpacity,
  
  } from 'react-native';
  
  import Icons from 'react-native-vector-icons/MaterialIcons';
  
  import Zocial from 'react-native-vector-icons/Zocial';
  
  import Feather from 'react-native-vector-icons/Feather';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome1 from 'react-native-vector-icons/FontAwesome5';
 
  import firebase from 'firebase';
    require('firebase')


  

  export default class SignUp extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
          Name : '',
          email: '',
          PhoneNumber : '',
          USN : '',
          password : '',
          hidePassword: true,
          switchValue : false, 
        }
      };

      toggleSwitch = (value) => 
      {
        this.setState({switchValue : value})
      }

      managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }


  sendPasswordReset = () =>  {
    var auth = firebase.auth();
var emailAddress = this.state.email;

auth.sendPasswordResetEmail(emailAddress).then(function() {
// Email sent.

alert('Email is sent');

}).catch(function(error) {
// An error happened.
alert('This Email is not registered');
});
  }


      Register=(Name,email,PhoneNumber,USN,password,switchValue)=>{


        if(Name){
          if(email){
            if(PhoneNumber){
              if(USN){
                  if(password){
               

                    firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    
                    .catch(error => this.setState({ errorMessage: error.message }))

                   
                   
        firebase.database().ref().push({Name,email,PhoneNumber,USN,password,switchValue}); 
        this.setState({
          Name:'',
          email:'',
          PhoneNumber:'',
          USN : '',
          password : '',
        })
   


    }else{
        alert('Please insert random password');
    }
       }else{
        alert('Please insert University Seat Number(USN)');
       }
        }else{
         alert('Please insert PhoneNumber');
        }
          }else{
         alert('Please insert Email');
          }
        }else{
      alert('Please insert Name');
        }
    }

    render() {
      
        return (
            <View style = {styles.container}>
              { console.disableYellowBox = true }
                <StatusBar backgroundColor = "#009387" barStyle = "light-content"/>
             <View style = {styles.header}>
               <Text style = {styles.text_header}>Add User Details!!</Text>
             </View>
             <View 
             
              animation="fadeInUpBig"
             style = {styles.footer}>
                 <ScrollView>
                  <Text style = {styles.text_footer}>Name</Text>
                   <View style = {styles.action}>
                               <FontAwesome
                               name = "user-o"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your Full Name"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                              
                               onChangeText={(Name) => this.setState({Name})}
                               value={this.state.Name}
                               />
                      
                   </View>
                   <Text style =  {[styles.text_footer, {marginTop : 30}]}>Email</Text>
                   <View style = {styles.action}>
                               <Zocial
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
                               value={this.state.email}
                               />
            
                   </View>
                   <Text style = {[styles.text_footer, {marginTop : 30}]}>Phone Number</Text>
                   <View style = {styles.action}>
                               <FontAwesome
                               name = "phone"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your Phone Number"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                               keyboardType='numeric'
                               onChangeText={(PhoneNumber) => this.setState({PhoneNumber})}
                               value={this.state.PhoneNumber}
                               />
                       
                   </View>

                   <Text style = {[styles.text_footer, {marginTop : 30}]}>University Seat Number (USN)</Text>
                   <View style = {styles.action}>
                               <FontAwesome1
                               name = "user-check"
                               color = "#05375a"
                               size = {20}
                               />
                               <TextInput 
                               placeholder = "Your University Seat Number"
                               style = {styles.textInput}
                               autoCapitalize = "none"
                             
                               onChangeText={(USN) => this.setState({USN})}
                               value={this.state.USN}
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
                               placeholder = "Random Password"
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

                  <Text style = {[styles.text_footer, {marginTop : 30}]}>Role</Text>
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

       
                   <View style = {styles.button}>
                   <TouchableOpacity style={[styles.signIn, styles.loginButton]} 
                     onPress={()=> this.Register(this.state.Name,this.state.email,this.state.PhoneNumber,this.state.USN,this.state.password,this.state.switchValue)}>
                    <Text style={styles. textSign1}>Create User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.signIn1, styles.loginButton1]} 
                      onPress={this. sendPasswordReset} >
                    <Text style={styles. textSign1}>Reset Password</Text>
                    </TouchableOpacity>
       
                   
                    </View>
                    </ScrollView>

                   
             </View>
            </View>
           );

    };
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:'#009387'
    }, 
    header : {
        flex: 0.25,
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
        marginTop : 30
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
    Icon : {
      color : 'grey',
      height : 20,
      width : 20,
    },
     container6: {
   
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
      fontSize: 20,
      alignSelf: 'center',
      color : '#00bfff',
      paddingLeft : 10,
   },
   signIn1 : 
   {
       width : '100%',
       height : 50,
       justifyContent: 'center',
       alignItems : 'center',
       marginTop : 15,
       borderRadius : 10
   },  
   loginButton1: {
     backgroundColor: '#009387',
   },
});










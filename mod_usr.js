import React , {Component} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
    Dimensions,
    Image,
    TextInput,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    Modal,
  } from 'react-native';
  
  import Icons from 'react-native-vector-icons/MaterialIcons';
  import Zocial from       'react-native-vector-icons/Zocial';
  import Zocial1 from       'react-native-vector-icons/Zocial';
  import Feather from 'react-native-vector-icons/Feather';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import FontAwesome1 from 'react-native-vector-icons/FontAwesome5';
 
  import firebase from 'firebase';
    require('firebase')

export default class Detail extends  Component {
    constructor(props){
        super(props);
        this.state={
            Name: this.props.navigation.state.params.Name,
            email: this.props.navigation.state.params.email,
            key: this.props.navigation.state.params.key,
            PhoneNumber: this.props.navigation.state.params.PhoneNumber,
            USN: this.props.navigation.state.params.USN,
            isVisible: false,
            hidePassword: true,
            eemail : '',
            password : ''
         
        }
    }

    managePasswordVisibility = () =>
    {
      this.setState({ hidePassword: !this.state.hidePassword });
    }
    
    update=(Name, email, key,PhoneNumber,USN)=>{
            firebase.database().ref().child(key).update({Name, email,PhoneNumber,USN})
            this.props.navigation.goBack()
    }

    delete(key){
        
            firebase.database().ref(`${key}`).remove()
            this.props.navigation.goBack()
    }

    ret = () => {
        var eemail = firebase.auth().currentUser().email
      }

      handleLogin = () => {
        const { eemail, password } = this.state
    
        if(password){
          try{
    
        firebase
          .auth()
          .signInWithEmailAndPassword( eemail, password)
      
        alert('Authentication successfull');
    }
          catch(error){
              console.log(error.toString(error));
              alert('Authentication not successfull');
          } 
   
       
      }else{
          alert('Please insert Password');
        }
    
      }


render() {
    return (
        <View style = {styles.container}>
          { console.disableYellowBox = true }
            <StatusBar backgroundColor = "#009387" barStyle = "light-content"/>
         <View style = {styles.header}>
           <Text style = {styles.text_header}>Update or Delete User!!</Text>
         </View>
         <View 
         
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

               
               <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {this.state.isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <View  style = {styles.add}  >
              <Text style = {styles.text_footer}>Enter Admin Password</Text>
              </View>
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
                               
          
                   <TouchableOpacity style={[styles.signIn1, styles.loginButton1]} 
                   onPress={this. handleLogin} >
                    <Text style={styles. textSign1}>Re-Authentication</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={[styles.signIn1, styles.loginButton1]} 
                   onPress = {() => {  
                    this.setState({ isVisible:!this.state.isVisible})}      }  >
                    <Text style={styles. textSign1}>Back</Text>
                    </TouchableOpacity>
 
          </View>  
        </Modal> 
 
 

   
               <View style = {styles.button}>
               <TouchableOpacity style={[styles.signIn, styles.loginButton]} 
               
               onPress = {() => {  
                this.setState({ isVisible:!this.state.isVisible})}      } 
               
               >
                <Text style={styles. textSign1}>Update</Text>
                </TouchableOpacity>
                <Text> </Text> 
                <TouchableOpacity style={[styles.signIn, styles.loginButton]} 
               
               onPress = {() => {  
                this.setState({ isVisible:!this.state.isVisible})}      } 
               
               >
                <Text style={styles. textSign1}>Delete</Text>
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
        backgroundColor: '#009387'
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
        fontSize : 28,
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




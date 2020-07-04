import React, {Component} from 'react';
import {View,Text, FlatList, TouchableOpacity,StyleSheet,Image} from 'react-native';

import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
require('firebase')


export default class participant extends React.Component {

  constructor(props){
    super(props);
    this.state={
        participants:[],
    }
}


componentDidMount(){
  firebase.database().ref().on('value', (snapshot)=> {
    var part = []
    snapshot.forEach((child) => {
      part.push({
        key: child.key,
        Name: child.val().Name,
        email: child.val().email,
        PhoneNumber: child.val().PhoneNumber,
        USN: child.val().USN,
       
        
       
      })
    })
  //console.log(part)
  this.setState({participants:part})
  });
}


   render() {
          console.log(this.state.participants)
     return (
      <ScrollView>
    
      <View style={{alignSelf:'center', flex:1, justifyContent:'center'}}>
      <FlatList style={{width:'100%'}}
      data={this.state.participants}
      keyExtractor={(item)=>item.key}
      renderItem={({item})=>{
        return(
          
          <View>
            
            <TouchableOpacity style={styles.card}  onPress={()=>{this.props.navigation.navigate('mod_usr',{...item})}}>
            
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.Name}</Text>
                <Text style={styles.count}>{item.USN}</Text>
                <Text style={styles.count}>{item.PhoneNumber}</Text>
             
              </View>
            </TouchableOpacity>
          </View>
         
        )
      }}/>
    </View>
    </ScrollView>
    
  )
}
}
const styles = StyleSheet.create({
 
container:{
  flex:1,
  marginTop:20,
  backgroundColor:"#ebf0f7"
},
contentList:{
  flex:1,
},
cardContent: {
  marginLeft:20,
  marginTop:10
},
image:{
  width:90,
  height:90,
  borderRadius:45,
  borderWidth:2,
  borderColor:"#ebf0f7"
},

card:{
  shadowColor: '#00000021',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
  elevation: 12,

  marginLeft: 20,
  marginRight: 20,
  marginTop:20,
  marginBottom : 20,
  backgroundColor:"white",
  padding: 20,

  flexDirection:'row',
  borderRadius:30,
},

name:{
  fontSize:18,
  flex:1,
  alignItems:'center',
  alignContent : 'center',
  color:"#3399ff",
  fontWeight:'bold'
},
count:{
  fontSize:14,
  flex:1,
  alignItems:'center',
  alignContent : 'center',
  color:"#6666ff"
},
followButton: {
  marginTop:10,
  height:35,
  width:100,
  padding:10,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:30,
  backgroundColor: "white",
  borderWidth:1,
  borderColor:"#dcdcdc",
},
followButtonText:{
  color: "#dcdcdc",
  fontSize:12,
},
});






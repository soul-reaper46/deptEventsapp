import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image  } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import create_usr from './create_usr';
import all_usr from './all_usr';
import Log_out from './Log_out';
import mod_usr from './mod_usr';

class NavigationDrawerStructure extends Component {

    toggleDrawer = () => {
       
        this.props.navigationProps.toggleDrawer();
      };

   render() {
     return (
          <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
         
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
      );
    }
  }

  const StackNav1 = createStackNavigator({
   
 
    all_usr:  all_usr,

    mod_usr : mod_usr,
 
});
  const FirstActivity_StackNavigator = createStackNavigator({
  
    First: {
      screen: create_usr,
     
      navigationOptions: ({ navigation }) => ({
        title: 'Create User',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: 'white',
      }),
    },
  });
  
  const Screen2_StackNavigator = createStackNavigator({
   
    Second: {
        screen: StackNav1,
     
      navigationOptions: ({ navigation }) => ({
        title: 'All Users',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: 'white',
      }),
    },
  });


   
    const Screen3_StackNavigator = createStackNavigator({
        //All the screen from the Screen3 will be indexed here
        Third: {
          screen: Log_out,
          navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: "#009387",
            },
            headerTintColor: 'white',
          }),
        },
      });


  



  const DrawerNavigatorExample = createDrawerNavigator({

 
 
    Screen1: {
   
      
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Create User',
        
      },
    },
    Screen2: {
 
      screen: Screen2_StackNavigator,
      
      navigationOptions: {
        drawerLabel: 'All Users',
      },
    },
    Screen3: {
      
        screen: Screen3_StackNavigator,
        
        navigationOptions: {
          drawerLabel: 'Profile',
        },
      },

      

});


export default createAppContainer(DrawerNavigatorExample);





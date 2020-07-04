import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from './App';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';

import adm_home from './adm_home';

import all_usr from './all_usr';

import mod_usr from './mod_usr';
import user_home from './user_home';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Fontisto';




const mySwitch = createSwitchNavigator({
    Home : App,
    adm_home : adm_home,
    user_home : user_home,
   

    
});




const MyNavigator = createAppContainer(mySwitch);


export default class navigation extends Component{
    render(){


        return(<MyNavigator/>
            )

    
    }
}
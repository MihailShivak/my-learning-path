import React from "react";
import { Text, View, ScrollView, Button } from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from "./feed";
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import NoteScreen from "../screensnote";
import AuthLoading from "./authloading";
import SignIn from "./signin";
import Settings from "./settings";
import SignUp from "./signup";

const FeedStack = createStackNavigator({
   Feed: Feed,
   Note: NoteScreen
})
const MyStack = createStackNavigator({
   MyNotes: MyNotes,
   Note: NoteScreen
})
const AuthStack = createStackNavigator({
   SignIn: SignIn,
   SignUp: SignUp,
})
const SettingsStack = createStackNavigator({
   Settings: Settings
})
const FavStack = createStackNavigator({
   Favorites: Favorites,
   Note: NoteScreen
})

const SwitchNavigator = createSwitchNavigator(
   {
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      App: TabNavigator
   },
   {
      initialRouteName: 'AuthLoading'
   }
)

const TabNavigator = createBottomTabNavigator({
   FeedScreen:{
      screen: FeedStack,
      navigationOptions: {
         tabBarLabel: 'Feed',
         tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="home" size={24} color={tintColor}/>
         )
      }
   },
   MyNoteScreen:{
      screen: MyStack,
      navigationOptions:{
         tabBarLabel: 'My Notes',
         tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="notebook" size={24} color={tintColor}/>
         )
      }
   },
   FavoriteScreen:{
      screen: FavStack,
      navigationOptions:{
         tabBarLabel: 'Favorites',
         tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="star" size={24} color={tintColor}/>
         )
      }
   },
   Settings:{
      screen: Settings,
      navigationOptions:{
         tabBarLabel: 'Settings',
         tabBarIcon: ({tintColor}) => {
            <MaterialCommunityIcons name='settings' size={24} color={tintColor}/>
         }
      }
   }
})

export default createAppContainer(SwitchNavigator);
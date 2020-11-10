import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppConatiner,createSwitchNavigator, createAppContainer} from 'react-navigation';
import ReadScreen from './Screens/readScreen';
import WriteScreen from './Screens/writeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
 const TabNavigator = createBottomTabNavigator({
   Write:WriteScreen,
   Read:ReadScreen
 })
 const AppContainer = createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

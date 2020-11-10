import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../Components/AppHeader';

export default class WriteScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
<Text>WriteScreen</Text>
<AppHeader/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    background: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

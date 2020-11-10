import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
          <AppHeader/>
<Text>Welcome to Buzz </Text>

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

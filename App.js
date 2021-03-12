import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Projeto React Native</Text>
      <Text>Insider React Native 2.0</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title:{
    fontSize:25,
    color: '#aa0020'
  }

}) 
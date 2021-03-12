import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

export default function App(){

  function generatePass(){
    alert('clicou')
  }

  return(
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo}></Image>
      <Text style={styles.title}>12 Caracteres</Text>
      <View style={styles.area}>
        <Slider style={{height: 50}} minimumValue={5} maximumValue={15} minimumTrackTintColor="#3300ff"
        maximumTrackTintColor="#0000ff"/>
      </View>
        <TouchableOpacity style={styles.button} onPress={generatePass}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
        <View style={styles.area}>
          <Text style={styles.password}>1234</Text>
        </View>

    </View>
  )
}

// onpress, actives when the button is pressed
// slider needs the props about values
// tracktintColor is related to visual styles from slider


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#f3f3ff'
  },

  logo:{
    marginBottom: 60
  },

  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },

  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7
  },

  button:{
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 25,
    marginBottom: 20
  },

  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },

  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }

}) 
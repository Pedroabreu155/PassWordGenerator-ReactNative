import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import ClipBoard from 'expo-clipboard';



let passwordPossibility = '@!_$#*&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App(){

  const [password, setPassword] = useState(''); 
  const [sliderSize, setSliderSize] = useState(10);

  function generatePass(){

    let pass = '';
    for(let i = 0, n = passwordPossibility.length; i < sliderSize; i++){
      pass += passwordPossibility.charAt(Math.floor(Math.random() * n))
    };
    setPassword(pass);

  }


  function copyPassword(){
    ClipBoard.setString(password);
    alert('Senha Copiada!')
  }


  return(
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo}></Image>
      <Text style={styles.title}>{sliderSize} Caracteres</Text>
      <View style={styles.area}>
        <Slider style={{height: 50}} minimumValue={5} maximumValue={15} minimumTrackTintColor="#3300ff"
        maximumTrackTintColor="#0000ff" value={sliderSize} onValueChange={(value) => setSliderSize(value.toFixed(0))}/>
      </View>
        <TouchableOpacity style={styles.button} onPress={generatePass}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>

        {password !== '' && (
          <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPassword}>{password}</Text>
        </View>
        )}
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
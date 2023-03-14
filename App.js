import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View,TextInput, TouchableOpacity, Text, Image} from 'react-native';
import estilo from './src/estilos';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style = {estilo.container}>
      <LinearGradient
        colors = {['black','#FF4500']}
        style = {estilo.gradientBackColor}
      >
        <Image source = {{uri:'https://img.ifunny.co/images/8fe6b91e0458fb7d63c99b61b9dd023759ee0810ce9d9696a192bc0a08093983_1.jpg'}}
        style ={estilo.image}
/>

    </LinearGradient>

      <View style = {estilo.box}>
        <View style = {estilo.viewIcons}>
          <Feather name="user" size={24} color="black" />
          <TextInput style = {estilo.input} placeholder='e-mail' />
        </View>
        <View style = {estilo.viewIcons}>
          <Ionicons name="key-outline" size={24} color="black" />
          <TextInput style = {estilo.input} placeholder='senha' />
        </View>

          <TouchableOpacity style = {{width:'80%'}}>
            <LinearGradient
              colors ={['#D2691E','#FF4500']}
              style={estilo.button}
              >
                <Text style ={estilo.text} >Logar</Text>
            </LinearGradient>
          </TouchableOpacity>
      
      

      </View>
    </View>
  );
}


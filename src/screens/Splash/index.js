import React, { useEffect } from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import { BgSplash, TickitzWht } from '../../assets/images'

const Splash = ({ navigation }) => {
    useEffect (() => {
        setTimeout( () => {
            navigation.replace('SignIn');
        }, 2000)
    }, [navigation]);
  
    return (
      <ImageBackground source={BgSplash} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={TickitzWht} style={{width: 260, height: 100}} />
        <Text style={{ fontSize: 35, color: '#FFF'}}>Wait, Watch, Wow!</Text>
      </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({})
import { StatusBar, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'	
import OnBoarding1 from '@/assets/svgs/onboarding1'

export default function OnBoardingScreen() {
  return (
    <LinearGradient
      colors={['#250152', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={ styles.container}
    >
      <StatusBar barStyle="light-content" />
      <OnBoarding1 />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
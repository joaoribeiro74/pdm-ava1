import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Login from './login'

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
})

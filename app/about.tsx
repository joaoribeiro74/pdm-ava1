import { View, Text, ImageBackground, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function about() {
  const handleOpenLink = () => {
    Linking.openURL('https://github.com/joaoribeiro74/pdm-ava1')
  }

  return (
    <ImageBackground
      source={require('../assets/Background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">

        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Ionicons name="airplane" size={100} color="black" />
              <Text style={styles.logoTitle}>AirMobile</Text>
            </View>
          </View>

          <View style={styles.about}>
            <Text style={styles.title}>Version 1.0</Text>
            <Text style={styles.title}>Developed by:</Text>
            <View style={styles.aboutMe}>
              <Text style={styles.name}>João Vitor Ribeiro</Text>
              <TouchableOpacity
              onPress={handleOpenLink}>
                <Text style={styles.git}>GitHub</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create ({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150, 
    height: 150, 
    backgroundColor: '#f7f7f7',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  about: {
    backgroundColor: '#f7f7f7',
    flex: 1, 
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
  },
  aboutMe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
  git: {
    color: 'blue',
    fontSize: 18, 
  },
  logoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic'
  },
})
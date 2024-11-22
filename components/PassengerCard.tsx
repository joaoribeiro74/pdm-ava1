import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type PassengerCardProps = {
    name: string,
    avatar: string,
    id: number,
}

export default function PassengerCard({name, avatar, id}: PassengerCardProps) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>ID: {id}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
      width: '100%',
      margin: 5,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: 'black',
      marginRight: 10,
    },
    textContainer: {
      justifyContent: 'center',
    },
    name: {
      fontWeight: 'bold',
    },
  });
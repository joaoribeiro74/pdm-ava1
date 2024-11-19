import { Pressable, Image, StyleSheet, ImageStyle, Platform } from 'react-native'
import React from 'react'

type ImageButtonProps = {
    source: any;
    onPress: () => void;
    style?: ImageStyle;
}

export default function ImageButton({ source, onPress, style }: ImageButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
      <Image source={source} style={[styles.image, style]} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    image: {
      resizeMode: 'cover',
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#333',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },
  });
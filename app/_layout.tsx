import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { ActionSheetProvider, useActionSheet } from '@expo/react-native-action-sheet'
import ActionSheet from '../components/ActionSheet'

export default function _layout() {
    const router = useRouter();

  return (
        <ActionSheetProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                name="list"
                options={{
                    title: 'Lista de passageiros',
                    headerRight: () => (
                            <ActionSheet />
                    ),
                    headerBackVisible: false,
                }}
                />
                <Stack.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    headerRight: () => (
                            <ActionSheet />
                    ),
                }}
                />
            </Stack>
        </ActionSheetProvider>
  )
}
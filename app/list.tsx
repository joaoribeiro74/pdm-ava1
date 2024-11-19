import { View, Text, StyleSheet, SectionList, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { groupPassengersByCountry } from '../helpers/groupPassengers'
import { Ionicons } from '@expo/vector-icons'
import PassengerCard from '../components/PassengerCard'

export default function list() {
    const sections = groupPassengersByCountry();

  return (
    <ImageBackground
        source={require('../assets/Background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      <View style={styles.container}>
        <View style={styles.content}>
        <View style={styles.logoContainer}>
            <Ionicons name="airplane" size={100} color="black" />
          </View>

          <View style={styles.list}>
            <SectionList
              sections={sections}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({ item }) => (
                <PassengerCard
                name={item.passenger_name}
                avatar={item.passenger_avatar}
                id={item.id}
              />
              )}
              renderSectionHeader={({ section }) => (
                <View style={styles.header}>
                  <Text style={styles.headerText}>{section.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
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
  list: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 50,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from '../style'

export default function HomePage({navigation}) {
  return (
    <View style={styles.flex}>
      <View style={styles.flexInner}>
        <Text style={styles.headerTitle}> Let's Know</Text>
        <Text style={styles.subtitle}> The Countries information</Text>
      </View>
      <View style={styles.flexBottom}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CountryList')}>
          <Text style={styles.buttonText}> Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
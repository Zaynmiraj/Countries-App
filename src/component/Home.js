import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CountryList from './CountryList'
import Views from './Views'
import HomePage from './HomePage'

import Asia from '../continet/Asia'
import Europe from '../continet/Europe'
import America from '../continet/America'
import Africa from '../continet/Africa'
import Antarctic from '../continet/Antarctic'
import Ocean from '../continet/Ocean'


const Stack = createNativeStackNavigator();


export default function Home() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} />
        <Stack.Screen name="CountryList" component={CountryList} options={{headerShown : false}}/>
        <Stack.Screen name="Views" component={Views} options={{headerShown: false}} />
        <Stack.Screen name="Asia" component={Asia} options={{headerShown: false}} />
        <Stack.Screen name="Africa" component={Africa} options={{headerShown: false}} />
        <Stack.Screen name="Europe" component={Europe} options={{headerShown: false}} />
        <Stack.Screen name='America' component={America} options={{headerShown: false}} />
        <Stack.Screen name='Antarctic' component={Antarctic} options={{headerShown: false}} />
        <Stack.Screen name='Ocean' component={Ocean} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
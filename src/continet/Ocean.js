import { View, Text,FlatList,Image, TouchableOpacity, } from 'react-native'
import React,{useState} from 'react'
import {Data} from '../component/Data'
import { styles } from '../style'

export default function Ocean({navigation}) {

  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <FlatList 

      data={Data} 
      renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Views', item)}>
      {item.continent === "Oceania" ? <Text style={styles.LineList}> <Image style={{ width:30, height: 15}} source={require('../component/loading.png')} /> {item.name} </Text> : null}
       </TouchableOpacity>
      }

    keyExtractor={({item})=> Math.random(item)}

/>
    </View>
  )
}

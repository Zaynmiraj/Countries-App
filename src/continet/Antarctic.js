import { View, Text,FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Data} from '../component/Data'
import { styles } from '../style'

export default function Antarctic({navigation}) {
  return (
    <View style={{display:'flex', justifyContent:'center',    width: "100%", height:'100%'
  }}>
      <FlatList 

      data={Data} 
      renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Views', item)}>

        {item.continent === "Polar" ? <Text style={styles.LineList}> <Image style={{ width:30, height: 15}} source={require('../component/loading.png')} /> {item.name} </Text> : null}
       </TouchableOpacity>
      }

    keyExtractor={({item})=> Math.random(item)}

/>
    </View>
  )
}

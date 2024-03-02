import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
export default function CountryList({navigation}) {

  return (

      <View style={{flex:1,  backgroundColor: '#7E6EA7', justifyContent:'center'}}>
       <TouchableOpacity style={styles.Touchable} onPress={() => navigation.navigate('Asia',{name:'Asia'})}>
        <Image style={styles.image} source={require('./countries.png')} />
          <Text style={styles.text}> Asia - 48 </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.Touchable} onPress={() => navigation.navigate('America')}>
        <Image style={styles.image} source={require('./countries.png')} />
          <Text style={styles.text}> Americas - 35 </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.Touchable} onPress={() => navigation.navigate('Africa')}>
        <Image style={styles.image} source={require('./countries.png')} />
          <Text style={styles.text}> Africa - 54 </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.Touchable} onPress={() => navigation.navigate('Europe')}>
        <Image style={styles.image} source={require('./countries.png')} />
          <Text style={styles.text}> Europe - 44  </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.Touchable} onPress={() => navigation.navigate('Ocean')}>
        <Image style={styles.image} source={require('./countries.png')} />
          <Text style={styles.text}> Oceania - 14 </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.Touchable} onPress={() => navigation.navigate('Antarctic')}>
        <Image style={styles.image} source={require('./countries.png')} />
          <Text style={styles.text}> Antarctica </Text>
        </TouchableOpacity> 
      </View>
      
  )
}



const styles = StyleSheet.create({
  Touchable : {
    backgroundColor: '#7E6EA7',
    margin: 10,
    elevation:20,
    shadowColor:'black',
    shadowOpacity:1.0,
    shadowOffset:{ width: 10, height : 10},
    height:"10%",
    display:'flex',
    flexDirection:'row',
    padding:10,
    justifyContent:'center',
    alignItems:'center'
  },
  image :{
    height: '60%',
    width:'10%',
    tintColor:'white',
    margin: 10
  },
  text : {
    color:'white',
    fontWeight:'600',
    fontSize:22
  }
})
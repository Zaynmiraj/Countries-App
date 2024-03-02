import { View, Text, StyleSheet,FlatList, Share,Dimensions } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

export default function Views({route}) {
  
  const{name, capital, alpha3Code,callingCodes,region,continent,population,timezones,languages,currencies} = route.params;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${name}, 
         Capital : ${capital} ,
         Calling code : +${callingCodes}, 
         Alpha3Code : ${alpha3Code}, 
         Continent : ${continent},
         Region : ${region}, 
         Time Zone : ${timezones},
         Population : ${population}
        `
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const copyToClipboard = () => {
     Clipboard.setString(name, capital, alpha3Code,callingCodes,region,continent,population,timezones);
    Snackbar.show({
      text: "The information copied",
      duration: Snackbar.LENGTH_SHORT,
    });
  };


  return (
    <View style={{flex : 1, justifyContent:'center', alignItems:'center'}}>
       <View style={styles.block}>
        <View style={{marginVertical:10,
            padding:20,
            backgroundColor:'#8372B2',
            borderBottomColor:'#5A488A',
            borderBottomWidth:2,
            width:'100%'}}>
          <Text style={{textAlign:'center', fontSize:20, color:'white',fontWeight:'900'}}>{name}</Text>
        </View>
        <View style={styles.view} >
          <Text style={styles.title} >Capital : </Text>
          <Text  style={styles.text}> {capital}</Text>
        </View>
        <View style={styles.view}> 
        <FlatList  data={currencies} renderItem={({item}) => <View style={{display:'flex', flexDirection:'row'}}>
          <Text style={styles.title}> Currencies : </Text>
           <Text style={styles.text}>{item.name}</Text> 
          </View>
        }/>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Calling Code : </Text>
           <Text style={styles.text}> +{callingCodes} </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Time zone : </Text>
          <Text style={styles.text}>{timezones}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Region : </Text>
          <Text style={styles.text}> {region}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Short name : </Text>
          <Text style={styles.text}> {alpha3Code}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>Continent : </Text>
          <Text style={styles.text}>{continent}</Text>
          </View>
        <View style={styles.view}>
          <Text style={styles.title}>Population : </Text>
          <Text style={styles.text}>{population}</Text>
        </View>
        <View style={styles.view}> 
        <FlatList  data={languages} renderItem={({item}) => <View style={{display:'flex', flexDirection:'row'}}>
          <Text style={styles.title}> Language : </Text>
           <Text style={styles.text}>{item.name}</Text> 
          </View>
        }/>
        </View>
        <View style={{display:'flex',elevation:20, backgroundColor:'#7E6DAB', width:'100%', flexDirection:'row', justifyContent:"center", alignItems:'center'}}>
          <TouchableOpacity onPress={() => onShare()}><Text style={styles.action}> Share </Text></TouchableOpacity>
          <TouchableOpacity onPress={copyToClipboard}><Text style={styles.action}> Copy </Text></TouchableOpacity>
        </View>
       </View>
    </View>
  )
}


const styles = StyleSheet.create({
  block : {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin:15,
    backgroundColor:'#7E6DAB',
    alignItems:'center',
    justifyContent:'center'

  },
  view : {
  display:'flex',
  alignItems:'center',
  flexDirection:'row',
  marginVertical:6,
  padding:10,
  backgroundColor:'#7E6DAB',
  width:'100%'
  },
  text :{
    fontSize:15,
    color:'white',
    fontWeight:'400',
    textAlign:'left',
    width:'100%',
    marginHorizontal:20
  },
  title:{
    fontSize:18,
    fontFamily:'lotto',
    fontWeight:'500',
    color:'#eeea'
  }
  ,
  action:{
    elevation:5,
    marginHorizontal:25,
    padding:10,
    fontSize:18,
    color:"white",
    backgroundColor:'#7E6DAB'

  }
})




  
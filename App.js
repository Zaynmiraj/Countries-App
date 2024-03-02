import 'react-native-gesture-handler'
import { View, Text,Appearance, Linking, Share, Platform,SafeAreaView } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/component/Home'
import { BannerAd,BannerAdSize } from '@react-native-admob/admob';

const Drawer = createDrawerNavigator();

import * as StoreReview from 'react-native-store-review';

StoreReview.requestReview();
const APP_STORE_LINK = `https://apps.apple.com/app/id=countrydetail?action=write-review`;
const PLAY_STORE_LINK = `https://play.google.com/store/apps/details?id=com.countrydetail`;

const STORE_LINK = Platform.select({
  ios: APP_STORE_LINK,
  android:PLAY_STORE_LINK,
});
const openReviewInStore = () => Linking.openURL(STORE_LINK)





export default function App() {
    return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer theme={MyTheme} >
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{
        drawerStyle:{
          backgroundColor:'#7E6EA7'
        },
        headerTitle:'Countries info',
        headerTitleAlign:'center',

        headerStyle:{
          backgroundColor:'#7E6EA7',
        },
        headerTintColor:'white'

      }}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
     <BannerAd
      size={BannerAdSize.BANNER} 
      unitId="ca-app-pub-1662853246746272/1227274039"
      />
     </SafeAreaView>

  )
}


function CustomDrawer(props) {
  return(
    <>
    <DrawerItemList {...props} />
    <DrawerItem label="Developer " onPress={()=> Linking.openURL('mailto:zayn.miraj@gmail.com') } />
    <DrawerItem label="Feedback" onPress={() => openReviewInStore()} />
    <DrawerItem label="Share" onPress={() => onShare()} />
    </>
  )
}




const onShare = async () => {
  try {
    const result = await Share.share({
      message:'https://play.google.com/store/apps/details?id=com.countrydetail'
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

const MyTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: '#7E6EA7',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
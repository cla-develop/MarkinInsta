import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import SplashImage from '../images/SplashImage.png';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SplashPage() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('JWT').then(value => {
        console.log(value);
        if (value !== null) {
          navigation.replace('Body');
        } else {
          navigation.replace('Walkthrough');
          console.log(value);
        }
      });
    }, 1000);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}></View>
  );
}

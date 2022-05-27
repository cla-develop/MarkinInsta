import {View, Text, Image} from 'react-native';
import React from 'react';
import Spinner from '../images/Spinner.gif';

export default function Loading() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={Spinner} style={{width: 100, height: 100}} />
    </View>
  );
}

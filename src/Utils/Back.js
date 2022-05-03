import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from '../component/Icons/Icons';
import {useNavigation} from '@react-navigation/native';
export default function Back() {
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'center', height: 40}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', left: '5%'}}>
        <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

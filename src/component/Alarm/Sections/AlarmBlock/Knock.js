import React from 'react';
import {View, Text, Image} from 'react-native';
import AlarmList from '../AlarmList';
export default function Knock(props) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={props.img}
          style={{width: 40, height: 40, borderRadius: 10, marginLeft: '5%'}}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 15,
            fontFamily: 'NotoSansKR-Medium',
          }}>
          {props.uName}
        </Text>
        <Text style={{fontSize: 15, fontFamily: 'NotoSansKR-Regular'}}>
          님이 똑똑 두들겼어요!
        </Text>
      </View>
    </View>
  );
}

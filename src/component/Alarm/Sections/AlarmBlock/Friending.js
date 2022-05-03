import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Friending(props) {
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
          님이 프렌징 신청을 보냈어요.
        </Text>
      </View>
    </View>
  );
}

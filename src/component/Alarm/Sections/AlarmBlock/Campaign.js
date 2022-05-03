import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Campaign(props) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={props.img}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: '5%',
          }}
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
          와 함께하는 캠페인이 오픈됐어요.
        </Text>
      </View>
    </View>
  );
}

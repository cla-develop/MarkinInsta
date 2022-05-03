import React from 'react';
import {View, Text} from 'react-native';

export default function RTiltle() {
  return (
    <View style={{flexDirection: 'row', marginTop: 20, marginLeft: '5%'}}>
      <Text
        style={{
          fontSize: 15,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        순위
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 75,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        계정
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 80,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        진짜 영항력
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginLeft: 15,
          fontFamily: 'NotoSansKR-Medium',
        }}>
        팔로워
      </Text>
    </View>
  );
}

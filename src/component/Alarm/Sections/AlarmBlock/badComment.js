import React from 'react';
import {View, Text, Image} from 'react-native';
import feedback from '../../../../images/feedback.png';
export default function BadComment(props) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            marginLeft: '5%',
            width: 40,
            height: 40,
            backgroundColor: '#CFC2FF',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={feedback} style={{width: 20, height: 20}} />
        </View>

        <Text
          style={{
            fontSize: 15,
            fontFamily: 'NotoSansKR-Regular',
            marginLeft: 10,
          }}>
          악플로 보이는 댓글 {props.Bnum}개를 발견했어요.
        </Text>
      </View>
    </View>
  );
}

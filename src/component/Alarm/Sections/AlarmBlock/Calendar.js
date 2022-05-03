import React from 'react';
import {View, Text, Image} from 'react-native';
import CalendarImg from '../../../../images/calendar.png';
export default function Calendar() {
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
          <Image source={CalendarImg} style={{width: 20, height: 20}} />
        </View>

        <Text
          style={{
            fontSize: 15,
            fontFamily: 'NotoSansKR-Regular',
            marginLeft: 10,
          }}>
          오늘 업로드 예정인 피드가 있어요.
        </Text>
      </View>
    </View>
  );
}

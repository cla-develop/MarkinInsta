import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import Icons from '../../../Icons/Icons';
import Refund from '../images/Refund.png';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../Styles';

export default function RefundFinish({route}) {
  const {Point} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', height: 500}}>
        <Image source={Refund} style={{width: 80, height: 80}} />
        <Text
          style={{
            fontFamily: 'SpoqaHanSansNeo-Medium',
            fontSize: 30,
            marginTop: 50,
          }}>
          {Point}원
        </Text>
        <Text style={{fontFamily: 'NotoSansKR-Regular', fontSize: 24}}>
          환급 신청 완료
        </Text>
      </View>
      <View
        style={{padding: '5%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.NotoReg15, {color: '#565656', marginTop: 60}]}>
          포인트 매달 15일, 말일에 환급됩니다.
        </Text>
        <View style={{width: '100%', marginTop: 60}}>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Body'}],
              })
            }>
            <View style={[styles.btnView, {backgroundColor: '#7553FF'}]}>
              <Text style={[styles.NotoMe18, {color: 'white'}]}>완료하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../../Styles';
import fix from '../../images/fix.png';
export default function FixFinish() {
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', height: 650}}>
        <Image source={fix} style={{width: 112, height: 125}} />
        <Text
          style={{
            fontFamily: 'NotoSansKR-Bold',
            fontSize: 24,
            marginTop: 30,
          }}>
          회원 정보 수정이
        </Text>
        <Text style={{fontFamily: 'NotoSansKR-Regular', fontSize: 24}}>
          완료되었습니다.
        </Text>
      </View>
      <View
        style={{padding: '5%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '100%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('SetUp')}>
            <View style={[styles.btnView, {backgroundColor: '#181818'}]}>
              <Text style={[styles.NotoMe18, {color: 'white'}]}>
                설정으로 돌아가기
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

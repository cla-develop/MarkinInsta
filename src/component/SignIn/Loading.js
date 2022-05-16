import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LoadingImage from '../../images/Loading.png';
import styles from '../Styles';
export default function Loading() {
  const navigation = useNavigation();
  const [value, setvalue] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (value === 1) {
  //       navigation.reset({
  //         index: 0,
  //         routes: [{name: 'Body'}],
  //       });
  //     }
  //   }, 100000);
  // }, []);
  return (
    <View style={styles.allView}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Image
          source={LoadingImage}
          style={{width: 150, height: 150, marginTop: 30}}
        />
        <Text
          style={{fontFamily: 'NotoSansKR-Bold', fontSize: 24, marginTop: 30}}>
          마킨 AI를 통해
        </Text>
        <Text
          style={{fontFamily: 'NotoSansKR-Bold', fontSize: 24, marginTop: 5}}>
          계정을 분석하고 있어요
        </Text>
        <Text
          style={{
            fontFamily: 'NotoSansKR-Regular',
            fontSize: 16,
            color: '#747474',
            marginTop: 200,
          }}>
          약 20초 정도 소요됩니다.
        </Text>
      </View>
    </View>
  );
}

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import markin from './images/markinConnect.png';
import {useNavigation} from '@react-navigation/native';
export default function LinkFinish() {
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View style={{width: 200, marginLeft: 100}}>
        <Image style={{width: 100, height: 100}} source={markin} />
        <View style={styles.fourthView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.purpleText}>계정연결</Text>
            <Text style={styles.blackText}>이</Text>
          </View>
          <Text style={styles.blackText}>완료되었습니다.</Text>
        </View>
      </View>

      <View style={{top: 250}}>
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Body'}],
            })
          }>
          <View style={styles.purpleBtn}>
            <Text style={styles.instaText}>계정 연결 완료하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  blackText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 20,
    color: '#424242',
  },
  allView: {
    flex: 1,
    backgroundColor: '#F9F9F9',

    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 20,
    color: '#7553FF',
  },
  fourthView: {
    position: 'absolute',
    top: 120,
    left: -20,
    alignItems: 'center',
  },
  purpleBtn: {
    backgroundColor: '#7553FF',
    width: 360,
    height: 60,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instaText: {
    fontFamily: 'NotoSansKR-Medium',
    color: 'white',
    fontSize: 18,
  },
});

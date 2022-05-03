import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function UnOAuth() {
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'center', marginTop: '10%'}}>
      <Text style={styles.topText}>계정을 연결해주세요</Text>
      <Text style={styles.midText}>인스타그램 계정 연결이 필요합니다</Text>
      <TouchableOpacity onPress={() => navigation.navigate(`OAuthMain`)}>
        <View style={styles.LinkBtn}>
          <Text style={{fontFamily: 'NotoSansKR-Medium', color: 'white'}}>
            계정 2단계 연결
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  topText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
    color: '#181818',
  },
  midText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
    color: '#747474',
  },
  LinkBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7553FF',
    borderRadius: 10,
    width: 120,
    height: 40,
    marginTop: 20,
  },
});

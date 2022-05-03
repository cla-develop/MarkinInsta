import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Category from './Sections/Category';
import Icons from '../../../Icons/Icons';
import Activities from './Sections/Activities';
export default function MyAbility({navigation}: any) {
  return (
    <View style={styles.allView}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
      </TouchableOpacity>
      <View style={{marginTop: 35}}>
        <Text style={styles.TopText}>나에게 적합한 광고 단가는?</Text>
        <Text style={styles.subText}>
          게시물 반응이 좋은 시간대를 알 수 있어요.
        </Text>
        <Text style={styles.CatText}>적합한 광고 카테고리</Text>
      </View>
      <Category />
      <View>
        <Text style={styles.CatText}>이런 광고, 공구는 어때요?</Text>
        <Activities />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: '5%',
    backgroundColor: '#F9F9F9',
  },
  TopText: {fontSize: 24, fontFamily: 'NotoSansKR-Bold'},
  subText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Medium',
    color: '#747474',
    marginTop: 5,
  },
  CatText: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Bold',
    marginTop: 25,
  },
});

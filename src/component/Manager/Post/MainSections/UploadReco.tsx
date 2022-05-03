import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icons from '../../../Icons/Icons';
export default function UploadReco() {
  return (
    <View style={styles.UnOAuthView}>
      <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
        <Text style={styles.TopText}>업로드 추천 시간</Text>
        <View style={{position: 'absolute', right: 15}}>
          <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 30, height: 250}}>
        <View style={styles.GraphView}>
          <View style={styles.greyGraph}></View>
          <Text style={styles.greyText}>8:00PM 일요일</Text>
        </View>
        <View style={styles.GraphView}>
          <View style={styles.greyGraph}></View>
          <Text style={styles.greyText}>1:00AM 목요일</Text>
        </View>
        <View style={styles.GraphView}>
          <Text style={styles.purpleText}>98명</Text>
          <View style={styles.purpleGraph}></View>
          <Text style={[styles.ageText]}>11:00AM 월요일</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  UnOAuthView: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 18,
    marginTop: 20,
    paddingBottom: 20,
  },
  purpleGraph: {
    backgroundColor: '#7603FF',
    width: 65,
    marginBottom: 10,
    borderRadius: 13,
    height: 100,
  },
  greyGraph: {
    backgroundColor: '#EDEDED',
    width: 65,
    marginBottom: 10,
    borderRadius: 13,
    height: 50,
  },
  GraphView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 25,
  },
  ageText: {fontFamily: 'SpoqaHanSansNeo-Medium', fontSize: 12},
  greyText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 12,
    color: '#9A9A9A',
  },
  purpleText: {
    marginBottom: 5,
    fontFamily: 'NotoSansKR-Bold',
    color: '#7553FF',
  },
  percentText: {marginTop: 2, fontFamily: 'SpoqaHanSansNeo-Medium'},
});

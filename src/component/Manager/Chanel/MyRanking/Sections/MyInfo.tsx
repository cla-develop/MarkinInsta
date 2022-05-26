/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import noprofile from '../../../../../images/noprofile.png';
export default function MyInfo(props: any) {
  // const fNum = props.followerCount.toString();
  // var fNlen = fNum.length;
  // var fff = fNum.slice(0, fNlen - 2);
  // const underFK =
  //   '0' +
  //   fff.slice(fff.length - 2, fff.length - 1) +
  //   '.' +
  //   fff.slice(fff.length - 1);
  // const overFK =
  //   fff.slice(fff.length - 2, fff.length - 1) + '.' + fff.slice(fff.length - 1);
  return (
    <View style={styles.myRankView}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center', width: '12%'}}>
          <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: 16}}>
            {props.MyRank}
          </Text>
        </View>
        <View
          style={{justifyContent: 'center', marginRight: 15, marginLeft: 5}}>
          <Image
            source={
              props.MyProfileImg === '' || props.MyProfileImg === null
                ? noprofile
                : {uri: props.MyProfileImg}
            }
            style={{
              height: 35,
              width: 35,
              borderRadius: 35 / 2,
            }}
          />
        </View>
        <View>
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: 16}}>
            {props.UserName}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 3}}>
            <Text style={styles.blackText}>진짜 영향력</Text>
            {props.realFollowerCnt >= 1000000 ? (
              <Text style={styles.purpleText}>
                {(props.realFollowerCnt / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.purpleText}>
                {(props.realFollowerCnt / 1000).toFixed(1)} k
              </Text>
            )}

            <Text style={styles.blackText}>
              {'     '}
              팔로워 수
            </Text>
            {props.followerCount >= 1000000 ? (
              <Text style={styles.bNText}>
                {(props.followerCount / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.bNText}>
                {(props.followerCount / 1000).toFixed(1)} k
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  myRankView: {
    marginLeft: '5%',
    width: '90%',
    height: 85,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 2,
    paddingLeft: '5%',
  },
  purpleText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 13,
    marginTop: 1.8,
    marginLeft: 5,
    color: '#7553FF',
  },
  bNText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 13,
    marginTop: 1.8,
    marginLeft: 5,
  },
  blackText: {fontFamily: 'NotoSansKR-Regular', fontSize: 12},
});

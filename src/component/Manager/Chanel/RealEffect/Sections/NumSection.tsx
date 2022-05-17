import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function NumSection(props: any) {
  return (
    <View style={styles.MainView}>
      <View style={styles.innerView}>
        <Text style={styles.TopText}>진짜 영향력</Text>

        {props.realFollower >= 1000000 ? (
          <Text style={[styles.SubText, {color: '#7553FF'}]}>
            {(props.realFollower / 1000000).toFixed(1)} M
          </Text>
        ) : (
          <Text style={[styles.SubText, {color: '#7553FF'}]}>
            {(props.realFollower / 1000).toFixed(1)} k
          </Text>
        )}
      </View>
      <View style={{height: '100%', width: '0.1%', justifyContent: 'center'}}>
        <View style={{backgroundColor: '#DEDEDE', height: '60%'}}></View>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.TopText}>팔로워 수</Text>
        {props.Follower >= 1000000 ? (
          <Text style={[styles.SubText]}>
            {(props.Follower / 1000000).toFixed(1)} M
          </Text>
        ) : (
          <Text style={[styles.SubText]}>
            {(props.Follower / 1000).toFixed(1)} k
          </Text>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  MainView: {
    width: '95%',
    height: 90,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 18,
    marginTop: 18,
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
  },
  innerView: {
    width: '49.9%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopText: {
    marginBottom: 10,
    fontFamily: 'NotoSansKR-Regular',
    color: '#181818',
    fontSize: 16,
  },
  SubText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 18,
  },
});

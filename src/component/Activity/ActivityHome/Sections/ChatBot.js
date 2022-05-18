import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ads from './images/ads.png';
export default function ChatBot() {
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row', marginLeft: 25}}>
        <View style={{marginTop: 5}}>
          <Text style={styles.uptext}>나와 관련된 활동 놓치지 않도록</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.blueText}>챗봇</Text>
            <Text style={styles.belowText}>에게 활동 알림을 받아보세요</Text>
          </View>
        </View>
        <Image source={ads} style={{width: 52, height: 52, marginLeft: 32}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '95.5%',
    height: 92,
    backgroundColor: '#E1EDF8',
    borderRadius: 7,
    justifyContent: 'center',
  },
  uptext: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 12,
    color: '#181818',
  },
  blueText: {
    fontFamily: 'NotoSansKR-Bold',
    color: '#018AF8',
    fontSize: 16,
  },
  belowText: {
    fontFamily: 'NotoSansKR-Medium',
    color: '#181818',
    fontSize: 16,
  },
});

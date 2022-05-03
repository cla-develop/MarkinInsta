/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import chatBotIcon from '../../../images/chatbot.png';
export default function ChatBot() {
  return (
    <View style={styles.outView}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 18}}>
        <Text style={styles.boldText}>챗봇</Text>
        <Text style={styles.mediumText}>에게 </Text>
      </View>
      <View style={{marginLeft: 20, marginTop: 5, flexDirection: 'row'}}>
        <Text style={styles.boldText}>계정 관리 알람</Text>
        <Text style={styles.mediumText}>을 받으세요 :)</Text>
      </View>
      <Image
        source={chatBotIcon}
        style={{
          width: 60,
          height: 60,
          position: 'absolute',
          right: 20,
          top: 15,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: '90%',
    height: 90,
    marginLeft: '5%',
    borderRadius: 18,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: '#181818',
    elevation: 6,
  },
  boldText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'NotoSansKR-Bold',
  },
  mediumText: {fontSize: 16, fontFamily: 'NotoSansKR-Medium', color: 'white'},
});

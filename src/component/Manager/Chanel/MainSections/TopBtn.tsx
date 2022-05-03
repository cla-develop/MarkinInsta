import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function TopBtn(props: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => props.setchanelAndPost(!props.chanelAndPost)}>
        <View
          style={[
            styles.TopBtn,
            {
              backgroundColor:
                props.chanelAndPost === true ? 'black' : '#F9F9F9',
            },
          ]}>
          <Text
            style={
              props.chanelAndPost === true
                ? styles.topwhiteFont
                : styles.topBlackFont
            }>
            계정
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setchanelAndPost(!props.chanelAndPost)}>
        <View
          style={[
            styles.TopBtn,
            {
              backgroundColor:
                props.chanelAndPost === false ? 'black' : '#F9F9F9',
              marginLeft: 10,
            },
          ]}>
          <Text
            style={
              props.chanelAndPost === false
                ? styles.topwhiteFont
                : styles.topBlackFont
            }>
            게시물
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  TopBtn: {
    width: 75,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
  },
  topBlackFont: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    color: '#181818',
    fontSize: 18,
  },
  topwhiteFont: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    color: 'white',
    fontSize: 18,
  },
});

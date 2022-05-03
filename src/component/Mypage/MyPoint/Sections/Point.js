/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Coin from '../images/Coin.png';
import Icons from '../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
export default function Point(props) {
  const navigation = useNavigation();
  return (
    <View style={{padding: '5%'}}>
      <View style={styles.greyView}>
        <View style={styles.pointView}>
          <Text style={styles.pointTitle}>현재 포인트</Text>
          <Text style={styles.pointText}>
            {props.myPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <View
            style={{width: 0.5, height: 50, backgroundColor: '#9C9C9C'}}></View>
        </View>
        <View style={styles.pointView}>
          <Text style={styles.pointTitle}>누적 포인트</Text>
          <Text style={styles.pointText}>
            {props.accumulatedPoint
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            P
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Refund', {myPoint: props.myPoint})}>
        <View style={styles.pupleView}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.whiteText}>포인트 환급하기</Text>
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10, width: 150}}>
            <Image source={Coin} style={{width: 23, height: 23}} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Icons.AntDesign name="right" size={20} color="white" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  pointTitle: {fontFamily: 'NotoSansKR-Regular', fontSize: 16},
  pointText: {fontFamily: 'NotoSansKR-Bold', fontSize: 20},
  whiteText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  pupleView: {
    flexDirection: 'row',
    backgroundColor: '#7553FF',
    borderRadius: 10,
    height: 82,
    padding: '7%',
    marginTop: 18,
    marginBottom: 20,
  },
  pointView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '49.8%',
  },
  greyView: {
    backgroundColor: '#F3F3F3',
    borderRadius: 9,
    flexDirection: 'row',
    height: 105,
  },
});

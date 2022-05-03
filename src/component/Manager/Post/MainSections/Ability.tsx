import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icons from '../../../Icons/Icons';
import saveMoney from '../../../../images/saveMoney.png';
export default function Ability(props: any) {
  return (
    <View style={{marginTop: 15}}>
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>계정 광고 역량</Text>
          <View style={{position: 'absolute', right: 15}}>
            <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%', padding: '5%'}}>
          <View style={styles.ImageView}>
            <Image source={saveMoney} style={{width: 66, height: 66}} />
          </View>
          <View style={{justifyContent: 'center', paddingTop: 5}}>
            <Text style={{fontFamily: 'NotoSansKR-Medium', fontSize: 16}}>
              나의 적정 협찬 비용은
            </Text>
            <Text style={styles.purpleText}>
              {props.lowerCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              원 ~{' '}
              {props.upperCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              원
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    width: '95%',
    height: 162,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  ImageView: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#7553FF',
  },
});

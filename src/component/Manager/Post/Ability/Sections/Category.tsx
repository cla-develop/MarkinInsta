import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Category() {
  const fashion = require('../../../../../images/fashion.png');
  const pet = require('../../../../../images/pet.png');
  const beauti = require('../../../../../images/beauti.png');
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ImageView}>
          <Image source={fashion} style={{width: 58, height: 58}} />
          <Text style={styles.NameText}>패션</Text>
        </View>
        <View style={styles.ImageView}>
          <Image source={pet} style={{width: 58, height: 58}} />
          <Text style={styles.NameText}>반려동물</Text>
        </View>
        <View style={styles.ImageView}>
          <Image source={beauti} style={{width: 58, height: 58}} />
          <Text style={styles.NameText}>뷰티</Text>
        </View>
      </View>
      <View style={{paddingLeft: '5%', marginTop: '8%'}}>
        <Text style={styles.blackText}>서병준님의 계정은</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.purpleText}>패션,반려동물,뷰티</Text>
          <Text style={styles.blackText}> 게시물로 이루어져 있어요.</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    width: '95%',
    height: 236,
    borderRadius: 18,
    backgroundColor: 'white',
    marginTop: 20,
    paddingTop: 30,
  },
  ImageView: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  NameText: {marginTop: 10, fontFamily: 'NotoSansKR-Medium', fontSize: 16},
  blackText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
  },
  purpleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    color: '#7553FF',
  },
});

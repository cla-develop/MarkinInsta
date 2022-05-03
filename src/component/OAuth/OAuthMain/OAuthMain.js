/* eslint-disable react-native/no-inline-styles */
// tslint:disable-next-line: jsx-no-lambda
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icons from '../../Icons/Icons';
import OAuthM from './OAuthM.png';
export default function OAuthMain() {
  const navigation = useNavigation();
  const Professional = 'Professional';
  const InstaFace = 'InstaFace';
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{paddingLeft: '5%'}}>
        <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.GreyView}>
        <View style={{justifyContent: 'center', marginLeft: 40}}>
          <Text style={styles.TopText}>
            2단계연결을 진행하시려면 {'\n'}아래의 절차를 따라 진행해주세요.
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginLeft: 50}}>
          <Image source={OAuthM} style={{width: 55, height: 55}} />
        </View>
      </View>
      {/* 이동 버튼들 */}
      <View style={{paddingLeft: '5%', marginTop: 100}}>
        <TouchableOpacity onPress={() => navigation.navigate(Professional)}>
          <View style={styles.whiteBtn}>
            <Text style={styles.KoText}>1단계 : 프로페셔널 계정으로 전환</Text>
            <Icons.AntDesign
              name="right"
              style={styles.RIcon}
              color="#747474"
              size={20}
            />
          </View>
        </TouchableOpacity>
        {/* <View style={styles.unTextView}>
          <Text style={styles.underText}>이미 완료했어요 👉 </Text>
          <Text
            style={[
              styles.underText,
              {
                textDecorationLine: 'underline',
              },
            ]}>
            건너뛰기
          </Text>
        </View> */}
        <TouchableOpacity onPress={() => navigation.navigate(InstaFace)}>
          <View style={styles.whiteBtn}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.KoText}>2단계 : </Text>
              <Text style={styles.EngText}>Facebook</Text>
              <Text style={styles.KoText}> 연결</Text>
            </View>
            <Icons.AntDesign
              name="right"
              style={styles.RIcon}
              color="#747474"
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LinkMarkin')}>
          <View style={styles.whiteBtn}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.KoText}>3단계 :</Text>
              <Text style={styles.EngText}> MARKIN</Text>
              <Text style={styles.KoText}>과 연결</Text>
            </View>
            <Icons.AntDesign
              name="right"
              style={styles.RIcon}
              color="#747474"
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 60,
  },
  TopText: {
    color: 'white',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
  },
  GreyView: {
    flexDirection: 'row',
    height: 90,
    width: '100%',
    backgroundColor: '#747474',
    marginTop: 10,
  },
  underText: {
    fontFamily: 'NotoSansKR-Medium',
    color: '#747474',
    fontSize: 14,
  },
  purpleView: {
    width: '95%',
    backgroundColor: '#7553FF',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
  },
  proText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
    color: 'white',
  },
  unTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '-5%',
    marginTop: 20,
  },
  whiteBtn: {
    width: '95%',
    height: 80,
    borderRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DEDEDE',
    borderWidth: 1,
    marginTop: 18,
    paddingLeft: 50,
    backgroundColor: '#E1E1E1',
  },
  EngText: {
    fontFamily: 'Roboto-Medium',
    color: '#424242',
    fontSize: 16,
    marginTop: 3,
  },
  KoText: {fontFamily: 'NotoSansKR-Medium', color: '#424242', fontSize: 16},
  RIcon: {position: 'absolute', right: 20},
});

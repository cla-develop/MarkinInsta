/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icons from '../../Icons/Icons';
import MyCarousel from './MyCarosel';
export default function LinkMarkin() {
  const navigation = useNavigation();
  const [Page, setPage] = useState(0);
  return (
    <View style={styles.allView}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>MARKIN과 연결하기</Text>
      </View>
      {Page === 0 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>
              Instagram과 연결된 facebook 계정
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>으로 로그인을 진행해주세요.</Text>
          </View>
        </View>
      )}
      {Page === 1 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>연결할 계정을 선택</Text>
            <Text style={styles.MediumText}> 후 다음 버튼을 눌러주세요.</Text>
          </View>
        </View>
      )}
      {Page === 2 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>
              인스타 계정과 연결된 페이지를 선택
            </Text>
            <Text style={styles.MediumText}> 후</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>다음 버튼을 눌러주세요.</Text>
          </View>
        </View>
      )}
      {Page === 3 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>모든 권한을 허용</Text>
            <Text style={styles.MediumText}>한 후 완료 버튼을 눌러주세요.</Text>
          </View>
        </View>
      )}
      {Page !== 4 ? (
        <View style={{marginTop: 33}}>
          <MyCarousel Page={Page} setPage={setPage} />
        </View>
      ) : (
        <View style={{marginTop: 210, alignItems: 'center'}}>
          <MyCarousel Page={Page} setPage={setPage} />
        </View>
      )}

      {/* 페이지 도트 */}
      {Page !== 4 && (
        <View
          style={{
            marginTop: 33,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={{marginRight: 20, marginLeft: 20}}>
            {Page === 0 ? (
              <Icons.FontAwesome name="circle" size={10} color="#7553FF" />
            ) : (
              <Icons.FontAwesome name="circle" size={10} color="#DEDEDE" />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20}}>
            {Page === 1 ? (
              <Icons.FontAwesome name="circle" size={10} color="#7553FF" />
            ) : (
              <Icons.FontAwesome name="circle" size={10} color="#DEDEDE" />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20}}>
            {Page === 2 ? (
              <Icons.FontAwesome name="circle" size={10} color="#7553FF" />
            ) : (
              <Icons.FontAwesome name="circle" size={10} color="#DEDEDE" />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20}}>
            {Page === 3 ? (
              <Icons.FontAwesome name="circle" size={10} color="#7553FF" />
            ) : (
              <Icons.FontAwesome name="circle" size={10} color="#DEDEDE" />
            )}
          </TouchableOpacity>
        </View>
      )}
      {Page !== 4 ? (
        <View style={{top: 120, left: '5%'}}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}>
            <View style={styles.purpleBtn}>
              <Text style={styles.instaText}>Facebook으로 로그인 하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{top: 85, left: '5%'}}>
          <TouchableOpacity onPress={() => navigation.pop(2)}>
            <View style={styles.purpleBtn}>
              <Text style={styles.instaText}>계정 연결 완료하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 60,
  },
  TitleText: {
    fontFamily: 'Quantico-Bold',
    fontSize: 17,
    marginTop: -5,
  },
  GreyView: {
    height: 90,
    width: '100%',
    backgroundColor: '#EDEDED',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoldText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    color: '#424242',
  },
  MediumText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
    color: '#424242',
  },
  purpleBtn: {
    backgroundColor: '#7553FF',
    width: '90%',
    height: 60,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instaText: {
    fontFamily: 'NotoSansKR-Medium',
    color: 'white',
    fontSize: 18,
  },
});

{
  /* {Page === 4 && (
        <View style={{top: 150, left: '3%', flexDirection: 'row'}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: 110,
                height: 60,
                borderRadius: 17,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 6,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'NotoSansKR-Medium',
                  fontSize: 16,
                }}>
                다시보기
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.pop(2)}>
            <View
              style={{
                backgroundColor: '#7553FF',
                width: 230,
                height: 60,
                borderRadius: 17,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.instaText}>다음</Text>
            </View>
          </TouchableOpacity>
        </View>
      )} */
}

/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from '../Icons/Icons';
import MyCarousel from './MyCarosel';
export default function Walkthrough() {
  const navigation = useNavigation();
  const [Page, setPage] = useState(0);
  return (
    <View style={styles.allView}>
      <View style={{flex: 0.9}}>
        <View style={{alignItems: 'center'}}>
          {/* 페이지 도트 */}
          {Page !== 4 && (
            <View
              style={{
                marginTop: 80,
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
          {/* <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>MARKIN과 연결하기</Text> */}
        </View>
        {Page === 0 && (
          <View style={styles.GreyView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.BoldText}>나만을 위한 계정 매니징 📊</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.MediumText}>
                직관적인 분석 리포트로{'\n'}
                나의 계정을 분석하고 성장시켜 보세요!
              </Text>
            </View>
          </View>
        )}
        {Page === 1 && (
          <View style={styles.GreyView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.BoldText}>진짜 영향력 순위🎖</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.MediumText}>
                SNS 계정 분석을 통해 진짜 영향력을 분석했어요.{'\n'} 계정
                카테고리별 순위도 알아보세요!
              </Text>
            </View>
          </View>
        )}
        {Page === 2 && (
          <View style={styles.GreyView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.BoldText}>한눈에 관리하는 나의 활동 👀</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.MediumText}>
                계정 변화, 나의 일정, 진행중인 광고 활동까지{'\n'}한 번에
                확인하고 관리하세요. 계정
              </Text>
            </View>
          </View>
        )}
        {Page === 3 && (
          <View style={styles.GreyView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.BoldText}>다양한 광고 활동 📣</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.MediumText}>
                광고 활동을 진행하며 돈을 쌓아보세요{'\n'}
                쌓인 돈은 100% 환급할 수 있어요
              </Text>
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
      </View>
      <View style={{flex: 0.1}}>
        {Page !== 3 ? (
          <View style={{top: 120, left: '5%'}}>
            {/* <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}>
            <View style={styles.purpleBtn}>
              <Text style={styles.instaText}>Facebook으로 로그인 하기</Text>
            </View>
          </TouchableOpacity> */}
          </View>
        ) : (
          <View style={{width: '100%'}}>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseWay')}>
              <View style={styles.purpleBtn}>
                <Text style={styles.instaText}>마킨 시작하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  TitleText: {
    fontFamily: 'Quantico-Bold',
    fontSize: 17,
    marginTop: -5,
  },
  GreyView: {
    height: 90,
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoldText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 26,
    color: '#181818',
  },
  MediumText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
    color: '#424242',
    textAlign: 'center',
    marginTop: 20,
  },
  purpleBtn: {
    backgroundColor: 'black',
    width: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '5%',
    right: 0,
    bottom: 0,
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

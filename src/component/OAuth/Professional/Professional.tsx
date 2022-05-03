/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icons from '../../Icons/Icons';
import MyCarousel from './MyCarousel';
export default function Professional() {
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
        <Text style={styles.TitleText}>프로페셔널 계정으로 전환</Text>
      </View>
      {Page === 0 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>
              Instagram 나의 프로필 페이지에서
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>{'[프로필 편집]'}</Text>
            <Text style={styles.MediumText}>을 누르세요</Text>
          </View>
        </View>
      )}
      {Page === 1 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>프로필 편집화면에서</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>{'[프로페셔널 계정으로 전환]'}</Text>
            <Text style={styles.MediumText}>을 누르세요.</Text>
          </View>
        </View>
      )}
      {Page === 2 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>
              따로 비즈니스 채널용으로 운영하지 않으시다면
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>{'[크리에이터]'}</Text>
            <Text style={styles.MediumText}>로 선택해주세요.</Text>
          </View>
        </View>
      )}
      {Page === 3 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>프로필에 아래와 같이</Text>
            <Text style={styles.BoldText}>{'[홍보][인사이트]'}</Text>
            <Text style={styles.MediumText}> 버튼이</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>
              추가되면 계정 전환이 완료된 상태입니다.
            </Text>
          </View>
        </View>
      )}
      <View style={{marginTop: 33}}>
        <MyCarousel Page={Page} setPage={setPage} />
      </View>
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
      {Page !== 3 && (
        <View style={{top: 150, left: '5%'}}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.instagram.com/');
            }}>
            <View style={styles.purpleBtn}>
              <Text style={styles.instaText}>Instagram 실행하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {Page === 3 && (
        <View style={{top: 150, left: '5%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.purpleBtn}>
              <Text style={styles.instaText}>1단계 연결완료</Text>
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
    fontFamily: 'NotoSansKR-Medium',
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
    fontSize: 16,
  },
});

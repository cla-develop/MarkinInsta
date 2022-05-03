/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icons from '../../Icons/Icons';
import MyCarousel from './MyCarousel';
export default function InstaFace() {
  const [Page, setPage] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>Instagram과 Facebook 연결</Text>
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
            <Text style={styles.BoldText}>{'[연결 또는 만들기]'}</Text>
            <Text style={styles.MediumText}>를 누르세요.</Text>
          </View>
          <View style={{flexDirection: 'row'}}></View>
        </View>
      )}
      {Page === 2 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>{'[기존 페이지 연결]'}</Text>
            <Text style={styles.MediumText}>을 누르세요.</Text>
          </View>
          <View style={{flexDirection: 'row'}}></View>
        </View>
      )}
      {Page === 3 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>연동할 페이지를 선택해주세요.</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>기존 페이지가 없으시다면,</Text>
            <Text style={styles.BoldText}>{'[새 Facebook 페이지 만'}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.BoldText}>{'들기]'}</Text>
            <Text style={styles.MediumText}>로 페이지를 만들어주세요.</Text>
          </View>
        </View>
      )}
      {Page === 4 && (
        <View style={styles.GreyView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>
              프로필 편집화면에서 다음과 같이 페이지 이름이
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MediumText}>추가되면 완료된 상태입니다.</Text>
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
        <TouchableOpacity style={{marginRight: 20}}>
          {Page === 4 ? (
            <Icons.FontAwesome name="circle" size={10} color="#7553FF" />
          ) : (
            <Icons.FontAwesome name="circle" size={10} color="#DEDEDE" />
          )}
        </TouchableOpacity>
      </View>
      {Page !== 4 && (
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
      {Page === 4 && (
        <View style={{top: 150, left: '5%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.purpleBtn}>
              <Text style={styles.instaText}>2단계 연결 완료</Text>
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
    fontSize: 18,
  },
});

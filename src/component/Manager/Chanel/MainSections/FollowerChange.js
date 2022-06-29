/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ChangeMan from './images/ChangeMan.png';
import visit from './images/visit.png';
import click from './images/click.png';
import Icons from '../../../Icons/Icons';
import UnOAuth from '../../../../Utils/UnOAuth/UnOAuth';
import Loading from '../../../../Utils/Loading';
// import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FollowerChange(props) {
  // const navigation = useNavigation();
  const [isFb, setisFb] = useState(0);
  const [Data, setData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
    });
  }, []);
  const call = value => {
    axios
      .get('https://www.markin-app.site/app/channel/follower', {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        if (response.data.isSuccess === false) {
          setisFb(1);
        } else {
          setData(response.data.result);
          setisFb(2);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{marginTop: 10}}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('FollowChange')}> */}
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>계정 분석</Text>
          {/* <View style={{position: 'absolute', right: 15}}>
            <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
          </View> */}
        </View>
        {isFb === 2 && (
          <View style={styles.imagesViews}>
            <View style={{flexDirection: 'row'}}>
              <Image source={ChangeMan} style={{height: 56, width: 56}} />
              <View style={{marginTop: 5, marginLeft: 20}}>
                <Text style={styles.Textlet}>팔로워 수</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text style={styles.numText}>{Data.follower}</Text>
                  <Text style={styles.Textlet}> 명</Text>
                  <View style={{flexDirection: 'row', marginTop: 3}}>
                    {Data.followerTrend >= 0 ? (
                      <Icons.AntDesign
                        name="arrowup"
                        color="#57C971"
                        size={15}
                        style={{marginTop: 1, marginLeft: 10}}
                      />
                    ) : (
                      <Icons.AntDesign
                        name="arrowdown"
                        color="#FF5959"
                        size={15}
                        style={{marginTop: 1, marginLeft: 10}}
                      />
                    )}
                    <Text
                      style={
                        Data.followerTrend >= 0
                          ? styles.UpText
                          : styles.DownText
                      }>
                      {Data.followerTrend}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Image source={visit} style={{height: 56, width: 56}} />
              <View style={{marginTop: 5, marginLeft: 20}}>
                <Text style={styles.Textlet}>계정 방문자 수</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text style={styles.numText}>{Data.profileview}</Text>
                  <Text style={styles.Textlet}> 명</Text>
                  <View style={{flexDirection: 'row', marginTop: 3}}>
                    {Data.profileviewTrend >= 0 ? (
                      <Icons.AntDesign
                        name="arrowup"
                        color="#57C971"
                        size={15}
                        style={{marginTop: 1, marginLeft: 10}}
                      />
                    ) : (
                      <Icons.AntDesign
                        name="arrowdown"
                        color="#FF5959"
                        size={15}
                        style={{marginTop: 1, marginLeft: 10}}
                      />
                    )}
                    <Text
                      style={
                        Data.profileviewTrend >= 0
                          ? styles.UpText
                          : styles.DownText
                      }>
                      {Data.profileviewTrend}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Image source={click} style={{height: 56, width: 56}} />
              <View style={{marginTop: 5, marginLeft: 20}}>
                <Text style={styles.Textlet}>DM 클릭 수</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text style={styles.numText}>{Data.clickMessage}</Text>
                  <Text style={styles.Textlet}> 명</Text>
                  <View style={{flexDirection: 'row', marginTop: 3}}>
                    {Data.clickMessageTrend >= 0 ? (
                      <Icons.AntDesign
                        name="arrowup"
                        color="#57C971"
                        size={15}
                        style={{marginTop: 1, marginLeft: 10}}
                      />
                    ) : (
                      <Icons.AntDesign
                        name="arrowdown"
                        color="#FF5959"
                        size={15}
                        style={{marginTop: 1, marginLeft: 10}}
                      />
                    )}

                    <Text
                      style={
                        Data.clickMessageTrend >= 0
                          ? styles.UpText
                          : styles.DownText
                      }>
                      {Data.clickMessageTrend}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        {isFb === 1 && (
          <View style={{marginBottom: 30}}>
            <UnOAuth />
          </View>
        )}
        {isFb === 0 && <Loading />}
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    width: '95%',

    borderRadius: 18,
    backgroundColor: 'white',
  },
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  UpHighlightView: {
    backgroundColor: '#E8FFED',
    justifyContent: 'center',
    width: 48,
  },
  UpHiText: {
    color: '#57C971',
    textAlign: 'center',
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  numText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontWeight: 'bold',
    fontSize: 18,
  },
  Textlet: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    color: '#424242',
  },
  UpText: {color: '#57C971', fontFamily: 'SpoqaHanSansNeo-Medium'},
  DownText: {color: '#FF5959', fontFamily: 'SpoqaHanSansNeo-Medium'},
  imagesViews: {
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 30,
  },
});

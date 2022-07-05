import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from '../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import UnOAuth from '../../../../Utils/UnOAuth/UnOAuth';
import Loading from '../../../../Utils/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyRank(props: any) {
  const navigation = useNavigation();
  const [isFb, setisFb] = useState(0);
  const [ranking, setranking] = useState(0);
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
    });
  }, []);
  const call = value => {
    axios
      .get(
        'https://www.markin-app.site/app/channel/ranking?type=진짜 영향력순&category=전체',
        {
          headers: {
            'x-access-token': value,
          },
        },
      )
      .then(response => {
        console.log(response.data.code);
        if (response.data.isSuccess === false) {
          setisFb(1);
        } else {
          setisFb(2);
          setranking(response.data.result.myRanking.ranking);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{marginTop: 10}}>
      {isFb === 2 && (
        <TouchableOpacity onPress={() => navigation.navigate('MyRanking')}>
          <View style={styles.mainView}>
            <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
              <Text style={styles.TopText}>나의 랭킹</Text>
              <View style={{position: 'absolute', right: 15}}>
                <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: 40, marginLeft: '65%'}}>
              {/* <View style={styles.UpHighlightView}>
                <View style={{flexDirection: 'row', paddingLeft: 6}}>
                  <Icons.AntDesign name="arrowup" size={15} color="#57C971" />
                  <Text style={styles.UpHiText}>21</Text>
                </View>
              </View> */}
              <View style={{width: 100}}>
                <Text style={styles.numText}>
                  {ranking.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}등
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {isFb === 1 && (
        <View>
          <View style={styles.unView}>
            <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
              <Text style={styles.TopText}>나의 랭킹</Text>
              <View style={{position: 'absolute', right: 15}}>
                <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
              </View>
            </View>
            <View style={{marginTop: -15, paddingBottom: 30}}>
              <UnOAuth />
            </View>
          </View>
        </View>
      )}
      {isFb === 0 && (
        <View>
          <View style={styles.unView}>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={styles.TopText}>나의 랭킹</Text>
            </View>
            <Loading />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '95%',
    height: 125,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  unView: {
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
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    textAlign: 'right',
  },
});

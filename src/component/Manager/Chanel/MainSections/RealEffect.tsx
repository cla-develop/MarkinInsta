import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from '../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import UnOAuth from '../../../../Utils/UnOAuth/UnOAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Loading from '../../../../Utils/Loading';
export default function RealEffect(props: any) {
  const navigation = useNavigation();
  const [isFb, setisFb] = useState(0);
  const [realFollower, setrealFollower] = useState(0);
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
    });
  }, []);
  const call = value => {
    axios
      .get('https://www.markin-app.site/app/channel/influence', {
        headers: {
          'x-access-token': props.JWT,
        },
      })
      .then(response => {
        console.log(response.data.code + 'asdsadsa');
        if (response.data.code === 3008) {
          setisFb(1);
        } else {
          setisFb(2);
          setrealFollower(response.data.result.realFollower);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{marginTop: 15}}>
      {isFb === 2 && (
        <TouchableOpacity onPress={() => navigation.navigate('RealEffect')}>
          <View style={styles.mainView}>
            <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
              <Text style={styles.TopText}>진짜 영향력</Text>
              <View style={{position: 'absolute', right: 15}}>
                <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: 40, marginLeft: '65%'}}>
              {/* <View style={styles.UpHighlightView}> */}
              {/* <View style={{flexDirection: 'row', paddingLeft: 6}}>
                  <Icons.AntDesign name="arrowup" size={15} color="#57C971" />
                  <Text style={styles.UpHiText}>21</Text>
                </View>
              </View> */}
              <View style={{width: 100}}>
                <Text style={styles.numText}>
                  {realFollower
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  명
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {isFb === 1 && (
        <View style={{marginBottom: 30}}>
          <UnOAuth />
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
      {/* <View style={styles.unView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>진짜 영향력</Text>
          <View style={{position: 'absolute', right: 15}}>
            <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
          </View>
        </View>
        <View style={{marginTop: -15, paddingBottom: 30}}>
          <UnOAuth />
        </View>
      </View> */}
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

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import UnOAuth from '../../../Utils/UnOAuth/UnOAuth';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function DayChange(props) {
  const [FollowChange, setFollowChange] = useState(1);
  const [PostingChange, setPostingChange] = useState(0);
  const [todayFollower, settodayFollower] = useState(0);
  const [todayProfileView, settodayProfileView] = useState(0);
  const [todayClickMessage, settodayClickMessage] = useState(0);
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    const apiCall = () => {
      axios
        .get('https://www.markin-app.site/app/home/channel', {
          headers: {
            'x-access-token':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoxNzg0MTQwMDIyOTcwMTgyOCwiaWF0IjoxNjUxNDc1NjY5LCJleHAiOjE2ODMwMTE2NjksInN1YiI6InVzZXJJbmZvIn0.j4u8erTV0-NPxnCELratkdGsQe4AXDFM4tE1iQC-zaw',
          },
        })
        .then(response => {
          console.log(JWT + 'asdasda');
          settodayFollower(response.data.result.todayFollower);
          settodayProfileView(response.data.result.todayProfileView);
          settodayClickMessage(response.data.result.todayClickMessage);
        });
    };
    AsyncStorage.getItem('JWT')
      .then(value => {
        setJWT(value);
        console.log(value);
      })
      .then(apiCall());
  }, []);
  return (
    <View style={styles.FollowView}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={styles.TopText}>일별 팔로워 변화</Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{width: '50%'}}>
          <Text style={styles.LightText}>팔로워 증가 수</Text>
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.numberText}>
            {todayFollower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 명
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{width: '50%'}}>
          <Text style={styles.LightText}>계정 방문자 수</Text>
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.numberText}>
            {todayProfileView.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            명
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{width: '50%'}}>
          <Text style={styles.LightText}>DM 클릭 수</Text>
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.numberText}>
            {todayClickMessage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            명
          </Text>
        </View>
      </View>
      {/* <View style={{marginBottom: 30}}>
        <UnOAuth />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  FollowView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: '94%',
    marginLeft: '3%',
    borderRadius: 18,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
    paddingTop: 15,
    paddingBottom: 15,
  },
  PostView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: '94%',
    height: 200,
    marginLeft: '3%',
    borderRadius: 18,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
  },
  unFocus: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    width: 60,
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
  },
  unFocusText: {
    textAlign: 'center',
    color: '#000000B2',
    fontFamily: 'NotoSansKR-Light',
    fontSize: 16,
  },
  Focus: {
    backgroundColor: '#181818',
    borderRadius: 30,
    width: 60,
    height: 30,
    justifyContent: 'center',
  },
  FocusText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  LightText: {
    marginLeft: 20,
    fontFamily: 'NotoSansKR-Medium',
    color: '#424242',
    fontSize: 16,
  },
  NumText: {
    textAlign: 'right',
    marginRight: '5%',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
  },
  TopText: {
    marginLeft: 20,
    fontFamily: 'NotoSansKR-Bold',
    marginTop: 8,
    fontSize: 16,
  },
  numberText: {
    textAlign: 'right',
    marginRight: '10%',
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
});

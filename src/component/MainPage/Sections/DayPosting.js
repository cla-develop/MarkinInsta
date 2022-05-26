import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UnOAuth from '../../../Utils/UnOAuth/UnOAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function DayPosting(props) {
  const [todayImpressions, settodayImpressions] = useState(0);
  const [todayReach, settodayReach] = useState(0);
  const [todayLike, settodayLike] = useState(0);
  const [todayComment, settodayComment] = useState(0);
  const [isFb, setisFb] = useState(false);

  useEffect(() => {
    axios
      .get('https://www.markin-app.site/app/home/post', {
        headers: {
          'x-access-token': props.JWT,
        },
      })
      .then(response => {
        console.log(response.data.code);
        if (response.data.code === 3008) {
          setisFb(false);
        } else {
          setisFb(true);
          settodayImpressions(response.data.result.todayImpressions);
          settodayReach(response.data.result.todayReach);
          settodayLike(response.data.result.todayLike);
          settodayComment(response.data.result.todayComment);
        }
      })
      .catch(err => console.log(err));
  }, [props.JWT]);
  return (
    <View style={styles.PostView}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.TopText}>일별 포스팅 분석</Text>
      </View>

      {isFb === true ? (
        <>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>도달 수</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.NumText}>
                {todayReach.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>노출 수</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.NumText}>
                {todayImpressions
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>댓글</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.NumText}>
                {todayComment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '50%'}}>
              <Text style={styles.LightText}>좋아요</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.NumText}>
                {todayLike.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </View>
          </View>
        </>
      ) : (
        <View style={{marginBottom: 30}}>
          <UnOAuth />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  PostView: {
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
    paddingBottom: 15,
    paddingTop: 15,
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
    marginRight: '10%',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
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

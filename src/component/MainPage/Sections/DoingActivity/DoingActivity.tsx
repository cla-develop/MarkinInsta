/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from '../../../Styles';

export default function DoingActivity() {
  const [Menu, setMenu] = useState('진행중');
  const [Activties, setActivities] = useState([]);
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(`https://www.markin-app.site/app/users/activity?status=${Menu}`, {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setActivities(response.data.result);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={instyles.FollowView}>
      <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: 18}}>
        진행중인 활동
      </Text>
      {Menu === '진행중' && Activties === [] ? (
        <View>
          {Activties.map(item => (
            // tslint:disable-next-line: jsx-key
            <View key={item.advertisementNo} style={{marginTop: 20}}>
              <Text style={[styles.NotoMe15, {paddingLeft: 5}]}>
                {item.applyDate}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  source={{uri: item.campaignImage}}
                  style={{height: 80, width: 80, borderRadius: 10}}
                />
                <View style={{width: '70%', marginLeft: 10}}>
                  <Text style={[styles.NotoMe17]}>{item.companyName}</Text>
                  <Text
                    style={[styles.NotoReg14g42, {marginTop: 3}]}
                    numberOfLines={1}>
                    {item.CampaignName}
                  </Text>
                  <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <View style={{width: '80%'}}>
                      <Text style={[styles.SpoqaMe17]}>{item.reward}P</Text>
                    </View>
                    <Text style={styles.SpoqaMe14}>
                      {item.influencerNumber}명 모집
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={instyles.noneTextView}>
          <Text style={instyles.noneText}>진행중인 활동이 없습니다.</Text>
        </View>
      )}
    </View>
  );
}
const instyles = StyleSheet.create({
  noneTextView: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noneText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
    color: '#747474',
  },
  FollowView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: '94%',
    minheight: 150,
    marginLeft: '3%',
    borderRadius: 18,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
    padding: '5%',
  },
});

// <View style={{flexDirection: 'row'}}>
// <Image
//   source={issue1}
//   style={{width: 64, height: 64, borderRadius: 5}}
// />
// <View style={{marginLeft: 15}}>
//   <Text style={{fontSize: 14, fontFamily: 'NotoSansKR-Bold'}}>
//     강소백
//   </Text>
//   <Text
//     style={{
//       fontSize: 14,
//       fontFamily: 'NotoSansKR-Medium',
//       color: '#424242',
//     }}>
//     오늘은 강소백
//   </Text>
//   <View style={{flexDirection: 'row', marginTop: 8}}>
//     <Text
//       style={{
//         fontSize: 13,
//         fontFamily: 'SpoqaHanSansNeo-Medium',
//         color: '#FF4747',
//       }}>
//       123명
//     </Text>
//     <Text
//       style={{
//         fontSize: 13,
//         fontFamily: 'SpoqaHanSansNeo-Medium',
//         color: '#747474',
//       }}>
//       / 100명 모집{' '}
//     </Text>
//   </View>
// </View>
// <View style={{marginLeft: 60, marginTop: 1}}>
//   <View
//     style={{
//       backgroundColor: '#F3F3F3',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 3,
//     }}>
//     <Text style={{fontFamily: 'NotoSansKR-Medium', fontSize: 12}}>
//       3일남음
//     </Text>
//   </View>
//   <Text
//     style={{
//       fontSize: 16,
//       fontFamily: 'SpoqaHanSansNeo-Medium',
//       marginTop: 25,
//     }}>
//     40,000P
//   </Text>
// </View>
// </View>

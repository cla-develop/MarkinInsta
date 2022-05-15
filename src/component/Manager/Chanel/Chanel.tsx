import React, {useEffect, useState, useRef} from 'react';
import {View} from 'react-native';
import RealEffect from './MainSections/RealEffect';
import MyRank from './MainSections/MyRank';
// import UnOAuth from '../../../Utils/UnOAuth/UnOAuth';
import FollowerChange from './MainSections/FollowerChange';
import FollowAgeGender from './MainSections/FollowAgeGender';
import FollowRegion from './MainSections/FollowRegion';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Chanel() {
  const [realEffectCount, setrealEffectCount] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
    });
  }, []);
  const [asd, setasd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setasd(1);
    }, 100);
  }, []);

  return (
    <>
      {/* 진짜 영향력 */}
      {asd === 1 && <RealEffect JWT={JWT} />}
      {/* 내 랭킹 */}
      {asd === 1 && <MyRank ranking={ranking} JWT={JWT} />}
      {/* 팔로우 변화 추이 */}
      {/* <View style={styles.UnOAuthView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>팔로워 변화 추이</Text>
          <View style={{position: 'absolute', right: 15}}>
            <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
          </View>
        </View>
        <UnOAuth />
      </View> */}
      {asd === 1 && <FollowerChange JWT={JWT} />}
      {/* 팔로워 연령 및 성비 */}
      {/* <View style={styles.UnOAuthView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>팔로워 연령 및 성비</Text>
          <View style={{position: 'absolute', right: 15}}>
            <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
          </View>
        </View>
        <UnOAuth />
      </View> */}

      <FollowAgeGender />

      {/* 팔로워 지역 Top 5 */}
      {/* <View style={styles.UnOAuthView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>팔로워 지역 Top 5</Text>
          <View style={{position: 'absolute', right: 15}}>
            <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
          </View>
        </View>
        <UnOAuth />
      </View> */}
      <FollowRegion />
      <View style={{height: 200}}></View>
    </>
  );
}

// const styles = StyleSheet.create({
//   TopText: {
//     fontSize: 20,
//     color: '#181818',
//     fontFamily: 'NotoSansKR-Medium',
//   },
//   UnOAuthView: {
//     backgroundColor: 'white',
//     width: '95%',
//     borderRadius: 18,
//     height: 250,
//     marginTop: 10,
//   },
// });

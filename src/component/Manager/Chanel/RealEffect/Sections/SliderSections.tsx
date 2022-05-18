import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import View from 'react-native-linear-gradient';
import speedmeter from '../../../../../images/speedometer.png';
export default function SliderSections(props: any) {
  const [rate, setRate] = useState('0%');
  useEffect(() => {
    if (props.Quality >= 100) {
      setRate('100%');
    } else {
      setRate(`${props.Quality}%`);
    }
  }, [props.Quality]);

  return (
    <View style={styles.MainView}>
      <View style={{paddingLeft: '5%', paddingTop: '5%'}}>
        <Text style={styles.Toptext}>계정품질</Text>
        <Text style={styles.subText}>
          계정품질이 높을수록 인기 게시물에 올라갈 확률이 높아져요.
        </Text>
      </View>
      {/* 슬리이드 , 좌우 그래프 */}
      <View style={{alignItems: 'center', marginTop: 50}}>
        <View style={[styles.container]}>
          <View style={[styles.StackContainer, {width: rate}]}></View>
        </View>
      </View>
      {/* 아래숫자 */}
      <View style={styles.NunView}>
        <View style={{width: '45%'}}>
          <Text>0</Text>
        </View>
        <View style={{width: '10%'}}>
          <Text style={{textAlign: 'center'}}>50</Text>
        </View>
        <View style={{width: '45%'}}>
          <Text style={{textAlign: 'right'}}>100</Text>
        </View>
      </View>
      {/* 구분선 */}
      <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
        <View
          style={{width: 250, height: 2, backgroundColor: '#F3F3F3'}}></View>
      </View>
      {/* 속도계 + 글씨 */}
      <View style={{flexDirection: 'row', paddingLeft: '10%', marginTop: 20}}>
        <View style={styles.ImageView}>
          <Image source={speedmeter} style={{width: 40, height: 40}} />
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.nameText}>{props.UserName}</Text>
            <Text style={styles.blackText}>님 계정품질은</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {props.Quality <= 10 && (
              <Text style={styles.purpleText}>매우 나쁨</Text>
            )}
            {props.Quality <= 40 && props.Quality > 10 && (
              <Text style={styles.purpleText}>나쁨</Text>
            )}
            {props.Quality <= 70 && props.Quality > 40 && (
              <Text style={styles.purpleText}>적정</Text>
            )}
            {props.Quality < 100 && props.Quality > 70 && (
              <Text style={styles.purpleText}>좋음</Text>
            )}
            {props.Quality >= 10 && (
              <Text style={styles.purpleText}>매우 좋음</Text>
            )}
            <Text style={styles.blackText}>이에요.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  MainView: {
    width: '95%',
    height: 280,
    backgroundColor: 'white',
    borderRadius: 18,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
  },
  container: {
    height: 15,
    backgroundColor: '#E5E8FF',
    borderRadius: 10,
    width: 300,
  },
  StackContainer: {
    height: 15,
    backgroundColor: '#7553FF',
    borderRadius: 10,
  },
  blackText: {
    fontSize: 17,
    fontFamily: 'NotoSansKR-Regular',
    color: '#181818',
  },
  purpleText: {
    fontSize: 17,
    fontFamily: 'NotoSansKR-Bold',
    color: '#7553FF',
  },
  ImageView: {justifyContent: 'center', width: '20%', paddingTop: 5},
  NunView: {
    flexDirection: 'row',
    paddingLeft: '6%',
    paddingRight: '6%',
    marginTop: 10,
  },
  Toptext: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 20,
    color: '#181818',
  },
  subText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 13,
    color: '#747474',
  },
  nameText: {
    fonstSize: 17,
    fontFamily: 'Roboto-Bold',
    color: '#181818',
    marginTop: 5,
  },
});

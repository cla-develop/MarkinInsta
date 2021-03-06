/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import man from './images/man.png';
import girl from './images/girl.png';
import axios from 'axios';
import Loading from '../../../../Utils/Loading';
import UnOAuth from '../../../../Utils/UnOAuth/UnOAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function FollowAgeGender(props: any) {
  const [first, setfirst] = useState([]);
  const [Second, setSecond] = useState([]);
  const [Third, setThird] = useState([]);
  const [Fourth, setFourth] = useState([]);
  const [Fifth, setFifth] = useState([]);
  const [Sixth, setSixth] = useState([]);
  // useEffect(() => {
  //   setrealEffectCount(RealEffect);
  //   setRanking(MyRanking);
  // }, [RealEffect, MyRanking]);
  const [firSum, setfirSum] = useState(0);
  const [secSum, setsecSum] = useState(100);
  const [thirSum, setthirSum] = useState(-1);
  const [fourSum, setfourSum] = useState(0);
  const [fifSum, setfifSum] = useState(0);
  const [sixSum, setsixSum] = useState(0);
  const [Max, setMax] = useState(100);
  const [MaleRate, setMaleRate] = useState('');
  const [FemaleRate, setFemaleRate] = useState('');
  const [isFb, setisFb] = useState(0);
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
    });
  }, []);
  const call = value => {
    const getchannel = async () => {
      try {
        await axios
          .get('https://www.markin-app.site/app/channel', {
            headers: {
              'x-access-token': value,
            },
          })
          .then(response => {
            console.log(response.data.followerGenderAge + 'gender');
            if (
              response.data.followerGenderAge == null ||
              response.data.followerGenderAge === undefined
            ) {
              setisFb(1);
            }
            if (response.data.result.followerGenderAge['maxValue'] >= 0) {
              setisFb(2);
              console.log(response.data.result.followerGenderAge['maxValue']);
              setMax(response.data.result.followerGenderAge['maxValue']);
              setfirst(response.data.result.followerGenderAge['13-17']);
              setSecond(response.data.result.followerGenderAge['18-24']);
              setThird(response.data.result.followerGenderAge['25-34']);
              setFourth(response.data.result.followerGenderAge['35-44']);
              setFifth(response.data.result.followerGenderAge['45-54']);
              setSixth(response.data.result.followerGenderAge['55-64']);
              setfirSum(
                response.data.result.followerGenderAge['13-17'].F +
                  response.data.result.followerGenderAge['13-17'].M +
                  response.data.result.followerGenderAge['13-17'].U,
              );
              setsecSum(
                response.data.result.followerGenderAge['18-24'].F +
                  response.data.result.followerGenderAge['18-24'].M +
                  response.data.result.followerGenderAge['18-24'].U,
              );
              setthirSum(
                response.data.result.followerGenderAge['25-34'].F +
                  response.data.result.followerGenderAge['25-34'].M +
                  response.data.result.followerGenderAge['25-34'].U,
              );
              setfourSum(
                response.data.result.followerGenderAge['35-44'].F +
                  response.data.result.followerGenderAge['35-44'].M +
                  response.data.result.followerGenderAge['35-44'].U,
              );
              setfifSum(
                response.data.result.followerGenderAge['45-54'].F +
                  response.data.result.followerGenderAge['45-54'].M +
                  response.data.result.followerGenderAge['45-54'].U,
              );
              setsixSum(
                response.data.result.followerGenderAge['55-64'].F +
                  response.data.result.followerGenderAge['55-64'].M +
                  response.data.result.followerGenderAge['55-64'].U,
              );
              setMaleRate(response.data.result.followerGenderAge['maleRate']);
              setFemaleRate(
                response.data.result.followerGenderAge['femaleRate'],
              );
            }
          });
      } catch {
        err => {
          console.log(err + 'asda');
        };
      }
    };
    getchannel();
  };

  return (
    <View style={{marginTop: 10}}>
      {isFb === 2 && (
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
            <Text style={styles.TopText}>????????? ?????? ??? ??????</Text>
            <View
              style={{
                position: 'absolute',
                right: 20,
                top: 5,
                flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={man}
                  style={{height: 20, width: 12, marginRight: 10}}
                />
                <Text style={styles.percentText}>{MaleRate.slice(2)}%</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Image
                  source={girl}
                  style={{height: 20, width: 12, marginRight: 10}}
                />
                <Text style={styles.percentText}>{FemaleRate.slice(2)}%</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingLeft: 13, height: 250}}>
            <View style={styles.GraphView}>
              <Text style={styles.noto}>{firSum}???</Text>
              <View
                style={[
                  styles.greyGraph,
                  {
                    backgroundColor: firSum === Max ? '#7603FF' : '#EDEDED',
                    height: 180 / (Max / firSum),
                  },
                ]}></View>
              <Text style={styles.ageText}>13-17</Text>
            </View>
            <View style={styles.GraphView}>
              <Text style={styles.noto}>{secSum}???</Text>
              <View
                style={[
                  styles.greyGraph,
                  {
                    backgroundColor: secSum === Max ? '#7603FF' : '#EDEDED',
                    height: 180 / (Max / secSum),
                  },
                ]}></View>
              <Text>18-24</Text>
            </View>
            <View style={styles.GraphView}>
              <Text style={styles.noto}>{thirSum}???</Text>
              <View
                style={[
                  styles.greyGraph,
                  {
                    backgroundColor: thirSum === Max ? '#7603FF' : '#EDEDED',
                    height: 180 / (Max / thirSum),
                  },
                ]}></View>
              <Text style={styles.ageText}>25-34</Text>
            </View>
            <View style={styles.GraphView}>
              <Text style={styles.noto}>{fourSum}???</Text>
              <View
                style={[
                  styles.greyGraph,
                  {
                    backgroundColor: fourSum === Max ? '#7603FF' : '#EDEDED',
                    height: 180 / (Max / fourSum),
                  },
                ]}></View>
              <Text style={styles.ageText}>35-44</Text>
            </View>
            <View style={styles.GraphView}>
              <Text style={styles.noto}>{fifSum}???</Text>
              <View
                style={[
                  styles.greyGraph,
                  {
                    backgroundColor: fifSum === Max ? '#7603FF' : '#EDEDED',
                    height: 180 / (Max / fifSum),
                  },
                ]}></View>
              <Text style={styles.ageText}>45-54</Text>
            </View>
            <View style={styles.GraphView}>
              <Text style={styles.noto}>{sixSum}???</Text>
              <View
                style={[
                  styles.greyGraph,
                  {
                    backgroundColor: sixSum === Max ? '#7603FF' : '#EDEDED',
                    height: 180 / (Max / sixSum),
                  },
                ]}></View>
              <Text style={styles.ageText}>55+</Text>
            </View>
          </View>
        </View>
      )}
      {isFb === 1 && (
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
            <Text style={styles.TopText}>????????? ?????? ??? ??????</Text>
          </View>
          <UnOAuth />
        </View>
      )}

      {isFb === 0 && (
        <View>
          <View style={styles.unView}>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={styles.TopText}>????????? ?????? ??? ??????</Text>
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
    paddingBottom: 40,
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
  },
  purpleGraph: {
    backgroundColor: '#7603FF',
    width: 40,
    marginBottom: 10,
    borderRadius: 7,
  },
  greyGraph: {
    width: 43,
    marginBottom: 10,
    borderRadius: 7,
  },
  GraphView: {
    alignItems: 'center',
    marginRight: 13,
    justifyContent: 'flex-end',
  },
  ageText: {fontFamily: 'SpoqaHanSansNeo-Medium', fontSize: 12},
  percentText: {marginTop: 2, fontFamily: 'SpoqaHanSansNeo-Medium'},
  noto: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 13,
    marginBottom: 5,
  },
});

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import man from './images/man.png';
import girl from './images/girl.png';
import axios from 'axios';

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
  const [thirSum, setthirSum] = useState(1);
  const [fourSum, setfourSum] = useState(0);
  const [fifSum, setfifSum] = useState(0);
  const [sixSum, setsixSum] = useState(0);

  useEffect(() => {
    const getchannel = async () => {
      try {
        await axios
          .get('https://www.markin-app.site/app/channel', {
            headers: {
              'x-access-token':
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
            },
          })
          .then(response => {
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
          });
      } catch {
        err => {
          console.log(err);
        };
      }
    };
    getchannel();
  }, []);
  const max = 200;
  return (
    <View style={{marginTop: 10}}>
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>팔로워 연령 및 성비</Text>
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
              <Text style={styles.percentText}>68%</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Image
                source={girl}
                style={{height: 20, width: 12, marginRight: 10}}
              />
              <Text style={styles.percentText}>68%</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', paddingLeft: 13, height: 250}}>
          <View style={styles.GraphView}>
            <View style={[styles.greyGraph, {height: firSum}]}></View>
            <Text style={styles.ageText}>13-17</Text>
          </View>
          <View style={styles.GraphView}>
            <View style={[styles.greyGraph, {height: secSum}]}></View>
            <Text>18-24</Text>
          </View>
          <View style={styles.GraphView}>
            <Text style={{marginBottom: 5, fontFamily: 'NotoSansKR-Bold'}}>
              {thirSum}명
            </Text>
            <View style={[styles.purpleGraph, {height: max / thirSum}]}></View>
            <Text style={styles.ageText}>25-34</Text>
          </View>
          <View style={styles.GraphView}>
            <View
              style={[
                styles.greyGraph,
                // {height: (200 * thirSum) / max},
              ]}></View>
            <Text style={styles.ageText}>35-44</Text>
          </View>
          <View style={styles.GraphView}>
            <View
              style={[
                styles.greyGraph,
                // {height: (200 * thirSum) / max},
              ]}></View>
            <Text style={styles.ageText}>45-54</Text>
          </View>
          <View style={styles.GraphView}>
            <View
              style={[
                styles.greyGraph,
                // {height: (200 * thirSum) / max},
              ]}></View>
            <Text style={styles.ageText}>55+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    width: '95%',
    height: 312,
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
    backgroundColor: '#EDEDED',
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
});

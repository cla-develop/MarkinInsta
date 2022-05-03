import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icons from '../../../Icons/Icons';
import NumSection from './Sections/NumSection';
import GraphSection from './Sections/GraphSection';
import SliderSections from './Sections/SliderSections';
import axios from 'axios';
export default function RealEffect(props: any) {
  const [Follower, setFollower] = useState<number>(0);
  const [realFollower, setRealFollower] = useState<number>(0);
  const [FNum, setFNum] = useState('');
  const [RFNum, setRFNum] = useState('');
  const [rangeAvg, setRangeAvg] = useState(0);
  const [TopAvg, setTopAvg] = useState(0);
  const [RNum, setRNum] = useState('');
  const [TNum, setTNum] = useState('');
  const [UserName, setUserName] = useState<string>('');
  const [MyPercent, setMyPercent] = useState<number>(0);
  const [Quality, setQuality] = useState<number>(0);
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get('https://www.markin-app.site/app/channel/influence', {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setFollower(response.data.result.follower);
        setRealFollower(response.data.result.realFollower);
        setRangeAvg(Math.floor(response.data.result.range_average));
        setTopAvg(Math.floor(response.data.result.top_average));
        setUserName(response.data.result.username);
        setMyPercent(Math.floor(response.data.result.my_persent));
        setQuality(Math.floor(response.data.result.quality));
      });
  }, []);

  const underFK = (fff: string) => {
    const Onum =
      // tslint:disable-next-line: prefer-template
      '0' +
      fff.slice(fff.length - 2, fff.length - 1) +
      '.' +
      fff.slice(fff.length - 1);
    return Onum;
  };
  const overFK = (fff: string) => {
    const Onum =
      // tslint:disable-next-line: prefer-template
      fff.slice(fff.length - 2, fff.length - 1) +
      '.' +
      fff.slice(fff.length - 1);
    return Onum;
  };

  useEffect(() => {
    if (Follower < 1000) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const temp = Follower.toString();
      setFNum(underFK(temp.slice(0, Follower.toString().length - 2)));
    } else {
      const temp2 = Follower.toString();
      setFNum(overFK(temp2.slice(0, Follower.toString().length - 2)));
    }
    if (realFollower < 1000) {
      const temp3 = realFollower.toString();
      setRFNum(underFK(temp3.slice(0, realFollower.toString().length - 2)));
    } else {
      const temp4 = realFollower.toString();
      setRFNum(overFK(temp4.slice(0, realFollower.toString().length - 2)));
    }
    if (rangeAvg < 1000) {
      const temp3 = rangeAvg.toString();
      setRNum(underFK(temp3.slice(0, rangeAvg.toString().length - 2)));
    } else {
      const temp4 = rangeAvg.toString();
      setRNum(overFK(temp4.slice(0, rangeAvg.toString().length - 2)));
    }
    if (TopAvg < 1000) {
      const temp3 = TopAvg.toString();
      setTNum(underFK(temp3.slice(0, TopAvg.toString().length - 2)));
    } else {
      const temp4 = TopAvg.toString();
      setTNum(overFK(temp4.slice(0, TopAvg.toString().length - 2)));
    }
  }, [Follower, realFollower, TopAvg, rangeAvg]);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.allView}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <Text style={styles.TopText}>진짜 영향력</Text>
          <Text style={styles.subText}>
            진짜 영향력은 내 게시물에 반응을 보이는{'\n'}한국인 팔로워
            예상수치입니다.
          </Text>
        </View>
        <NumSection FNum={FNum} RFNum={RFNum} />
        <GraphSection
          RNum={RNum}
          TNum={TNum}
          RFNum={RFNum}
          TopAvg={TopAvg}
          rangeAvg={rangeAvg}
          realFollower={realFollower}
          UserName={UserName}
          MyPercent={MyPercent}
        />
        <SliderSections Quality={Quality} UserName={UserName} />
        <View style={{height: 100}}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 60,
    paddingLeft: '5%',
  },
  TopText: {fontSize: 24, fontFamily: 'NotoSansKR-Bold'},
  FooterStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(212, 212, 212)',
    position: 'absolute',
    bottom: 0,
  },
  subText: {
    marginTop: 5,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'NotoSansKR-Regular',
    color: '#424242',
  },
});

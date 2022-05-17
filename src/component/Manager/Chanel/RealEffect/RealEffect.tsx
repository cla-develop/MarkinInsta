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
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function RealEffect(props: any) {
  const [Follower, setFollower] = useState<number>(0);
  const [realFollower, setRealFollower] = useState<number>(0);
  const [FNum, setFNum] = useState('');
  const [RFNum, setRFNum] = useState('');
  const [rangeAvg, setRangeAvg] = useState(0);
  const [TopAvg, setTopAvg] = useState(0);
  const [UserName, setUserName] = useState<string>('');
  const [MyPercent, setMyPercent] = useState<number>(0);
  const [Quality, setQuality] = useState<number>(0);
  const [profileImg, setprofileImg] = useState('');
  const [JWT, setJWT] = useState('');
  const [range, setrange] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
    });
  }, []);
  const [asd, setasd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setasd(1);
    }, 1000);
  }, []);
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get('https://www.markin-app.site/app/channel/influence', {
        headers: {
          'x-access-token': JWT,
        },
      })
      .then(response => {
        console.log(response.data.result.follower);
        setFollower(response.data.result.follower);
        setRealFollower(response.data.result.realFollower);
        setRangeAvg(response.data.result.range_average);
        setTopAvg(response.data.result.top_average);
        setUserName(response.data.result.username);
        setMyPercent(Math.floor(response.data.result.my_persent));
        setQuality(Math.floor(response.data.result.quality));
        setprofileImg(response.data.result.profileImg);
        setrange(response.data.result.range);
      });
  }, [JWT]);

  return (
    <>
      {asd === 1 && (
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
          <NumSection Follower={Follower} realFollower={realFollower} />
          <GraphSection
            Follower={Follower}
            TopAvg={TopAvg}
            rangeAvg={rangeAvg}
            realFollower={realFollower}
            UserName={UserName}
            MyPercent={MyPercent}
            profileImg={profileImg}
            range={range}
          />
          <SliderSections Quality={Quality} UserName={UserName} />
          <View style={{height: 100}}></View>
        </ScrollView>
      )}
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

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icons from '../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import Point from './Sections/Point';
import History from './Sections/History';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MyPoint() {
  const navigation = useNavigation();
  const [myPoint, setmyPoint] = useState(0);
  const [accumulatedPoint, setaccumulatedPoint] = useState(0);
  const [PointList, setPointList] = useState([
    {
      pointId: 0,
      point: 0,
      content: '',
      remainingPoint: 0,
      type: 0,
      status: '',
      createdDate: '',
      createdTime: '',
    },
  ]);

  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
    });
  }, []);
  // const [asd, setasd] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setasd(1);
  //   }, 100);
  // }, []);
  const call = value => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get('https://www.markin-app.site/app/users/point', {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        setmyPoint(response.data.result.myPoint);
        setaccumulatedPoint(response.data.result.accumulatedPoint);
        setPointList(
          response.data.result.pointList.map(
            (node: {
              pointId: any;
              point: any;
              content: any;
              remainingPoint: any;
              type: any;
              status: any;
              createdDate: any;
              createdTime: any;
            }) => ({
              pointId: node.pointId,
              point: node.point,
              content: node.content,
              remainingPoint: node.remainingPoint,
              type: node.type,
              status: node.status,
              createdDate: node.createdDate,
              createdTime: node.createdTime,
            }),
          ),
        );
        console.log(PointList);
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.allView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', height: 40}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', left: '5%'}}>
            <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.TitleText}>?????? ?????????</Text>
        <View style={styles.sectionView}>
          <Point myPoint={myPoint} accumulatedPoint={accumulatedPoint} />
        </View>
        <View style={styles.sectionView}>
          <Text style={styles.TitleText}>????????? ??????</Text>
          {PointList.length === 0 ? (
            <View
              style={{
                width: '100%',
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'NotoSansKR-Regular',
                  fontSize: 16,
                  color: '#747474',
                  marginTop: -30,
                }}>
                ????????? ????????? ????????????.
              </Text>
            </View>
          ) : (
            <History PointList={PointList} />
          )}
        </View>
        <View style={{padding: '5%'}}>
          <Text style={{fontFamily: 'NotoSansKR-Regular', color: '#424242'}}>
            - ?????? ?????? ???????????? 10,000??? ?????????.{'\n'} - ???????????? ?????? 15???,
            ????????? ???????????????.{'\n'} (???????????? ???????????? ??????, ?????? ????????????
            ???????????????.)
            {'\n'} - ???????????? 5????????? ????????? ??????, ?????? 3.3%??? ?????? ?????? ???
            ???????????????. {'\n'}- ???????????? ????????? ???????????? ???????????????. {'\n'}
            {'\n'}?????? ??? ????????? ?????? ?????? 1:1 ??????????????? ????????? ???????????????.
          </Text>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
  },
  TitleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 25,
    marginLeft: '5%',
  },
  sectionView: {
    width: '100%',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 5,
    paddingTop: '5%',
  },
});

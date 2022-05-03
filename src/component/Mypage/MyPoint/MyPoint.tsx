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
    // tslint:disable-next-line: no-floating-promises
    axios
      .get('https://www.markin-app.site/app/users/point', {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
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
  }, []);
  return (
    <View style={styles.allView}>
      <ScrollView>
        <View style={{alignItems: 'center', height: 40}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', left: '5%'}}>
            <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.TitleText}>나의 포인트</Text>
        <View style={styles.sectionView}>
          <Point myPoint={myPoint} accumulatedPoint={accumulatedPoint} />
        </View>
        <View style={styles.sectionView}>
          <Text style={styles.TitleText}>포인트 내역</Text>
          <History PointList={PointList} />
        </View>
        <View style={{padding: '5%'}}>
          <Text style={{fontFamily: 'NotoSansKR-Regular', color: '#424242'}}>
            - 최소 환급 포인트는 10,000원 입니다.{'\n'} - 포인트는 매달 15일,
            말일에 환급됩니다.{'\n'} (지급일이 공휴일인 경우, 다음 영업일에
            지급됩니다.)
            {'\n'} - 입금액이 5만원이 초과될 경우, 세금 3.3%를 원천 징수 후
            지급됩니다. {'\n'}- 예금주는 실명과 동일해야 지급됩니다. {'\n'}
            {'\n'}환급 시 문제가 생길 경우 1:1 문의하기로 문의를 남겨주세요.
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

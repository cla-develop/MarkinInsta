/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Refund from '../images/Refund.png';
import Announce from '../images/Announce.png';
export default function History(props) {
  return (
    <View style={{padding: '5%'}}>
      {props.PointList.map(item => (
        <View key={item.pointId} style={{marginBottom: 15}}>
          <Text style={styles.dateText}>{item.createdDate}</Text>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{justifyContent: 'center'}}>
              {item.content === '환급' ? (
                <Image source={Refund} style={{height: 55, width: 55}} />
              ) : (
                <Image source={Announce} style={{height: 55, width: 55}} />
              )}
            </View>
            <View
              style={{justifyContent: 'center', marginLeft: 15, width: '60%'}}>
              <Text style={styles.TitleText}>{item.content}</Text>
              <Text style={styles.TimeText}>{item.createdTime}</Text>
            </View>
            {item.status === 'REQUEST' && item.type === 1 && (
              <View style={[styles.reqStatus, {backgroundColor: '#FEE7E7'}]}>
                <Text
                  style={{fontFamily: 'NotoSansKR-Medium', color: '#FF5959'}}>
                  진행중
                </Text>
              </View>
            )}
            {item.status === 'COMPLETED' && item.type === 1 && (
              <View style={[styles.reqStatus, {backgroundColor: '#F0FFF0'}]}>
                <Text
                  style={{fontFamily: 'NotoSansKR-Medium', color: '#00B92B'}}>
                  완료
                </Text>
              </View>
            )}
            {item.content === '환급' ? (
              <View style={{justifyContent: 'center', width: 80}}>
                <Text style={styles.pointText}>
                  -{item.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  P
                </Text>
                <Text style={[styles.TimeText, {textAlign: 'right'}]}>
                  {item.remainingPoint
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  P
                </Text>
              </View>
            ) : (
              <View style={{justifyContent: 'center', width: 80}}>
                <Text style={styles.pointText}>
                  +{item.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  P
                </Text>
                <Text style={[styles.TimeText, {textAlign: 'right'}]}>
                  {item.remainingPoint
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  P
                </Text>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 12,
    color: '#424242',
  },
  TitleText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
    color: '#181818',
  },
  TimeText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    color: '#747474',
    fontSize: 12,
    marginTop: 3,
  },
  pointText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 16,
    color: '#181818',
    textAlign: 'right',
  },
  reqStatus: {
    paddingLeft: 13,
    paddingRight: 13,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 110,
    borderRadius: 8,
    top: 6,
  },
});

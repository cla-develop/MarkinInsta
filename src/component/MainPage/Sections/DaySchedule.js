import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
export default function DaySchedule() {
  var date = new Date();
  var year = date.getFullYear(); //yyyy
  var month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  var day = date.getDate(); //dd
  day = day >= 10 ? day : '0' + day;
  const B = props => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
  return (
    <View style={styles.outView}>
      <View style={{marginTop: 20, marginLeft: 20, marginBottom: 20}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: 'NotoSansKR-Medium',
          }}>
          {year}년 {month}월 {day}일{' '}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginBottom: 20}}>
        <View style={{backgroundColor: '#D6B5F0', height: 30, width: 5}}></View>
        <View style={styles.scheduleTextView}>
          <Text style={styles.scheduleText}>클릭앤 퍼니 업로드 마감일</Text>
          <Text style={styles.scheduleTextTime}></Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginBottom: 20}}>
        <View style={{backgroundColor: '#FFC29F', height: 30, width: 5}}></View>
        <View style={styles.scheduleTextView}>
          <Text style={styles.scheduleText}>루이까또즈 미팅</Text>
          <Text style={styles.scheduleTextTime}>pm 2:00 - 3:00</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginBottom: 20}}>
        <View style={{backgroundColor: '#FFA9A9', height: 30, width: 5}}></View>
        <View style={styles.scheduleTextView}>
          <Text style={styles.scheduleText}>강소백 업로드 마감</Text>
          <Text style={styles.scheduleTextTime}>pm 11:59</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    width: '94%',
    // height: 200,
    marginLeft: '3%',
    borderRadius: 18,
    borderColor: '#111111',
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
  },
  scheduleText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Medium',
  },
  scheduleTextTime: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Thin',
  },
  scheduleTextView: {
    marginLeft: 10,
    marginTop: -2,
  },
});

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AlarmList from './AlarmList';
import Knock from './AlarmBlock/Knock';
import Friending from './AlarmBlock/Friending';
import Campaign from './AlarmBlock/Campaign';
import Calendar from './AlarmBlock/Calendar';
import BadComment from './AlarmBlock/badComment';
export default function AlarmListing() {
  return (
    <>
      {AlarmList.reverse().map(item => (
        <View key={item.id}>
          {item.Sort === 0 && (
            <TouchableOpacity style={{height: 80, justifyContent: 'center'}}>
              <Knock id={item.id} img={item.img} uName={item.uName} />
            </TouchableOpacity>
          )}
          {item.Sort === 1 && (
            <TouchableOpacity
              style={{
                height: 80,
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
              }}>
              <Friending id={item.id} img={item.img} uName={item.uName} />
            </TouchableOpacity>
          )}
          {item.Sort === 2 && (
            <TouchableOpacity style={{height: 80, justifyContent: 'center'}}>
              <Campaign id={item.id} img={item.img} uName={item.uName} />
            </TouchableOpacity>
          )}
          {item.Sort === 3 && (
            <TouchableOpacity style={{height: 80, justifyContent: 'center'}}>
              <Calendar id={item.id} img={item.img} uName={item.uName} />
            </TouchableOpacity>
          )}
          {item.Sort === 4 && (
            <TouchableOpacity style={{height: 80, justifyContent: 'center'}}>
              <BadComment id={item.id} Bnum={item.Bnum} />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({});

// 역순으로 출력 혹은 아래로 내려가고 위쪽으로 쌓이도록

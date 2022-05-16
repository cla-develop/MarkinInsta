import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ForMe from './Sections/ForMe';
import Popular from './Sections/Popular';
import SoonEnd from './Sections/SoonEnd';
import ChatBot from './Sections/ChatBot';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ActivityHome() {
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
    });
  }, []);
  const [asd, setasd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setasd(1);
    }, 100);
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginBottom: '80%', paddingLeft: '5%'}}>
        {asd === 1 && (
          <View style={{marginTop: 20}}>
            <ForMe JWT={JWT} />
          </View>
        )}
        <View style={{marginTop: 30}}>
          <ChatBot />
        </View>
        <View style={{marginTop: 30}}>
          <SoonEnd />
        </View>
        <View style={{marginTop: 30}}>
          <Popular />
        </View>
        {/* <View style={{marginTop: 30}}>
          <CategoryReco />
        </View> */}
      </View>
      <View style={{height: 100}}></View>
    </ScrollView>
  );
}

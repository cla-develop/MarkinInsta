import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ForMe from './Sections/ForMe';
import Popular from './Sections/Popular';
import SoonEnd from './Sections/SoonEnd';
import ChatBot from './Sections/ChatBot';
import CategoryReco from './Sections/CategoryReco';
export default function ActivityHome() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginBottom: '80%', paddingLeft: '5%'}}>
        <View style={{marginTop: 20}}>
          <ForMe />
        </View>
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

/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import RankList from '../Ranking/Sections/RankList/RankList';
import Feed from './Feed/Feed';
// import ChatBot from './Sections/ChatBot';
import DayChange from './Sections/DayChange';
import DayPosting from './Sections/DayPosting';
// import DaySchedule from './Sections/DaySchedule';
// import Issue from './Sections/Issue';
import MainHeader from './Sections/MainHeader';
import DoingActivity from './Sections/DoingActivity/DoingActivity';
import Banner from '../../images/Banner.png';
import {useNavigation} from '@react-navigation/native';

// tslint:disable-next-line: no-any
export default function Main(props: any) {
  const navigation = useNavigation();
  const navigateToHome = () => {
    props.navigation.navigate('Home');
  };
  const navigateToRanking = () => {
    props.navigation.navigate('Ranking');
  };
  const navigateToSearch = () => {
    props.navigation.navigate('Search');
  };
  const navigateToAlarm = () => {
    props.navigation.navigate('Alarm');
  };
  const navigateToMessage = () => {
    props.navigation.navigate('Message');
  };

  const [stateChange, setstateChange] = useState(1);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* Header */}
      <View style={styles.HeaderStyle}>
        <MainHeader
          navigateToHome={navigateToHome}
          navigateToRanking={navigateToRanking}
          stateChange={stateChange}
          setstateChange={setstateChange}
          navigateToSearch={navigateToSearch}
          navigateToAlarm={navigateToAlarm}
          navigateToMessage={navigateToMessage}
        />
      </View>
      {stateChange === 1 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: '#F5F4F8'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Ask')}>
            <View
              style={{
                width: '100%',
                marginTop: 10,
                paddingLeft: '2%',
                paddingRight: '2%',
              }}>
              <Image source={Banner} style={{width: '100%', height: 100}} />
            </View>
          </TouchableOpacity>
          {/* DayChange */}
          <View style={{width: '100%', marginTop: 10}}>
            <DayChange />
          </View>
          <View style={{width: '100%', marginTop: 10}}>
            {/* <DaySchedule /> */}
            <DayPosting />
          </View>
          <View style={{marginTop: 10, marginBottom: 150, width: '100%'}}>
            <DoingActivity />
          </View>
        </ScrollView>
      )}
      {stateChange === 2 && <Feed />}
      {stateChange === 3 && (
        <View style={{width: '100%'}}>
          <RankList />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(212, 212, 212)',
  },
  Logo: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{translateX: -27}, {translateY: 0}],
  },
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
});

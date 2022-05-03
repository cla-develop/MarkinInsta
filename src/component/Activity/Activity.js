import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ActivityHome from './ActivityHome/ActivityHome';
import ActivityHeader from './AvtivityHeader/ActivityHeader';
import ActivityAll from './ActivityAll/ActivityAll';
export default function Activity(props) {
  const navigateToSearch = () => {
    props.navigation.navigate('Search');
  };
  const navigateToAlarm = () => {
    props.navigation.navigate('Alarm');
  };
  const navigateToMessage = () => {
    props.navigation.navigate('Message');
  };

  const [StateChange, setStateChange] = useState(1);
  return (
    <View style={styles.allView}>
      <View style={styles.HeaderStyle}>
        <ActivityHeader
          StateChange={StateChange}
          setStateChange={setStateChange}
          navigateToAlarm={navigateToAlarm}
          navigateToMessage={navigateToMessage}
          navigateToSearch={navigateToSearch}
        />
      </View>
      {StateChange === 1 && (
        <View>
          <ActivityHome />
        </View>
      )}
      {StateChange === 2 && (
        <View>
          <ActivityAll />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    backgroundColor: 'white',
    paddingTop: 50,
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
  HeaderStyle: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(212, 212, 212)',
  },
});

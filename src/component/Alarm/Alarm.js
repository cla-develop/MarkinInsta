import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AlarmHeader from './Sections/AlarmHeader';
import MainFooter from '../Footer/MainFooter';
import AlarmListing from './Sections/AlarmListing';
export default function Alarm(props) {
  const goBack = () => {
    props.navigation.goBack();
  };
  const navigateToMyPage = () => {
    props.navigation.navigate('YourPage');
  };
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.HeaderStyle}>
        <AlarmHeader goBack={goBack} />
      </View>
      <ScrollView
        style={{
          width: '100%',
        }}>
        <AlarmListing />
      </ScrollView>
      <View style={styles.FooterStyle}>
        <MainFooter
          navigateToMyPage={navigateToMyPage}
          navigateToMain={navigateToMain}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    paddingTop: 40,
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginBottom: 0,
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

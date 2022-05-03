import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RankingHeader from './Sections/RankingHeader';
import Footer from '../Footer/MainFooter';

import RankList from './Sections/RankList/RankList';
export default function Ranking(props) {
  const navigateToMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.HeaderStyle}>
        <RankingHeader navigateToMain={navigateToMain} />
      </View>
      <View style={{width: '90%', marginLeft: '5%'}}></View>
      <View style={{width: '100%'}}>
        <RankList />
      </View>
      <View style={styles.FooterStyle}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    height: 140,
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
  input: {
    width: '90%',
    height: 56,
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 30,
    fontFamily: 'NotoSansKR-Regular',
  },
});

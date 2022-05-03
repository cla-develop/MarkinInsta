import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from '../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
export default function RealEffect(props: any) {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 15}}>
      <TouchableOpacity onPress={() => navigation.navigate('RealEffect')}>
        <View style={styles.mainView}>
          <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
            <Text style={styles.TopText}>진짜 영향력</Text>
            <View style={{position: 'absolute', right: 15}}>
              <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginLeft: '55%'}}>
            <View style={styles.UpHighlightView}>
              <View style={{flexDirection: 'row', paddingLeft: 6}}>
                <Icons.AntDesign name="arrowup" size={15} color="#57C971" />
                <Text style={styles.UpHiText}>21</Text>
              </View>
            </View>
            <Text style={styles.numText}>
              {props.realEffectCount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              명
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '95%',
    height: 125,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  UpHighlightView: {
    backgroundColor: '#E8FFED',
    justifyContent: 'center',
    width: 48,
  },
  UpHiText: {
    color: '#57C971',
    textAlign: 'center',
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  numText: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
});

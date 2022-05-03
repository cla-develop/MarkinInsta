/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import calendaricon from '../../icons/calendaricon.png';
import campaign from '../../icons/campaign.png';
import home from '../../icons/home.png';
import managers from '../../icons/managers.png';
import myfeed from '../../icons/myfeed.png';
import {useNavigation} from '@react-navigation/native';

export default function MainFooter(props) {
  const navigation = useNavigation();
  return (
    <View style={{height: 80}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.setbodyChange(0)}
          style={{width: '25%'}}>
          <View
            style={
              props.bodyChange === 0 ? styles.focusSpace : styles.unfocusSpace
            }>
            <Image source={home} style={{width: 20, height: 20}} />
            <Text
              style={
                props.bodyChange === 0 ? styles.focusText : styles.underText
              }>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setbodyChange(1)}
          style={{width: '25%'}}>
          <View
            style={
              props.bodyChange === 1 ? styles.focusSpace : styles.unfocusSpace
            }>
            <Image source={campaign} style={{width: 20, height: 20}} />
            <Text
              style={
                props.bodyChange === 1 ? styles.focusText : styles.underText
              }>
              Activity
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.setbodyChange(2)}
          style={{width: '25%'}}>
          <View
            style={
              props.bodyChange === 2 ? styles.focusSpace : styles.unfocusSpace
            }>
            <Image source={managers} style={{width: 20, height: 20}} />
            <Text
              style={
                props.bodyChange === 2 ? styles.focusText : styles.underText
              }>
              Manager
            </Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => props.setbodyChange(3)}
          style={{width: '25%'}}>
          <View
            style={
              props.bodyChange === 3 ? styles.focusSpace : styles.unfocusSpace
            }>
            <Image source={calendaricon} style={{width: 20, height: 20}} />
            <Text
              style={
                props.bodyChange === 3 ? styles.focusText : styles.underText
              }>
              Calendar
            </Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => props.setbodyChange(4)}
          style={{width: '25%'}}>
          <View
            style={
              props.bodyChange === 4 ? styles.focusSpace : styles.unfocusSpace
            }>
            <Image source={myfeed} style={{width: 20, height: 20}} />
            <Text
              style={
                props.bodyChange === 4 ? styles.focusText : styles.underText
              }>
              MyPage
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  underText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Roboto-Light',
  },
  focusText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Roboto-Medium',
  },
  focusSpace: {width: '100%', alignItems: 'center', opacity: 1},
  unfocusSpace: {width: '100%', alignItems: 'center', opacity: 0.5},
});

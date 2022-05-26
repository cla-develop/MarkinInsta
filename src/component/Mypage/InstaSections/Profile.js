/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import noprofile from '../../../images/noprofile.png';
import Icons from '../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';

export default function Profile(props) {
  const navigation = useNavigation();
  // {(item.followersCount / 1000).toFixed(1)} k

  return (
    <>
      <View style={{width: '90%', marginLeft: '5%', marginBottom: 25}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={
              props.profileImg === '' || props.profileImg == null
                ? noprofile
                : {uri: props.profileImg}
            }
            style={styles.profileImgV}
          />
          <View style={{marginLeft: 35, width: 195}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={[styles.normalText]}>실제 영향력</Text>
              {props.realFollower >= 1000000 ? (
                <Text style={styles.followerText}>
                  {(props.realFollower / 1000000).toFixed(1)} M
                </Text>
              ) : (
                <Text style={styles.followerText}>
                  {(props.realFollower / 1000).toFixed(1)} K
                </Text>
              )}
              <Text style={[styles.normalText, {marginLeft: 25}]}>팔로워</Text>
              {props.followers_count >= 1000000 ? (
                <Text style={styles.followerText}>
                  {(props.followers_count / 1000000).toFixed(1)} M
                </Text>
              ) : (
                <Text style={styles.followerText}>
                  {(props.followers_count / 1000).toFixed(1)} K
                </Text>
              )}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}>
              {props.Category !== undefined && (
                <View style={{flexDirection: 'row', marginTop: 13}}>
                  {props.Category.map(item => (
                    <Text style={styles.greyText} key={item}>
                      {item}{' '}
                    </Text>
                  ))}
                  <Icons.SimpleLineIcons
                    name="pencil"
                    size={14}
                    color="#747474"
                    style={{marginLeft: 6, marginTop: 3}}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.FirstSection}>
        <TouchableOpacity onPress={() => navigation.navigate('MYActivity')}>
          <View style={{flexDirection: 'row', width: 250}}>
            <View style={{width: 100}}>
              <Text style={{fontFamily: 'NotoSansKR-Medium', fontSize: 15}}>
                진행중인 활동
              </Text>
            </View>
            <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: 15}}>
              {props.CampaginCount}개
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.FirstSection}>
        <TouchableOpacity onPress={() => navigation.navigate('MyPoint')}>
          <View style={{flexDirection: 'row', width: 250}}>
            <View style={{width: 100}}>
              <Text style={{fontFamily: 'NotoSansKR-Medium', fontSize: 15}}>
                현재 포인트
              </Text>
            </View>
            <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: 15}}>
              {props.Point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  NumText: {fontFamily: 'NotoSansKR-Bold', marginLeft: 12},
  normalText: {
    fontFamily: 'NotoSansKR-Regular',
  },
  greyText: {
    fontFamily: 'NotoSansKR-Medium',
    color: '#747474',
    fontSize: 14,
  },
  addFeedFrame: {
    borderWidth: 1,
    marginTop: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#424242',
    borderRadius: 4,
  },
  btnText: {
    fontFamily: 'NotoSansKR-Medium',
    color: '#424242',
  },
  FirstSection: {
    paddingTop: 13,
    paddingBottom: 13,
    width: '100%',

    borderTopColor: '#EDEDED',
    borderTopWidth: 1,
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  profileImgV: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },
  followerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    marginLeft: 5,
  },
});

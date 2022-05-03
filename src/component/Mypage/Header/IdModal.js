import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import instaLogo from '../../../images/instaLogo.png';
import axios from 'axios';
export default function IdModal(props) {
  const handleId = e => {
    props.setfirst(e);
    props.setisModal(false);
  };

  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setisModal(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.isModal}
        onBackdropPress={() => props.setisModal(false)}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 35,
            maxHeight: 400,
          }}>
          <View style={{marginLeft: 30, marginTop: 30}}>
            <Text style={{fontFamily: 'NotoSansKR-Medium', fontSize: 18}}>
              계정변경
            </Text>
          </View>
          <ScrollView>
            {props.Data.map(item => (
              <TouchableOpacity
                onPress={() => handleId(item.username)}
                key={item.iguserId}
                style={[
                  styles.touchWrapstyle,
                  {opacity: item.username === props.first ? 1 : 0.5},
                ]}>
                <Image
                  source={instaLogo}
                  style={{height: 20, width: 20, marginTop: 3, marginLeft: 5}}
                />
                <Text style={styles.Textstyle}>{item.username}</Text>
              </TouchableOpacity>
            ))}
            {/* 
            <TouchableOpacity
              onPress={() => handleId(1)}
              style={[
                styles.touchWrapstyle,
                {opacity: props.IdNum === 1 ? 1 : 0.5},
              ]}>
              <Image
                source={instaLogo}
                style={{height: 20, width: 20, marginTop: 3, marginLeft: 5}}
              />
              <Text style={styles.Textstyle}>Jangjaeko45</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              //   onPress={handleCurrent}
              style={[styles.RFTouchWrap]}>
              <Text style={styles.Textstyle}>
                + &nbsp;&nbsp;&nbsp; 인스타그램 계정 추가하기
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}
const styles = StyleSheet.create({
  Textstyle: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 15,
    marginLeft: '3%',
  },
  touchWrapstyle: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    height: 50,
    width: '90%',
    paddingTop: 10,
    marginTop: 10,
    marginLeft: '5%',
    flexDirection: 'row',
  },
  RFTouchWrap: {
    height: 50,
    marginTop: 15,
    marginBottom: 50,
    marginLeft: '5%',
    flexDirection: 'row',
  },
  ModalWrap: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 35,
  },
});

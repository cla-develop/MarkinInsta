/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function MyRankModal(props: any) {
  const handlefollower = () => {
    props.setFnumLet('팔로워순');
    props.setIsModalVisble(false);
  };
  const handleRealFollower = () => {
    props.setFnumLet('진짜 영향력순');
    props.setIsModalVisble(false);
  };
  const closeModal = () => {
    props.setIsModalVisble(false);
  };
  const styles = StyleSheet.create({
    Textstyle: {
      fontFamily: 'NotoSansKR-Bold',
      fontSize: 15,
      marginLeft: '3%',
    },
    touchWrapstyle: {
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: '#00000033',
      height: 50,
      width: '90%',
      paddingTop: 5,
      flexDirection: 'row',
    },
    RFTouchWrap: {
      height: 50,
      marginTop: 20,
    },
    ModalWrap: {
      height: 200,
      backgroundColor: 'white',
      borderRadius: 35,
    },
    FcircleSt: {
      width: 15,
      height: 15,
      borderRadius: 15 / 2,
      borderColor: '#7553FF',
      borderWidth: 4,
      position: 'absolute',
      left: 300,
      marginTop: 7,
    },
    UnFcircleSt: {
      width: 15,
      height: 15,
      borderRadius: 15 / 2,
      borderColor: '#DEDEDE',
      borderWidth: 4,
      marginTop: 7,
      position: 'absolute',
      left: 300,
    },
  });

  return (
    // tslint:disable-next-line: jsx-no-lambda
    <GestureRecognizer style={{flex: 1}} onSwipeDown={() => closeModal()}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        // tslint:disable-next-line: no-unsafe-any
        isVisible={props.IsModalVisble}
        // tslint:disable-next-line: jsx-no-lambda
        onBackdropPress={() => closeModal()}>
        <View style={styles.ModalWrap}>
          <View style={{marginLeft: '5%', marginTop: '8%'}}>
            <TouchableOpacity
              onPress={handleRealFollower}
              style={[styles.touchWrapstyle]}>
              <View style={{width: 200}}>
                <Text
                  style={[
                    styles.Textstyle,
                    {
                      color:
                        props.FnumLet === '진짜 영향력순'
                          ? '#181818'
                          : '#9C9C9C',
                    },
                  ]}>
                  진짜 영향력순
                </Text>
              </View>
              {/* <View
                style={[
                  props.FnumLet === '진짜 영향력순'
                    ? styles.FcircleSt
                    : styles.UnFcircleSt,
                ]}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlefollower}
              style={[styles.RFTouchWrap]}>
              <View style={{width: 200}}>
                <Text
                  style={[
                    styles.Textstyle,
                    {
                      color:
                        props.FnumLet === '팔로워순' ? '#181818' : '#9C9C9C',
                    },
                  ]}>
                  팔로워순
                </Text>
              </View>
              {/* <View
                style={[
                  props.FnumLet === '팔로워순'
                    ? styles.FcircleSt
                    : styles.UnFcircleSt,
                ]}
              /> */}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from 'react-native-modal';
export default function FollwerModal(props: any) {
  const handlefollower = () => {
    props.setFnumLet('팔로워순');
    props.setFNumModalVis(false);
  };
  const handleRealFollower = () => {
    props.setFnumLet('진짜 영향력순');
    props.setFNumModalVis(false);
  };

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
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setFNumModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.FNumModalVis}
        onBackdropPress={props.handleFNumModalVisable}>
        <View style={styles.ModalWrap}>
          <View style={{marginLeft: '5%', marginTop: '8%'}}>
            <TouchableOpacity
              onPress={handleRealFollower}
              style={[
                styles.touchWrapstyle,
                {opacity: props.FnumLet === '진짜 영향력순' ? 1 : 0.5},
              ]}>
              <View style={{width: 200}}>
                <Text style={styles.Textstyle}>진짜 영향력순</Text>
              </View>
              {/* <View
                style={[
                  props.FnumLet === '진짜 영향력순'
                    ? styles.FcircleSt
                    : styles.UnFcircleSt,
                ]}></View> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlefollower}
              style={[
                styles.RFTouchWrap,
                {opacity: props.FnumLet === '팔로워순' ? 1 : 0.5},
              ]}>
              <View style={{width: 200}}>
                <Text style={styles.Textstyle}>팔로워순</Text>
              </View>
              {/* <View
                style={[
                  props.FnumLet === '팔로워순'
                    ? styles.FcircleSt
                    : styles.UnFcircleSt,
                ]}></View> */}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

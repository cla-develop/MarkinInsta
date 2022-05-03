import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function RangeModal(props: any) {
  const handleWeek = () => {
    props.setPeriod('일주일');
    props.setIsModalVisble(false);
  };
  const handleMonth = () => {
    props.setPeriod('최근 30일');
    props.setIsModalVisble(false);
  };
  const closeModal = () => {
    props.setIsModalVisble(false);
  };
  return (
    <GestureRecognizer style={{flex: 1}} onSwipeDown={() => closeModal()}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.IsModalVisble}
        onBackdropPress={() => closeModal()}>
        <View style={styles.ModalWrap}>
          <TouchableOpacity onPress={handleWeek}>
            <View style={styles.touchWrapstyle}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.Period == '일주일' ? 'black' : '#9C9C9C'},
                ]}>
                일주일
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMonth}>
            <View style={styles.RFTouchWrap}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.Period == '최근 30일' ? 'black' : '#9C9C9C'},
                ]}>
                최근 30일
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  ModalWrap: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingLeft: '5%',
    paddingTop: '8%',
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
  Textstyle: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 15,
    marginLeft: '3%',
  },
  RFTouchWrap: {
    height: 50,
    marginTop: 20,
  },
});

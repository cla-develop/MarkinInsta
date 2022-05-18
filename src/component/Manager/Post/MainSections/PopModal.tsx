import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function PopModal(props: any) {
  const handlelike = () => {
    props.setStand('좋아요순');
    props.setIsModalVisible(false);
  };
  const handleComment = () => {
    props.setStand('댓글순');
    props.setIsModalVisible(false);
  };
  const handlejoin = () => {
    props.setStand('조회수순');
    props.setIsModalVisible(false);
  };
  const handleSave = () => {
    props.setStand('저장순');
    props.setIsModalVisible(false);
  };
  const closeModal = () => {
    props.setIsModalVisible(false);
  };
  return (
    <GestureRecognizer style={{flex: 1}} onSwipeDown={() => closeModal()}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.IsModalVisible}
        onBackdropPress={() => closeModal()}>
        <View style={styles.ModalWrap}>
          <TouchableOpacity onPress={handlelike}>
            <View style={styles.touchWrapstyle}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.Stand == '좋아요순' ? 'black' : '#9C9C9C'},
                ]}>
                좋아요순
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleComment}>
            <View style={styles.RFTouchWrap}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.Stand == '댓글순' ? 'black' : '#9C9C9C'},
                ]}>
                댓글순
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={handlejoin}>
            <View style={styles.RFTouchWrap}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.Stand == '조회수순' ? 'black' : '#9C9C9C'},
                ]}>
                조회수순
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave}>
            <View style={styles.RFTouchWrap}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.Stand == '저장순' ? 'black' : '#9C9C9C'},
                ]}>
                저장순
              </Text>
            </View>
          </TouchableOpacity> */}
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
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    width: '90%',
  },
});

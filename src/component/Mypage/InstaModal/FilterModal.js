import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from 'react-native-modal';
export default function FilterModal(props) {
  const handleCurrent = () => {
    props.setSort(1);
    props.setisModal(false);
    props.setSortText('최신순');
  };
  const handleOld = () => {
    props.setSort(2);
    props.setisModal(false);
    props.setSortText('오래된순');
  };
  const handleLikes = () => {
    props.setSort(3);
    props.setisModal(false);
    props.setSortText('좋아요순');
  };
  const handleComment = () => {
    props.setSort(4);
    props.setisModal(false);
    props.setSortText('댓글순');
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
            height: 300,
            backgroundColor: 'white',
            borderRadius: 35,
          }}>
          <View style={{marginLeft: '5%', marginTop: '8%'}}>
            <TouchableOpacity
              onPress={handleCurrent}
              style={[
                styles.touchWrapstyle,
                {opacity: props.Sort === 1 ? 1 : 0.5},
              ]}>
              <Text style={styles.Textstyle}>최신순</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleOld}
              style={[
                styles.touchWrapstyle,
                {opacity: props.Sort === 2 ? 1 : 0.5},
              ]}>
              <Text style={styles.Textstyle}>오래된순</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLikes}
              style={[
                styles.touchWrapstyle,
                {opacity: props.Sort === 3 ? 1 : 0.5},
              ]}>
              <Text style={styles.Textstyle}>좋아요순</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleComment}
              style={[
                styles.RFTouchWrap,
                {opacity: props.Sort === 4 ? 1 : 0.5},
              ]}>
              <Text style={styles.Textstyle}>댓글순</Text>
            </TouchableOpacity>
          </View>
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
  },
  RFTouchWrap: {
    height: 50,
    marginTop: 15,
  },
  ModalWrap: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 35,
  },
});

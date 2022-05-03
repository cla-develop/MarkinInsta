import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
export default function FollowerSoon(props) {
  const handlerecent = () => {
    props.setSortText('최신순');
    props.setFollowModalVis(false);
  };
  const handlepop = () => {
    props.setSortText('인기순');
    props.setFollowModalVis(false);
  };
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setFollowModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        onBackdropPress={() => props.setFollowModalVis(false)}
        isVisible={props.FollowModalVis}>
        <View style={styles.ModalWrap}>
          <TouchableOpacity onPress={handlerecent}>
            <View style={styles.touchWrapstyle}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.SortText == '최신순' ? 'black' : '#9C9C9C'},
                ]}>
                최신순
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlepop}>
            <View style={styles.RFTouchWrap}>
              <Text
                style={[
                  styles.Textstyle,
                  {color: props.SortText == '인기순' ? 'black' : '#9C9C9C'},
                ]}>
                인기순
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  ModalView: {
    height: 300,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingLeft: '5%',
    paddingTop: '8%',
  },
  searchView: {
    flexDirection: 'row',
    width: 80,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    right: '23%',
    top: 5,
  },
  searchImg: {
    width: 15,
    height: 15,
    marginTop: 4,
    transform: [{rotate: '270deg'}],
    marginLeft: 5,
  },
  searchText: {
    color: '#424242',
    fontFamily: 'NotoSansKR-Medium',
    marginLeft: 3,
  },
  filterview: {
    flexDirection: 'row',
    position: 'absolute',
    right: '5%',
    top: 5,
  },
  ModalWrap: {
    height: 350,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingLeft: '5%',
    paddingTop: '8%',
  },
  // eslint-disable-next-line no-dupe-keys
  ModalWrap: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingLeft: '5%',
    paddingTop: '8%',
  },
  touchWrapstyle: {
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EDEDED',
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

    width: '90%',
  },
});

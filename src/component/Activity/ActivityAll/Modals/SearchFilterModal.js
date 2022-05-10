import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import Category from './Sections/Category';

import Type from './Sections/Type';
export default function SearchFilterModal(props) {
  const [SettingTitle, setSettingTitle] = useState(1);
  const [Cat, setCat] = useState('전체');
  const [TypeCh, setTypeCh] = useState('전체 유형');
  const Title = StyleSheet.create({
    focusTitle: {
      fontFamily: 'NotoSansKR-Bold',
      fontSize: 18,
    },
    unFocusTitle: {
      fontFamily: 'NotoSansKR-Medium',
      fontSize: 18,
      color: '#B2B2B2',
    },
  });
  const closeModal = () => {
    props.setCategory(Cat);
    props.setType(TypeCh);
    props.setSearchModalVis(false);
  };
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setSearchModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.SearchModalVis}
        onBackdropPress={() => props.setSearchModalVis(false)}>
        <View style={styles.ModalView}>
          <View style={{flexDirection: 'row', marginLeft: '5%'}}>
            <TouchableOpacity onPress={() => setSettingTitle(1)}>
              <Text
                style={
                  SettingTitle === 1 ? Title.focusTitle : Title.unFocusTitle
                }>
                카테고리
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => setSettingTitle(2)}>
              <Text
                style={
                  SettingTitle === 2 ? Title.focusTitle : Title.unFocusTitle
                }>
                활동유형
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => setSettingTitle(3)}>
              <Text
                style={
                  SettingTitle === 3 ? Title.focusTitle : Title.unFocusTitle
                }>
                지역
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{marginLeft: 150}}
              onPress={() =>
                SettingTitle === 1 ? setCat('전체') : setTypeCh('전체 유형')
              }>
              <Text style={{fontSize: 16, fontFamily: 'NotoSansKR-Medium'}}>
                초기화
              </Text>
            </TouchableOpacity>
          </View>
          {SettingTitle === 1 && (
            <View style={{alignItems: 'center'}}>
              <Category Cat={Cat} setCat={setCat} />
            </View>
          )}
          {SettingTitle === 2 && (
            <View style={{marginLeft: 30}}>
              <Type TypeCh={TypeCh} setTypeCh={setTypeCh} />
            </View>
          )}
          {/* {SettingTitle === 3 && (
            <View style={{alignItems: 'center'}}>
              <Local Cat={Cat} setCat={setCat} />
            </View>
          )} */}
          <TouchableOpacity
            style={styles.settingBut}
            onPress={() => closeModal()}>
            <Text style={styles.settingText}>설정</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  ModalView: {
    height: 500,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingTop: 20,
  },
  settingBut: {
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 17,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: 400,
    left: '5%',
  },
  settingText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
    textAlign: 'center',
  },
});

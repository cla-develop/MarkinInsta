import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function LocalModal(props) {
  const location1 = [
    {key: 1, loca: '전체 지역'},
    {key: 2, loca: '서울'},
    {key: 3, loca: '경기/인천'},
  ];
  const location2 = [
    {key: 1, loca: '대전/충청'},
    {key: 2, loca: '대구/경북'},
    {key: 3, loca: '부산/경남'},
  ];
  const location3 = [
    {key: 1, loca: '광주/전라'},
    {key: 2, loca: '강원'},
    {key: 3, loca: '제주'},
  ];

  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setLocalModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.LocalModalVis}
        onBackdropPress={() => props.setLocalModalVis(false)}>
        <View style={styles.ModalView}>
          <View style={{flexDirection: 'row', marginLeft: '5%'}}>
            <Text style={styles.focusTitle}> 지역 선택</Text>
            <TouchableOpacity
              style={{marginLeft: 210, marginTop: 2}}
              onPress={() => props.setLocal('전체 지역')}>
              <Text style={{fontSize: 16, fontFamily: 'NotoSansKR-Medium'}}>
                초기화
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 60, alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              {location1.map(item => (
                <TouchableOpacity
                  style={[
                    styles.nonClickBut,
                    {
                      backgroundColor:
                        props.Local === item.loca ? '#7553FF' : 'white',
                      borderWidth: props.Local === item.loca ? 0 : 1,
                    },
                  ]}
                  onPress={() => props.setLocal(item.loca)}
                  key={item.key}>
                  <Text
                    style={[
                      styles.inText,
                      {color: props.Local === item.loca ? 'white' : 'black'},
                    ]}>
                    {item.loca}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* 두번째줄 */}
            <View style={{flexDirection: 'row', marginTop: 20}}>
              {location2.map(item => (
                <TouchableOpacity
                  style={[
                    styles.nonClickBut,
                    {
                      backgroundColor:
                        props.Local === item.loca ? '#7553FF' : 'white',
                      borderWidth: props.Local === item.loca ? 0 : 1,
                    },
                  ]}
                  onPress={() => props.setLocal(item.loca)}
                  key={item.key}>
                  <Text
                    style={[
                      styles.inText,
                      {color: props.Local === item.loca ? 'white' : 'black'},
                    ]}>
                    {item.loca}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* 세번째 줄 */}
            <View style={{flexDirection: 'row', marginTop: 20}}>
              {location3.map(item => (
                <TouchableOpacity
                  style={[
                    styles.nonClickBut,
                    {
                      backgroundColor:
                        props.Local === item.loca ? '#7553FF' : 'white',
                      borderWidth: props.Local === item.loca ? 0 : 1,
                    },
                  ]}
                  onPress={() => props.setLocal(item.loca)}
                  key={item.key}>
                  <Text
                    style={[
                      styles.inText,
                      {color: props.Local === item.loca ? 'white' : 'black'},
                    ]}>
                    {item.loca}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={styles.settingBut}
            onPress={() => props.setLocalModalVis(false)}>
            <Text style={styles.settingText}>설정</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </GestureRecognizer>
  );
}
const styles = StyleSheet.create({
  ModalView: {
    height: 400,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingTop: 20,
  },
  focusTitle: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
  },
  inText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Bold',
    textAlign: 'center',
  },
  greyBtn: {
    borderWidth: 1,
    borderColor: '#747474',
    height: 35,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  nonClickBut: {
    borderColor: 'black',
    height: 30,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  settingBut: {
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 17,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: 300,
    left: '5%',
  },
  settingText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
    textAlign: 'center',
  },
});

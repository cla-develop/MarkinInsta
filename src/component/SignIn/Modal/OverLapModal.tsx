import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
export default function OverLapModal(props: any) {
  const navigation = useNavigation();
  return (
    <Modal isVisible={props.IsOverlap}>
      <View style={styles.ModalView}>
        <Text style={styles.TopText}>이미 가입된 번호입니다.</Text>
        <Text style={styles.MiddleText}>
          가입된 번호로는 회원가입할 수 없습니다.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => props.setIsOverlap(false)}>
            <View style={styles.whiteView}>
              <Text style={styles.reText}>다시 입력하기</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ChooseWay')}>
            <View style={styles.blackView}>
              <Text style={styles.LoginText}>로그인하러 가기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  ModalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 19,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteView: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginRight: 7,
  },
  TopText: {
    marginBottom: 30,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
    color: '#181818',
  },
  MiddleText: {
    marginBottom: 30,
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
    color: '#747474',
  },
  reText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
    color: '#181818',
  },
  blackView: {
    width: 150,
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 7,
  },
  LoginText: {
    color: 'white',
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
  },
});

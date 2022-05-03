import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icons from '../../../Icons/Icons';

export default function InputPW(props: any) {
  const handlePassword = (event: string) => {
    props.setIsPassword(event);
    checkPW(event);
  };
  const handleConfirmPassword = (event: string) => {
    props.setConfirmPassword(event);
    // if (props.IsPassword === props.ConfirmPassword) {
    //   props.setCPVali(true);
    // } else {
    //   props.setCPVali(false);
    // }
  };

  const checkPW = (e: string) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    if (regExp.test(e) === true) {
      props.setPVali(true);
      return true;
    } else {
      props.setPVali(false);
      return false;
    }
  };

  return (
    <View>
      <Text style={{fontFamily: 'NotoSansKR-Medium'}}>비밀번호</Text>
      <TextInput
        value={props.IsPassword}
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder="영문+숫자 8자리 이상의 비밀번호 입력"
        onChangeText={handlePassword}
        secureTextEntry={true}
        style={[
          styles.input,
          {borderColor: props.IsPassword === '' ? '#DEDEDE' : 'black'},
        ]}
      />
      {props.PVali === true || props.IsPassword === '' ? (
        <View>
          <Text></Text>
        </View>
      ) : (
        <View style={styles.warnView}>
          <Text style={styles.warnText}>
            영어+숫자 8자리 이상의 비밀번호를 입력해주세요.
          </Text>
        </View>
      )}

      {/* 비밀번호 확인  */}

      <Text style={{marginTop: 40, fontFamily: 'NotoSansKR-Medium'}}>
        비밀번호 확인
      </Text>
      <TextInput
        value={props.ConfirmPassword}
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder="영문+숫자 8자리 이상의 비밀번호 입력"
        onChangeText={handleConfirmPassword}
        secureTextEntry={true}
        style={[
          styles.input,
          {borderColor: props.ConfirmPassword === '' ? '#DEDEDE' : 'black'},
        ]}
      />
      {props.IsPassword == props.ConfirmPassword ||
      props.ConfirmPassword === '' ? (
        <View>
          <Text></Text>
        </View>
      ) : (
        <View style={styles.warnView}>
          <Text style={styles.warnText}>비밀번호가 일치하지 않습니다.</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '95%',
    height: 30,
    backgroundColor: 'white',
    marginTop: 10,
    borderBottomWidth: 1,
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 0,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
  },
  warnText: {
    color: '#FF5959',
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 13,
  },
  warnView: {
    borderTopColor: '#FF5959',
    borderTopWidth: 2,
    width: '95%',
    paddingTop: 5,
    marginTop: -2,
  },
});

import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../Icons/Icons';
export default function Address(props) {
  const [DetailAd, setDetailAd] = useState('');
  const [SendAddress, setSendAddress] = useState('');
  const onChangeSendInput = event => {
    setSendAddress(event);
  };
  const onChangeInput = event => {
    setDetailAd(event);
  };
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10}}
        onPress={() => props.navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40}}>
        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 28}}>
          협찬상품 수령을 위해 {'\n'}주소를 입력해주세요
        </Text>
      </View>
      {/* 주소 입력  */}
      <Text
        style={{fontFamily: 'NotoSansKR-Bold', marginTop: 80, fontSize: 16}}>
        배송 주소
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TextInput
          placeholder="도로명,건물명 또는 지번으로 검색"
          autoCapitalize={'none'}
          autoCorrect={false}
          value={SendAddress}
          onChangeText={onChangeSendInput}
          //   onEndEditing={() => setisborderColor2(1)}
          style={[
            {
              width: '60%',
              borderColor: '#DEDEDE',
            },
            styles.input,
          ]}
        />
        <TouchableOpacity style={styles.addressBut}>
          <Text style={{fontFamily: 'NotoSansKR-Bold', color: 'white'}}>
            주소 검색
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{fontFamily: 'NotoSansKR-Bold', fontSize: 16, marginTop: 20}}>
        상세주소
      </Text>
      <View style={{marginTop: 10}}>
        <TextInput
          placeholder="상세주소를 입력하세요."
          autoCapitalize={'none'}
          autoCorrect={false}
          value={DetailAd}
          onChangeText={onChangeInput}
          //   onEndEditing={() => setisborderColor2(1)}
          style={[
            {
              width: '90%',
              borderColor: '#DEDEDE',
            },
            styles.input,
          ]}
        />
      </View>
      <TouchableOpacity
        style={styles.btnDesign}
        onPress={() => props.navigation.navigate('Category')}>
        <Text style={styles.btnText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: '5%',
  },
  btnDesign: {
    backgroundColor: 'black',
    width: '95%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    left: '5%',
    top: 750,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
  input: {
    height: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 14,
  },
  addressBut: {
    backgroundColor: '#DEDEDE',
    borderRadius: 3,
    justifyContent: 'center',
    width: 88,
    alignItems: 'center',
    marginLeft: 20,
    height: 50,
    marginTop: -12,
    shadowColor: '#dedede',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from '../../Icons/Icons';

export default function Name(props) {
  const [BName, setBName] = useState('');
  const onNameChange = event => {
    setBName(event);
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
        <Text style={styles.TitleLetter}>이름을 입력해주세요</Text>
      </View>
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="본명을 입력하세요"
          autoCapitalize={'none'}
          autoCorrect={false}
          value={BName}
          onChangeText={onNameChange}
          //   onEndEditing={() => setisborderColor2(1)}
          style={[
            {
              width: '92%',
              borderColor: '#DEDEDE',
            },
            styles.input,
          ]}
        />
      </View>

      <TouchableOpacity
        style={styles.btnDesign}
        onPress={() => props.navigation.navigate('AgeChoose')}>
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
  input: {
    height: 56,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 10,
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
  },
  btnDesign: {
    backgroundColor: 'black',
    width: '95%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    top: 750,
    marginLeft: '5%',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
  TitleLetter: {fontFamily: 'Roboto-Bold', fontSize: 28},
});

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icons from '../../../../Icons/Icons';
export default function Search(props) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{zIndex: 10}}>
        <Icons.Feather
          name="search"
          size={20}
          color="#111"
          style={{marginTop: 20, left: 35, opacity: 0.5}}
        />
      </TouchableOpacity>
      <TextInput
        value={props.isSearch}
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder="아이디를 검색하세요"
        onChangeText={props.handleSearch}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#0000000D',
    marginTop: 10,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 40,
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
  },
});

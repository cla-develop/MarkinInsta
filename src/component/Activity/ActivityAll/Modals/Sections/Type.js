import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from '../../../../Icons/Icons';
export default function Type(props) {
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity onPress={() => props.setTypeCh('전체 유형')}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{width: 300}}>
            <Text style={styles.Texts}>전체 유형</Text>
          </View>
          <Icons.AntDesign
            name="check"
            style={{
              color: props.TypeCh === '전체 유형' ? '#7553FF' : '#DEDEDE',
            }}
            size={20}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setTypeCh('서비스형')}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{width: 300}}>
            <Text style={styles.Texts}>서비스형</Text>
          </View>
          <Icons.AntDesign
            name="check"
            style={{color: props.TypeCh === '서비스형' ? '#7553FF' : '#DEDEDE'}}
            size={20}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setTypeCh('상품형')}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{width: 300}}>
            <Text style={styles.Texts}>상품형</Text>
          </View>
          <Icons.AntDesign
            name="check"
            style={{color: props.TypeCh === '상품형' ? '#7553FF' : '#DEDEDE'}}
            size={20}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setTypeCh('방문형')}>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{width: 300}}>
            <Text style={styles.Texts}>방문형</Text>
          </View>
          <Icons.AntDesign
            name="check"
            style={{color: props.TypeCh === '방문형' ? '#7553FF' : '#DEDEDE'}}
            size={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Texts: {
    fontFamily: 'NotoSansKR-Medium',
    color: '#181818',
    fontSize: 18,
  },
});

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function EnterPage(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <TouchableOpacity
          style={styles.btnDesign}
          onPress={() => props.navigation.navigate('ChooseWay')}>
          <Text style={styles.btnText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnDesign: {
    backgroundColor: '#FD780F',
    width: '90%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    left: '5%',
    top: 650,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});

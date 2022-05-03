import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Cgirl from '../../../../images/Cgirl.png';
import Cboy from '../../../../images/Cboy.png';
import boy from '../../../../images/boy.png';
import girl from '../../../../images/girl.png';
export default function SexBut(props) {
  const handleGirl = () => {
    props.setIsboy(false);
    props.setIsgirl(true);
  };
  const handleBoy = () => {
    props.setIsboy(true);
    props.setIsgirl(false);
  };
  return (
    <View style={styles.sexView}>
      <TouchableOpacity
        style={{alignItems: 'center', width: '40%'}}
        onPress={handleBoy}>
        {props.Isboy === false ? (
          <Image source={boy} style={{width: 90, height: 90}} />
        ) : (
          <Image source={Cboy} style={{width: 90, height: 90}} />
        )}

        <Text style={styles.sexText}>남성</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', width: '40%', marginLeft: '20%'}}
        onPress={handleGirl}>
        {props.Isgirl === false ? (
          <Image source={girl} style={{width: 90, height: 90}} />
        ) : (
          <Image source={Cgirl} style={{width: 90, height: 90}} />
        )}

        <Text style={styles.sexText}>여성</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  sexText: {
    marginTop: 15,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
  },
  sexView: {
    flexDirection: 'row',
    marginLeft: '15%',
    width: '70%',
    marginTop: 50,
  },
});

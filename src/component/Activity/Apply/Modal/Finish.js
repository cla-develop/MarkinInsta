import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
export default function Finish(props) {
  const navigation = useNavigation();
  const end = () => {
    props.setFinishModalvis(false);
    navigation.reset({
      index: 0,
      routes: [{name: 'Body'}],
    });
  };
  return (
    <View>
      <Modal isVisible={props.FinishModalvis}>
        <View style={styles.modalView}>
          <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: 24}}>
            ACTIVITY 신청이{' '}
          </Text>
          <Text style={{fontFamily: 'NotoSansKR-Regular', fontSize: 24}}>
            완료되었습니다.{' '}
          </Text>
          <TouchableOpacity onPress={() => end()}>
            <View style={styles.btnView}>
              <Text style={styles.footerText}>완료</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    borderRadius: 15,
    width: 350,
    height: 300,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 40,
  },
  footerText: {
    fontFamily: 'NotoSansKR-Bold',
    color: 'white',
    fontSize: 18,
  },
  btnView: {
    width: 300,
    backgroundColor: 'black',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
});

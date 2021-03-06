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
          <Text
            style={{
              fontFamily: 'NotoSansKR-Bold',
              fontSize: 22,
              marginTop: 15,
            }}>
            μ μ²­μλ£ π
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Regular',
              fontSize: 14,
              textAlign: 'center',
              marginTop: 5,
            }}>
            μ μ μ¬λΆλ 'λ§μ΄νμ΄μ§ {'>'} μ§νμ€μΈ νλ' {'\n'}μμ μ‘°ννμ€ μ
            μμ΅λλ€.
          </Text>
          <TouchableOpacity onPress={() => end()}>
            <View style={styles.btnView}>
              <Text style={styles.footerText}>μλ£</Text>
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
    marginTop: 70,
  },
});

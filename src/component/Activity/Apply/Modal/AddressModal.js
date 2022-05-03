import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Postcode from '@actbase/react-daum-postcode';
import GestureRecognizer from 'react-native-swipe-gestures';
export default function AddressModal(props) {
  return (
    <View>
      <GestureRecognizer
        style={{flex: 1}}
        onSwipeDown={() => props.setIsModalVis(false)}>
        <Modal
          isVisible={props.isModalVis}
          onBackdropPress={() => props.setIsModalVis(false)}>
          <View style={styles.modalView}>
            <Postcode
              style={{width: 340, height: 480}}
              jsOptions={{animation: true, hideMapBtn: true}}
              onSelected={data => {
                props.setIsModalVis(false);
                props.setAddress(JSON.stringify(data.address));
                props.setPostCode(JSON.stringify(data.zonecode));
                console.log(data);
              }}
            />
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  );
}
const styles = StyleSheet.create({
  modalView: {
    borderRadius: 15,
    width: 350,
    height: 500,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

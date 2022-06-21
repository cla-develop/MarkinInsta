import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Description(props: any) {
  return (
    <View>
      {/* <View style={styles.mainView}>
        <Text style={styles.underText}></Text>
      </View> */}
      <Image
        source={{uri: props.campaignImage}}
        style={{height: 780, width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  underText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 14,
    color: '#424242',
  },
  mainView: {
    height: 110,
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

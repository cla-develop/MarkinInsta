import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Description(props: any) {
  return (
    <View>
      <View style={styles.mainView}>
        <Text style={styles.underText}>
          패인흉터 모두 가능(여드름흉터, 수두흉터, 점뺀흉터, 긁힌흉터, 손톱흉터
          등) 움푹 패인흉터, 새살이 차오르는 흉터치료
        </Text>
      </View>
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

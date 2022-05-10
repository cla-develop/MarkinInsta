import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import issue1 from '../../../../../images/issue1.png';
import issue2 from '../../../../../images/issue2.png';
export default function Activities() {
  return (
    <ScrollView
      style={{marginTop: 20}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 200}}>
          <TouchableOpacity style={{width: 180}}>
            <Image source={issue1} style={styles.ImgStyle} />
            <View style={{height: 30}}>
              <Text style={styles.subText}>
                드라마가 끝이 아니야, 현 트렌드의 끝판왕
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width: 100}}></View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  subText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  ImgStyle: {
    width: 180,
    height: 175,
    borderRadius: 5,
  },
});

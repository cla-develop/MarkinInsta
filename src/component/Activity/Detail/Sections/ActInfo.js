import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import illjong from './images/iljong.png';
import noshow from './images/NoShow.png';
import idea from './images/idea.png';
import present from './images/present.png';
import target from './images/target.png';
import RenderHtml from 'react-native-render-html';
export default function ActInfo(props) {
  const missionSource = {
    html: `${props.campaignMission}`,
  };
  const offerSource = {
    html: `${props.offer}`,
  };
  const instructionSource = {
    html: `${props.instruction}`,
  };
  const {width} = useWindowDimensions();

  return (
    <View>
      <View style={styles.FirstSection}>
        <View style={{flexDirection: 'row', marginBottom: 15, marginTop: 10}}>
          <Image source={present} style={{width: 20, height: 20}} />
          <Text style={styles.nameText}>제공내역</Text>
        </View>
        <View style={{width: '90%'}}>
          <RenderHtml source={offerSource} width={width} />
        </View>
      </View>
      <View style={styles.FirstSection}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Image source={target} style={{width: 20, height: 20}} />
          <Text style={styles.nameText}>캠페인 미션</Text>
        </View>
        <View style={{width: '90%'}}>
          <RenderHtml source={missionSource} width={width} />
        </View>
      </View>
      <View style={styles.FirstSection}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Image source={idea} style={{width: 20, height: 20}} />
          <Text style={styles.nameText}>추가 안내사항</Text>
        </View>
        <View style={{width: '90%'}}>
          <RenderHtml source={instructionSource} width={width} />
        </View>
        <Image source={noshow} style={{width: 343, height: 410}} />
      </View>
      <View style={styles.FirstSection}>
        <Image source={illjong} style={{width: 237, height: 350}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FirstSection: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    // borderTopColor: '#EDEDED',
    // borderTopWidth: 1,
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  nameText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    color: '#181818',
    marginLeft: 10,
    marginTop: -3,
  },
});

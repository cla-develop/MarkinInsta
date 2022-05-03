import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from '../../../Styles';
import Icons from '../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import Exposure from '../images/Exposure.png';
import Comments from '../images/Comments.png';
import Hearts from '../images/Hearts.png';
import Reach from '../images/Reach.png';
import Saves from '../images/Saves.png';
export default function PostReaction(props: any) {
  return (
    <View style={{marginTop: 15}}>
      <Text style={styles.TopText}>게시물 반응</Text>
      <View style={{paddingLeft: '5%', paddingTop: 15}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Reach} style={{width: 30, height: 28}} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 25, width: 190}}>
            <Text style={styles.NotoReg18g42}>도달된 유저 수</Text>
          </View>
          <View style={instyle.textView}>
            {props.mediaInsight.reach !== -1 ? (
              <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>
                {props.mediaInsight.reach}
              </Text>
            ) : (
              <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>-</Text>
            )}
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Exposure} style={{width: 30, height: 28}} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 25, width: 190}}>
            <Text style={styles.NotoReg18g42}>노출 수</Text>
          </View>
          <View style={instyle.textView}>
            {props.mediaInsight.impressions !== -1 ? (
              <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>
                {props.mediaInsight.impressions}
              </Text>
            ) : (
              <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>-</Text>
            )}
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Hearts} style={{width: 30, height: 28}} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 25, width: 190}}>
            <Text style={styles.NotoReg18g42}>좋아요 수</Text>
          </View>
          <View style={instyle.textView}>
            <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>
              {props.mediaInsight.like}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Comments} style={{width: 30, height: 28}} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 25, width: 190}}>
            <Text style={styles.NotoReg18g42}>댓글 수</Text>
          </View>
          <View style={instyle.textView}>
            <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>
              {props.mediaInsight.comments}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{justifyContent: 'center'}}>
            <Image source={Saves} style={{width: 30, height: 28}} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 25, width: 190}}>
            <Text style={styles.NotoReg18g42}>저장 수</Text>
          </View>
          <View style={instyle.textView}>
            {props.mediaInsight.saved !== -1 ? (
              <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>
                {props.mediaInsight.saved}
              </Text>
            ) : (
              <Text style={[styles.SpoqaMe17, {textAlign: 'right'}]}>-</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
const instyle = StyleSheet.create({
  textView: {
    justifyContent: 'center',
    paddingTop: 3,
    width: 100,
  },
});

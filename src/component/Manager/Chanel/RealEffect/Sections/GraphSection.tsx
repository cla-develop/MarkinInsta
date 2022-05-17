import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import medal1 from '../../../../../images/medal1.png';
import noprofile from '../../../../../images/noprofile.png';
export default function GraphSection(props: any) {
  const [Top, setTop] = useState(0);
  const [My, setMy] = useState(0);
  const [Avg, setAvg] = useState(0);

  useEffect(() => {
    if (props.TopAvg > props.realFollower) {
      setTop(220);
      setMy(220 * (props.realFollower / props.TopAvg));
      setAvg(220 * (props.rangeAvg / props.TopAvg));
    } else {
      setMy(220);
      setTop(220 * (props.TopAvg / props.realFollower));
      setAvg(220 * (props.rangeAvg / props.realFollower));
    }
  }, [props.TopAvg, props.realFollower, props.rangeAvg]);
  var tt = 10;

  return (
    <View style={styles.MainView}>
      <View style={{flexDirection: 'row', padding: '5%'}}>
        <View style={{width: '50%'}}>
          <Text style={styles.TopText}>채널 영향력</Text>
        </View>
        <View style={{width: '50%'}}>
          {props.range['lower'] >= 1000000 ? (
            <Text style={{textAlign: 'right', color: '#747474', paddingTop: 7}}>
              *팔로워 {(props.range['lower'] / 1000000).toFixed(0)}M-
              {(props.range['upper'] / 1000000).toFixed(0)}M 기준
            </Text>
          ) : (
            <Text style={{textAlign: 'right', color: '#747474', paddingTop: 7}}>
              *팔로워 {(props.range['lower'] / 1000).toFixed(0)}K-
              {(props.range['upper'] / 1000).toFixed(0)}K 기준
            </Text>
          )}
        </View>
      </View>
      {/* 그래프 뷰 */}
      {Top !== 0 && Avg !== 0 && props.TopAvg !== 0 ? (
        <View style={styles.allGraphView}>
          <View style={styles.GraphView}>
            <View style={styles.ProfileView}>
              <Image
                source={
                  props.profileImg === null || props.profileImg === ''
                    ? noprofile
                    : {uri: props.profileImg}
                }
                style={{width: 50, height: 50}}
              />
            </View>
            {props.realFollower >= 1000000 ? (
              <Text style={styles.graphMyNum}>
                {(props.realFollower / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.graphMyNum}>
                {(props.realFollower / 1000).toFixed(1)} k
              </Text>
            )}
            <View style={[styles.purpleGraph, {height: My}]}></View>
            <View style={{height: 20}}>
              <Text style={{fontFamily: 'NotoSansKR-Bold'}}>나</Text>
            </View>
          </View>
          <View style={styles.GraphView}>
            {props.rangeAvg >= 1000000 ? (
              <Text style={styles.grapthOtherText}>
                {(props.rangeAvg / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.grapthOtherText}>
                {(props.rangeAvg / 1000).toFixed(1)} k
              </Text>
            )}
            <View style={[styles.greyGraph, {height: Avg}]}></View>
            <View style={{height: 20}}>
              <Text style={styles.underGreyText}>평균</Text>
            </View>
          </View>
          <View style={styles.GraphView}>
            {props.TopAvg >= 1000000 ? (
              <Text style={styles.grapthOtherText}>
                {(props.TopAvg / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.grapthOtherText}>
                {(props.TopAvg / 1000).toFixed(1)} k
              </Text>
            )}
            <View style={[styles.greyGraph, {height: Top}]}></View>
            <View style={{height: 20}}>
              <Text style={styles.underGreyText}>상위 10%</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.allGraphView}>
          <View style={styles.GraphView}>
            <View style={styles.ProfileView}>
              <Image
                source={
                  props.profileImg === null || props.profileImg === ''
                    ? noprofile
                    : {uri: props.profileImg}
                }
                style={{width: 50, height: 50}}
              />
            </View>
            {props.realFollower >= 1000000 ? (
              <Text style={styles.graphMyNum}>
                {(props.realFollower / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.graphMyNum}>
                {(props.realFollower / 1000).toFixed(1)} k
              </Text>
            )}
            <View style={[styles.purpleGraph, {height: tt}]}></View>
            <View style={{height: 20}}>
              <Text style={{fontFamily: 'NotoSansKR-Bold'}}>나</Text>
            </View>
          </View>
          <View style={styles.GraphView}>
            {props.rangeAvg >= 1000000 ? (
              <Text style={styles.grapthOtherText}>
                {(props.rangeAvg / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.grapthOtherText}>
                {(props.rangeAvg / 1000).toFixed(1)} k
              </Text>
            )}
            <View style={[styles.greyGraph, {height: 10}]}></View>
            <View style={{height: 20}}>
              <Text style={styles.underGreyText}>평균</Text>
            </View>
          </View>
          <View style={styles.GraphView}>
            {props.TopAvg >= 1000000 ? (
              <Text style={styles.grapthOtherText}>
                {(props.TopAvg / 1000000).toFixed(1)} M
              </Text>
            ) : (
              <Text style={styles.grapthOtherText}>
                {(props.TopAvg / 1000).toFixed(1)} k
              </Text>
            )}
            <View style={[styles.greyGraph, {height: 10}]}></View>
            <View style={{height: 20}}>
              <Text style={styles.underGreyText}>상위 10%</Text>
            </View>
          </View>
        </View>
      )}

      {/* 중간선 */}
      <View style={{width: '100%', alignItems: 'center', marginTop: 30}}>
        <View
          style={{width: 250, height: 2, backgroundColor: '#F3F3F3'}}></View>
      </View>
      {/* 매달 + 글씨 */}
      <View style={{flexDirection: 'row', paddingLeft: '10%', marginTop: 50}}>
        <View style={styles.ImageView}>
          <Image source={medal1} style={styles.medalImage} />
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.nameText}>{props.UserName}</Text>
            <Text style={styles.blackText}> 님의 채널영향력은</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.purpleText}>상위 {props.MyPercent}%</Text>
            <Text style={styles.blackText}>로,</Text>
            <Text style={styles.purpleText}>아주 높은편</Text>
            <Text style={styles.blackText}>이에요.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  MainView: {
    width: '95%',
    height: 600,
    backgroundColor: 'white',
    borderRadius: 18,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
  },
  TopText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 20,
    color: '#181818',
  },
  blackText: {
    fontSize: 17,
    fontFamily: 'NotoSansKR-Regular',
    color: '#181818',
  },
  purpleText: {
    fontSize: 17,
    fontFamily: 'NotoSansKR-Bold',
    color: '#7603FF',
  },
  medalImage: {
    width: 40,
    height: 40,
  },
  ImageView: {justifyContent: 'center', width: '20%', paddingTop: 5},
  purpleGraph: {
    backgroundColor: '#7603FF',
    width: 60,
    marginBottom: 10,
    borderRadius: 13,
  },
  greyGraph: {
    backgroundColor: '#EDEDED',
    width: 60,
    marginBottom: 10,
    borderRadius: 13,
  },
  underGreyText: {fontFamily: 'NotoSansKR-Medium', color: '#747474'},
  GraphView: {
    alignItems: 'center',
    width: '33%',
    justifyContent: 'flex-end',
  },
  ProfileView: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 2,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  allGraphView: {
    flexDirection: 'row',
    paddingLeft: '3%',
    height: 300,
    marginTop: 50,
  },
  graphMyNum: {
    marginBottom: 10,
    fontFamily: 'SpoqaHansansNeo-Medium',
    color: '#7553FF',
    fontSize: 18,
  },
  grapthOtherText: {
    marginBottom: 10,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    color: '#9A9A9A',
  },
  nameText: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: '#181818',
    marginTop: 5,
  },
});

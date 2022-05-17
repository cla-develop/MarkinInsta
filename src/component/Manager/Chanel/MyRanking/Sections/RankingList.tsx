import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import issue1 from '../../../../../images/noprofile.png';
export default function RankingList(props: any) {
  return (
    <View>
      {props.Others.map((item: any) => (
        <View
          style={[
            styles.outView,
            {backgroundColor: item.username == 'yeonns2' ? '#7553FF' : 'white'},
          ]}
          key={item.username}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{width: 40}}>
              <Text
                style={[
                  styles.rankText,
                  {
                    color: item.username == 'yeonns2' ? 'white' : 'black',
                  },
                ]}>
                {item.ranking}
              </Text>
            </View>
            <View style={styles.idSpace}>
              {item.profileImg === null || item.profileImg === '' ? (
                <Image source={issue1} style={styles.pImagest} />
              ) : (
                <Image
                  source={{uri: item.profileImg}}
                  style={styles.pImagest}
                />
              )}

              <Text
                style={[
                  styles.idText,
                  {
                    color: item.username == 'yeonns2' ? 'white' : 'black',
                  },
                ]}>
                {item.username}{' '}
              </Text>
            </View>
            <View style={{width: 60}}>
              <Text
                style={[
                  styles.realFollowerText,
                  {color: item.username == 'yeonns2' ? 'white' : '#7553FF'},
                ]}>
                {(item.realFollowerCount / 100).toFixed(1)} k
              </Text>
            </View>
            <View style={{width: 70}}>
              <Text
                style={[
                  styles.followerText,
                  {
                    color: item.username == 'yeonns2' ? 'white' : 'black',
                  },
                ]}>
                {(item.followersCount / 1000).toFixed(1)} k
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  TitleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  outView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    height: 70,
    borderStyle: 'solid',
    elevation: 6,
    justifyContent: 'center',
    marginTop: 2,
    width: '100%',
    paddingLeft: '5%',
  },
  followerText: {
    fontSize: 15,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    textAlign: 'right',
  },
  realFollowerText: {
    fontSize: 15,
    fontFamily: 'SpoqaHanSansNeo-Medium',
    textAlign: 'right',
  },
  pImagest: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginTop: -5,
    marginLeft: 0,
  },
  rankText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  idSpace: {
    width: 170,
    flexDirection: 'row',
    marginLeft: 10,
  },
  idText: {marginLeft: 8, fontSize: 15, fontFamily: 'Roboto-Medium'},
});

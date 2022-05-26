import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import noprofile from '../../../../images/noprofile.png';
export default function RList(props: any) {
  const [Data, setData] = useState([
    {
      ranking: 0,
      username: '',
      profileImg: '',
      followerCount: 0,
      realFollowerCount: 0,
    },
  ]);
  useEffect(() => {
    axios
      .get(
        `https://www.markin-app.site/app/ranking?category=${props.category}&lowerFollower=${props.lowerFollower}&upperFollower=${props.upperFollower}&cursor=10000000&orderby=${props.orderby}`,
      )
      .then(response => {
        setData(
          response.data.result.map(
            (node: {
              ranking: any;
              username: any;
              profileImg: any;
              followersCount: any;
              realFollowerCount: any;
            }) => ({
              ranking: node.ranking,
              username: node.username,
              profileImg: node.profileImg,
              followerCount: node.followersCount,
              realFollowerCount: node.realFollowerCount,
            }),
          ),
        );
      })
      .catch(err => console.log(err));
  }, [props.orderby, props.category, props.upperFollower, props.lowerFollower]);

  return (
    <View style={{marginBottom: '200%'}}>
      {Data.map(
        item => (
          // item.id.toLowerCase().includes(props.isSearch) === true && (
          <View style={styles.outView} key={item.username}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: '5%',
              }}>
              <View style={{width: 30}}>
                <Text style={styles.rankText}>{item.ranking}</Text>
              </View>
              <View style={styles.idSpace}>
                <Image
                  source={
                    item.profileImg === '' || item.profileImg === null
                      ? noprofile
                      : {uri: item.profileImg}
                  }
                  style={styles.pImagest}
                />
                <Text style={{marginLeft: 8, fontSize: 15}}>
                  {item.username}{' '}
                </Text>
              </View>
              <View style={{width: 70}}>
                {item.realFollowerCount >= 1000000 ? (
                  <Text style={styles.realFollowerText}>
                    {(item.realFollowerCount / 1000000).toFixed(1)} M
                  </Text>
                ) : (
                  <Text style={styles.realFollowerText}>
                    {(item.realFollowerCount / 1000).toFixed(1)} k
                  </Text>
                )}
              </View>
              <View style={{width: 75}}>
                {item.followerCount >= 1000000 ? (
                  <Text style={styles.followerText}>
                    {(item.followerCount / 1000000).toFixed(1)} M
                  </Text>
                ) : (
                  <Text style={styles.followerText}>
                    {(item.followerCount / 1000).toFixed(1)} k
                  </Text>
                )}
              </View>
            </View>
          </View>
        ),
        // ),
      )}
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
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'center',

    marginTop: 2,
  },
  followerText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'right',
  },
  realFollowerText: {
    fontSize: 15,
    color: '#7553FF',
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'right',
  },
  pImagest: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginTop: -5,
  },
  rankText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  idSpace: {
    width: 150,
    flexDirection: 'row',
    marginLeft: 20,
  },
});

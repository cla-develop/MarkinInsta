import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import issue1 from '../../../../../images/issue1.png';
const Categoly = [
  {
    key: 1,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 2,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 3,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 2333.5,
    Follower: 123.5,
  },
  {
    key: 4,
    id: 'lkjhgf45',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 5,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 6,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 7,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 8,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 9,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
  {
    key: 10,
    id: 'Seeun_lynn',
    pImage: issue1,
    realFollower: 23.5,
    Follower: 123.5,
  },
];
export default function SearchResult(props) {
  return (
    <View style={{marginTop: 30}}>
      <FlatList
        data={Categoly}
        keyExtractor={item => item.key}
        renderItem={({item}) =>
          item.id.toLowerCase().includes(props.isSearch) === true ? (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={item.pImage}
                style={{width: 50, height: 50, borderRadius: 50 / 2}}
              />
              <View>
                <Text>{item.id}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text>진짜 영향력</Text>
                  <Text>{item.realFollower}</Text>
                  <Text>팔로워 수</Text>
                  <Text>{item.Follower}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )
        }
      />
    </View>
  );
}

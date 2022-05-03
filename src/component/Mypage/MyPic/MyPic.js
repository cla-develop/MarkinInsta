import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles';
import Icons from '../../Icons/Icons';
import UnOAuth from '../../../Utils/UnOAuth/UnOAuth';
import PostReaction from './PostReaction/PostReaction';
import axios from 'axios';
export default function MyPic({route}) {
  const navigation = useNavigation();
  const {id, profileImg} = route.params;
  const [Data, setData] = useState([]);
  const [mediaInsight, setmediaInsight] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.markin-app.site/app/users/feed/${id}`, {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setData(response.data.result.mediaData);
        setmediaInsight(response.data.result.mediaInsight);
      });
  }, []);

  return (
    <View style={styles.allView}>
      <View style={{height: 35}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{height: 35, flexDirection: 'row', marginBottom: 5}}>
        <View style={inStyle.profileImgV}>
          <Image source={{uri: profileImg}} />
        </View>
        <View style={{justifyContent: 'center', height: 25, marginLeft: 10}}>
          <Text style={styles.RoboMe18}>{Data.username}</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'black', width: '100%', aspectRatio: 1}}>
        <Image
          source={{uri: Data.media_url}}
          style={{width: '100%', aspectRatio: 1}}
        />
      </View>
      {/* <View style={{flexDirection: 'row', marginTop: 15, marginLeft: '5%'}}>
          <Icons.AntDesign name="hearto" size={20} />
          <View style={{justifyContent: 'center', marginLeft: 8}}>
            <Text style={styles.SpoqaMe14}>{like_count}</Text>
          </View>
          <Icons.FontAwesome
            name="comment-o"
            size={20}
            style={{marginLeft: 20}}
          />
          <View style={{justifyContent: 'center', marginLeft: 8}}>
            <Text style={styles.SpoqaMe14}>{comments_count}</Text>
          </View>
        </View> */}
      <PostReaction mediaInsight={mediaInsight} />
      {/* un oAuth */}
      {/* <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#FFFFFFEE',
          width: '100%',
          height: 260,
        }}>
        <UnOAuth />
      </View> */}
      {/* <View style={{width: '100%', padding: '5%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('PostReaction')}>
          <View style={inStyle.btn}>
            <Text style={styles.NotoMe16g42}>게시글 리포트 확인하기</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
const inStyle = StyleSheet.create({
  profileImgV: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    marginLeft: '5%',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

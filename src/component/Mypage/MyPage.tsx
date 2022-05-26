import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import MyFeedHeader from './Header/MyFeedHeader';
import {useIsFocused} from '@react-navigation/native';
import Profile from './InstaSections/Profile';
import Pictures from './InstaSections/Pictures';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MyPage() {
  const [Data, setData] = useState([
    {
      media_url: '',
      id: '',
    },
  ]);
  const [Category, setCategory] = useState([]);
  const [username, setusername] = useState('');
  const [profileImg, setprofileImg] = useState('');
  const [followers_count, setfollowers_count] = useState(0);
  const [realFollower, setrealFollower] = useState(0);
  const [Point, setPoint] = useState(0);
  const [CampaginCount, setCampaginCount] = useState(0);
  const [JWT, setJWT] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
    });
  }, []);
  const [asd, setasd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setasd(1);
    }, 500);
  }, []);
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get('https://www.markin-app.site/app/users/feed', {
        headers: {
          'x-access-token': JWT,
        },
      })
      .then(response => {
        setData(
          response.data.result.media.data.map(
            (node: {media_url: any; id: any}) => ({
              media_url: node.media_url,
              id: node.id,
            }),
          ),
        );
        setfollowers_count(response.data.result.info.follower);
        setusername(response.data.result.info.username);
        setprofileImg(response.data.result.info.profileImg);
        setrealFollower(response.data.result.info.realFollower);
        setCampaginCount(response.data.result.campaignCount);
        setPoint(response.data.result.point);
      })
      .catch(err => console.log(err));
  }, [JWT]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const call = () => {
      // tslint:disable-next-line: no-floating-promises
      axios
        .get(`https://www.markin-app.site/app/users/categories`, {
          headers: {
            'x-access-token': JWT,
          },
        })
        .then(response => {
          setCategory(response.data.result);
          console.log(response.data.result);
        })
        .catch(err => console.log(err));
    };
    call();
  }, [JWT]);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      {asd === 1 && (
        <>
          <View style={styles.HeaderStyle}>
            <MyFeedHeader JWT={JWT} />
          </View>
          <View style={styles.profileView}>
            <Profile
              profileImg={profileImg}
              Point={Point}
              Category={Category}
              followers_count={followers_count}
              realFollower={realFollower}
              CampaginCount={CampaginCount}
            />
          </View>

          <View style={{width: '100%'}}>
            <Pictures Data={Data} profileImg={profileImg} username={username} />
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  HeaderStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  Logo: {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{translateX: -27}, {translateY: 0}],
  },
  FooterStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(212, 212, 212)',
    position: 'absolute',
    bottom: 0,
  },
  profileView: {
    width: '100%',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
  },
});

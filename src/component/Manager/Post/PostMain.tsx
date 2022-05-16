/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ability from './MainSections/Ability';
import Reaction from './MainSections/Reaction';
// import UploadReco from './MainSections/UploadReco';
import PopularPost from './MainSections/PopularPost';
import PopModal from './MainSections/PopModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function PostMain() {
  const [lowerCost, setLowerCost] = useState(10);
  const [upperCost, setupperCost] = useState(10);
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const [Stand, setStand] = useState('좋아요순');
  const [totalImpressions, settotalImpressions] = useState(0);
  const [totalReach, settotalReach] = useState(0);
  const [totalEngagement, settotalEngagement] = useState(0);
  const [totalSaved, settotalSaved] = useState(0);
  const [topMediaByLike, settopMediaByLike] = useState([
    {comments_count: 0, like_count: 0, media_url: '', id: ''},
  ]);
  const [topMediaByComments, settopMediaByComments] = useState([
    {comments_count: 0, like_count: 0, media_url: '', id: ''},
  ]);
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
    }, 100);
  }, []);

  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(`https://www.markin-app.site/app/media/reaction`, {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJpbnN0YWdyYW1JZCI6MTc4NDE0MDAyMjk3MDE4MjgsImlhdCI6MTY1MjUzNDMzMCwiZXhwIjoxNjg0MDcwMzMwLCJzdWIiOiJ1c2VySW5mbyJ9.Qr9EjC5iP5gddbdYfdKGPxjWNxOQXAFbdrkqaUn4NUE',
        },
      })
      .then(response => {
        settotalImpressions(response.data.result.totalImpressions);
        settotalReach(response.data.result.totalReach);
        settotalEngagement(response.data.result.totalEngagement);
        settotalSaved(response.data.result.totalSaved);
      });
  }, []);
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(`https://www.markin-app.site/app/media/popular`, {
        headers: {
          'x-access-token': JWT,
        },
      })
      .then(response => {
        settopMediaByLike(
          response.data.result.topMediaByLike.map(
            (node: {
              comments_count: any;
              like_count: any;
              media_url: any;
              id: any;
            }) => ({
              comments_count: node.comments_count,
              like_count: node.like_count,
              media_url: node.media_url,
              id: node.id,
            }),
          ),
        );
        settopMediaByComments(
          response.data.result.topMediaByComments.map(
            (node: {
              comments_count: any;
              like_count: any;
              media_url: any;
              id: any;
            }) => ({
              comments_count: node.comments_count,
              like_count: node.like_count,
              media_url: node.media_url,
              id: node.id,
            }),
          ),
        );
      });
  }, []);
  useEffect(() => {
    setStand('좋아요순');
  }, []);

  const navigation = useNavigation();
  return (
    <View>
      {asd === 1 && (
        <>
          <Ability JWT={JWT} />

          <Reaction
            totalImpressions={totalImpressions}
            totalReach={totalReach}
            totalEngagement={totalEngagement}
            totalSaved={totalSaved}
            JWT={JWT}
          />

          {/* <TouchableOpacity>
        <UploadReco />
      </TouchableOpacity> */}
          <PopularPost
            IsModalVisible={IsModalVisible}
            setIsModalVisible={setIsModalVisible}
            Stand={Stand}
            setStand={setStand}
            topMediaByLike={topMediaByLike}
            topMediaByComments={topMediaByComments}
            JWT={JWT}
          />
          <PopModal
            setIsModalVisible={setIsModalVisible}
            IsModalVisible={IsModalVisible}
            Stand={Stand}
            setStand={setStand}
            JWT={JWT}
          />
          <View style={{height: 200}}></View>
        </>
      )}
    </View>
  );
}

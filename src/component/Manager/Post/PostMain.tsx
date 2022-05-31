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
    {comments_count: 0, like_count: 0, media_url: '', id: '', caption: ''},
  ]);
  const [topMediaByComments, settopMediaByComments] = useState([
    {comments_count: 0, like_count: 0, media_url: '', id: '', caption: ''},
  ]);
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
      callpop(value);
    });
  }, []);
  const call = value => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(`https://www.markin-app.site/app/media/reaction`, {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        settotalImpressions(response.data.result.totalImpressions);
        settotalReach(response.data.result.totalReach);
        settotalEngagement(response.data.result.totalEngagement);
        settotalSaved(response.data.result.totalSaved);
      })
      .catch(err => console.log(err));
  };
  const callpop = value => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(`https://www.markin-app.site/app/media/popular`, {
        headers: {
          'x-access-token': value,
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
              caption: any;
            }) => ({
              comments_count: node.comments_count,
              like_count: node.like_count,
              media_url: node.media_url,
              id: node.id,
              caption: node.caption,
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
              caption: any;
            }) => ({
              comments_count: node.comments_count,
              like_count: node.like_count,
              media_url: node.media_url,
              id: node.id,
              caption: node.caption,
            }),
          ),
        );
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    setStand('좋아요순');
  }, []);

  const navigation = useNavigation();
  return (
    <View>
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
        <View style={{height: 170}}></View>
      </>
    </View>
  );
}

import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import profile from '../../../images/Profile.png';
import FeedDum from './FeedDum';
import UserInfo from './UserInfo';
export default function Feed() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UserInfo />
    </ScrollView>
  );
}

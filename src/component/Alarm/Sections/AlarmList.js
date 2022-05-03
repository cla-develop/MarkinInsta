import React from 'react';
import {View, Text, Image} from 'react-native';
import issue1 from '../../../images/issue1.png';
import issue2 from '../../../images/issue2.png';
// Knock = 0 , friend = 1 , Campaign = 2 , Calendar = 3, badComment = 4
const AlarmList = [
  {
    id: 1,
    Sort: 0,
    img: issue1,
    uName: 'seeun_lynn',
  },
  {
    id: 2,
    Sort: 2,
    img: issue2,
    uName: '감성커피',
  },
  {
    id: 3,
    Sort: 4,
    img: issue2,
    Bnum: 5,
  },
  {
    id: 4,
    Sort: 3,
    img: issue2,
  },
  {
    id: 5,
    Sort: 1,
    img: issue1,
    uName: 'seeun_lynn',
  },
];
export default AlarmList;

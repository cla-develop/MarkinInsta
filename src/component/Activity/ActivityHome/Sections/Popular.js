/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Div} from 'reactnative-ui-bootstrap';
import noprofile from '../../../../images/noprofile.png';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
export default function Popular() {
  const navigation = useNavigation();
  const [Result, setResult] = useState([]);
  const [endDay, setendDay] = useState('');
  const [leftDate, setleftDate] = useState(0);
  const [DateOrEnd, setDateOrEnd] = useState('');
  const today = new Date();
  useEffect(() => {
    axios
      .get(`https://www.markin-app.site/app/activity/popular`)
      .then(response => {
        setResult(response.data.result);
        // setendDay(
        //   new Date(
        //     moment(response.data.result.campaignApplyEnd, 'YYYY.MM.DD').format(
        //       'YYYY-MM-DD',
        //     ),
        //   ),
        // );
      })
      .catch(err => console.log(err));
  }, []);

  const DateCheck = value => {
    const da = new Date(moment(value, 'YYYY.MM.DD').format('YYYY-MM-DD'));
    if (da > today) {
      return Math.abs((da - today) / (1000 * 60 * 60 * 24));
    } else {
      return false;
    }
  };
  return (
    <View>
      {/* <View style={{flexDirection: 'row'}}> */}
      <Text
        style={{color: '#232323', fontFamily: 'NotoSansKR-Bold', fontSize: 18}}>
        인기폭발
      </Text>

      {/* </View> */}
      <Div className={'row '} style={{marginLeft: -10}}>
        {Result.map(item => (
          <Div
            className={'col-6'}
            style={{height: 300}}
            key={item.advertisementNo}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {Id: item.advertisementNo})
              }>
              <View style={styles.ImageView}>
                <Image
                  source={
                    item.thumnail === '' || item.thumnail === null
                      ? noprofile
                      : {uri: item.thumnail}
                  }
                  style={styles.Imagestyle}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: '1%',
                  marginTop: 10,
                }}>
                <View style={{width: 140}}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.CamText}>
                    {item.campaignName}
                  </Text>
                </View>
                <View style={styles.greyView}>
                  {DateCheck(item.campaignApplyEnd) === false ? (
                    <Text style={{fontSize: 12}}>모집종료</Text>
                  ) : (
                    <Text style={{fontSize: 12}}>
                      {Math.floor(DateCheck(item.campaignApplyEnd)).toString()}
                      일 남음
                    </Text>
                  )}
                </View>
              </View>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{
                  marginTop: 5,
                  paddingLeft: '1%',
                }}>
                {item.productIntroduce}
              </Text>
              <View
                style={{flexDirection: 'row', marginTop: 5, paddingLeft: '1%'}}>
                <Text style={styles.redText}>{item.ApplicantCount}</Text>
                <Text style={styles.greyText}>
                  /{item.influencerNumber}명 모집
                </Text>
                <Text style={styles.moneyText}>
                  {' '}
                  {item.reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  P
                </Text>
              </View>
            </TouchableOpacity>
          </Div>
        ))}

        {/* */}
      </Div>
    </View>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#424242',
  },
  ImgStyle: {
    width: 250,
    height: 275,
    borderRadius: 5,
  },
  TitleText: {
    fontSize: 15,
    marginTop: 2,
    fontFamily: 'NotoSansKR-Medium',
  },
  ImageView: {
    width: '95%',
    height: 210,
    marginTop: 10,
  },
  Imagestyle: {
    width: '100%',
    borderRadius: 5,

    height: 210,
  },
  redText: {color: 'red', fontFamily: 'SpoqaHanSansNeo-Medium'},
  greyText: {color: '#424242', fontFamily: 'SpoqaHanSansNeo-Medium'},
  greyView: {
    backgroundColor: '#F1F1F1',
    position: 'absolute',
    right: '6%',
    borderRadius: 3,
    padding: 3,
    marginTop: 0,
  },
  moneyText: {
    position: 'absolute',
    right: '6%',
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 15,
    color: '#181818',
  },
  CamText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 13,
    color: '#181818',
  },
});

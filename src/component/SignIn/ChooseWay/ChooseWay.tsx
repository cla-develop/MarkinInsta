/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from '../../Icons/Icons';
import WebViewModal from '../LinkChannel/InstaWebView/WebViewModal';
// import {useNavigation} from '@react-navigation/native';
// import appLogo from '../../../images/appLogo.png';
// import GoogleWebview from './GoogleLogin/GoogleWebview';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ChooseWay({navigation}: any) {
  const [HandleModal, setHandleModal] = useState<boolean>(false);
  const [code, setcode] = useState<string>('');
  const [AccessToken, setAccessToken] = useState<string>('');
  const [Id, setId] = useState(0);
  // const [Pass, setPass] = useState<boolean>(false);

  useEffect(() => {
    const getToken = async () => {
      const asd: string = code[1].substring(0, code[1].length - 2);
      console.log(asd);
      var postVal =
        'grant_type=authorization_code' +
        '&code=' +
        asd +
        '&client_id=3166995646907322' +
        '&client_secret=27c9680ceb08c5af42f442b5089d6c42' +
        '&redirect_uri=https://www.markin-app.site/app/auth';

      await axios({
        url: 'https://api.instagram.com/oauth/access_token',
        method: 'post',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: postVal,
      })
        .then(response => {
          //console.log(props.code[1]);
          // setPass(true);
          setAccessToken(response.data.access_token);
          setId(response.data.user_id);
          console.log(response.data.user_id);
        })
        .catch(err => {
          console.log(err);
        });
    };
    if (code !== '') {
      getToken();
    }
  }, [code]);

  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('JWT', value);
    } catch (e) {
      console.log('qwwqqqqqq');
    }
  };
  useEffect(() => {
    const LinkInsta = async () => {
      await axios({
        url: `https://www.markin-app.site/app/users/instagram/check`,
        method: 'post',
        data: {
          accessToken: AccessToken,
          instagramId: Id,
        },
      })
        .then(response => {
          storeData(response.data.result.jwt);
          console.log(response.data.message);
          console.log('userId:' + Id);
          if (response.data.isSuccess === true) {
            navigation.navigate('Body', {AccessToken});
          } else {
            navigation.navigate('Terms', {AccessToken, Id});
          }
        })
        .catch(err => {
          console.log(err);
          console.log('sfdsf');
        });
    };
    if (AccessToken !== '') {
      LinkInsta();
    }
  }, [AccessToken, Id]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{position: 'absolute', top: 280, marginLeft: '5%'}}>
        <Text
          style={{fontFamily: 'Quantico-Bold', fontSize: 29, letterSpacing: 0}}>
          MARKIN의
        </Text>
        <Text style={styles.FirstLine}>특별한 관리를 받아보세요!</Text>
        <Text style={styles.SecondLine}>
          당신의 특별한 하루를 마킨과 함께하세요.
        </Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={[
            {justifyContent: 'center', backgroundColor: '#7553FF'},
            styles.btnDesign,
          ]}
          onPress={() => setHandleModal(true)}>
          <Icons.AntDesign
            name="instagram"
            size={30}
            color="white"
            style={{top: 15, left: 55, position: 'absolute'}}
          />
          <Text style={[styles.btnText, {color: 'white'}]}>
            instagram으로 로그인
          </Text>
        </TouchableOpacity>
        <WebViewModal
          HandleModal={HandleModal}
          setHandleModal={setHandleModal}
          code={code}
          setcode={setcode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnView: {
    position: 'absolute',
    top: 700,
    marginLeft: '5%',
    width: '90%',
  },
  btnDesign: {
    height: 60,
    borderRadius: 5,
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginTop: 15,
  },
  btnText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 19,
    marginLeft: -10,
  },
  belowText: {
    fontFamily: 'NotoSansKR-Medium',
  },
  SecondLine: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 18,
    color: '#676767',
    marginTop: 8,
    letterSpacing: 0,
  },
  FirstLine: {
    fontFamily: 'Roboto-Bold',
    fontSize: 29,
    marginTop: 8,
    letterSpacing: 0,
  },
});

// const [Way, setWay] = useState<number>(0);
// const [HandleModal, setHandleModal] = useState(false);
// const onGoogle = async () => {
//   setWay(1);
// };
// const onApple = () => {
//   setWay(2);
// };
// const onEmail = () => {
//   setWay(3);
// };
// useEffect(() => {
//   if (Way === 1) {
//     setHandleModal(true);
//     props.navigation.navigate('Terms', {Way});
//   } else if (Way === 2) {
//     props.navigation.navigate('Terms', {Way});
//   } else if (Way === 3) {
//     props.navigation.navigate('Login', {Way});
//   }
// }, [Way, props.navigation]);

{
  /* <TouchableOpacity
          style={[
            {
              justifyContent: 'center',
              backgroundColor: '#FF4B4B',
            },
            styles.btnDesign,
          ]}
          onPress={() => onGoogle()}>
          <Icon
            name="google"
            size={30}
            color="white"
            style={{top: 10, left: 32, position: 'absolute'}}
          />
          <Text style={[styles.btnText, {color: 'white'}]}>
            Google로 로그인
          </Text>
        </TouchableOpacity>
        <GoogleWebview
          HandleModal={HandleModal}
          setHandleModal={setHandleModal}
        />
        <TouchableOpacity
          onPress={() => onApple()}
          style={[
            {justifyContent: 'center', backgroundColor: 'black'},
            styles.btnDesign,
          ]}>
          <Image
            source={appLogo}
            style={{
              width: 45,
              height: 45,
              top: 5,
              left: 23,
              position: 'absolute',
            }}
          />
          <Text style={[styles.btnText, {color: 'white'}]}>Apple로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onEmail()}
          style={[
            {justifyContent: 'center', backgroundColor: 'white'},
            styles.btnDesign,
          ]}>
          <Icon
            name="mail"
            size={30}
            color="black"
            style={{top: 10, left: 32, position: 'absolute'}}
          />
          <Text style={[styles.btnText, {color: 'black'}]}>Email로 로그인</Text>
        </TouchableOpacity> */
}

{
  /* <View
        style={{
          position: 'absolute',
          top: 760,
          justifyContent: 'center',
          width: '90%',
          flexDirection: 'row',
          marginLeft: '5%',
        }}>
        <Text style={styles.belowText}>이미 계정이 있다면?</Text>
        <TouchableOpacity>
          <Text
            style={[
              {textDecorationLine: 'underline', marginLeft: 10},
              styles.belowText,
            ]}>
            로그인하기
          </Text>
        </TouchableOpacity>
      </View> */
}

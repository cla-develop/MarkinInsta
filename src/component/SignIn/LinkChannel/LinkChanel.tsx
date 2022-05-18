import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icons from '../../Icons/Icons';
import Linkinsta from '../../../images/LinkInsta.png';
import axios from 'axios';
import WebViewModal from './InstaWebView/WebViewModal';

export default function LinkChanel({navigation, route}: any) {
  const [HandleModal, setHandleModal] = useState<boolean>(false);
  const [code, setcode] = useState<string>('');
  const [AccessToken, setAccessToken] = useState<string>('');
  const [Pass, setPass] = useState<boolean>(false);

  useEffect(() => {
    const getToken = async () => {
      const asd: string = code[1].substring(0, code[1].length - 2);
      var postVal =
        'grant_type=authorization_code' +
        '&code=' +
        asd +
        '&client_id=3166995646907322' +
        '&client_secret=2c6f26fb28c338d8be2e94d42493e8ba' +
        '&redirect_uri=https://www.markin-app.site/app/auth';

      await axios({
        url: 'https://api.instagram.com/oauth/access_token',
        method: 'post',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: postVal,
      })
        .then(response => {
          //console.log(props.code[1]);
          setPass(true);
          setAccessToken(response.data.access_token);
        })
        .catch(err => {
          console.log(err);
        });
    };
    if (code !== '') {
      getToken();
    }
  }, [code]);

  const GoCategory = () => {
    const LinkInsta = async () => {
      await axios({
        url: `https://www.markin-app.site/app/users/${userID}/instagram`,
        method: 'post',
        data: {
          access_token: AccessToken,
        },
      })
        .then(response => {
          if (response.data.isSuccess === true) {
            navigation.navigate('Category', {userID});
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
    LinkInsta();
  };

  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10, marginLeft: '-1%'}}
        onPress={() => navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 50}}>
        <Text style={styles.mainText}>
          인스타그램 채널을 {'\n'}연결해주세요 :{')'}
        </Text>
      </View>
      <TouchableOpacity onPress={() => setHandleModal(true)}>
        <View style={{width: '100%', marginLeft: '-2.5%', marginTop: 50}}>
          <Image source={Linkinsta} style={{width: '100%'}} />
        </View>
      </TouchableOpacity>

      <WebViewModal
        HandleModal={HandleModal}
        setHandleModal={setHandleModal}
        code={code}
        setcode={setcode}
      />
      {/* {Pass === true ? (
        <TouchableOpacity
          style={[styles.btnDesign, {backgroundColor: 'black'}]}
          onPress={() => GoCategory()}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.btnDesign, {backgroundColor: '#DEDEDE'}]}>
          <Text style={styles.btnText}>다음</Text>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: '5%',
  },
  mainText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 26,
  },
  subText: {
    marginTop: 5,
    fontFamily: 'NotoSansKR-Regular',
    color: '#747474',
  },
  btnDesign: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    top: 750,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});

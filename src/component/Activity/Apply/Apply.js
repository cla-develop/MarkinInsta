/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import Icons from '../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import AddressModal from './Modal/AddressModal';
import instaLogo from '../../../images/instaLogo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import noprofile from '../../../images/noprofile.png';
import Finish from './Modal/Finish';
export default function Apply({route}) {
  const {Id} = route.params;
  const navigation = useNavigation();
  const [basicAd, setbasicAd] = useState(true);
  const [isModalVis, setIsModalVis] = useState(false);
  const [Address, setAddress] = useState('');
  const [PostCode, setPostCode] = useState('');
  const [DetailAd, setDetailAd] = useState('');
  const [Name, setName] = useState('');
  const [PhonNum, setPhonNum] = useState('');
  const [recipName, setRecipName] = useState('');
  const [recipPN, setRecipPN] = useState('');
  const [recipAd, setRecipAd] = useState('');
  const [Success, setSuccess] = useState([]);
  const [Send, setSend] = useState(false);
  const [instaIDs, setinstaIDs] = useState([]);
  const [instagramId, setinstagramId] = useState('');
  const [JWT, setJWT] = useState('');
  const [FinishModalvis, setFinishModalvis] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
      IDcall(value);
    });
  }, []);
  const [asd, setasd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setasd(1);
    }, 100);
  }, []);
  const onChangeNamelInput = event => {
    setName(event);
  };
  const navigateToBack = () => {
    navigation.navigate('Body');
  };
  const IDcall = value => {
    axios
      .get('https://www.markin-app.site/app/users/instagram', {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        if (response.data.code !== 3008) {
          setinstaIDs(response.data.result);
        }
      })
      .catch(err => console.log(err));
  };
  // useEffect(() => {
  //   axios
  //     .get('https://www.markin-app.site/app/users/instagram', {
  //       headers: {
  //         'x-access-token': JWT,
  //       },
  //     })
  //     .then(response => {
  //       if (response.data.code !== 3008) {
  //         setinstaIDs(response.data.result);
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }, [JWT]);

  const ApplyActivity = async () => {
    try {
      const response = await axios({
        method: 'post',
        data: {
          name: Name,
          phone: PhonNum,
          instagramId: instagramId,
          reciptientName: recipName,
          recipientPhone: recipPN,
          recipientAddress: Address.replace(/\"/gi, '') + ', ' + DetailAd,
          recipientPostcode: PostCode.replace(/\"/gi, ''),
          saveAddress: basicAd,
        },
        headers: {
          'x-access-token': JWT,
        },
        url: `https://www.markin-app.site/app/activity/${Id}`,
      });
      if (response.data.code === 3010) {
        Alert.alert('?????? ?????????????????????.');
      } else {
        setSuccess(response.data);
        setFinishModalvis(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get('https://www.markin-app.site/app/activity/applicant', {
        headers: {
          'x-access-token': JWT,
        },
      })
      .then(response => {
        setRecipName(response.data.result.name);
        setRecipPN(response.data.result.phone);
        setPostCode(response.data.result.postcode);
        setAddress(response.data.result.address1);
        setDetailAd(response.data.result.address2);
      })
      .catch(err => console.log(err));
  }, [JWT]);
  return (
    <View style={styles.allView}>
      <View style={{alignItems: 'center', height: 40}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>?????? ????????????</Text>
      </View>
      <ScrollView>
        <View style={{padding: '5%'}}>
          <Text style={styles.subTitle}>?????? ?????? ??????</Text>
          <Text style={styles.subsubText}>?????? ????????? ????????? ??????????????????</Text>
          {/* ????????? ?????? ?????? */}

          <View style={{flexDirection: 'row', marginTop: 20}}>
            {instaIDs.map(item => (
              <TouchableOpacity
                onPress={() => setinstagramId(item.instagramId)}>
                <View
                  style={[
                    styles.CardView,
                    {
                      borderColor:
                        item.instagramId === instagramId
                          ? '#181818'
                          : '#DEDEDE',
                    },
                  ]}>
                  <Image
                    source={
                      item.profileImg === '' || item.profileImg === null
                        ? noprofile
                        : {uri: item.profileImg}
                    }
                    style={styles.profileImgV}
                  />
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Image
                      source={instaLogo}
                      style={{height: 17, width: 17, marginTop: 3}}
                    />
                    <Text
                      style={{
                        fontFamily: 'Roboto-Bold',
                        fontSize: 16,
                        marginLeft: 3,
                      }}>
                      {item.username}
                    </Text>
                  </View>
                  {item.instagramId === instagramId && (
                    <Icons.AntDesign
                      name="checkcircle"
                      size={30}
                      color="black"
                      style={{
                        position: 'absolute',
                        zIndex: 10,
                        bottom: -5,
                        right: -5,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {asd === 1 && (
          <>
            <View style={styles.BlockView}>
              <Text style={styles.subTitle}>????????? ??????</Text>
              <Text style={styles.inputTitle}>??????</Text>
              <TextInput
                style={styles.input}
                value={Name}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={onChangeNamelInput}
              />
              <Text style={styles.inputTitle}>????????? ??????</Text>
              <TextInput
                style={styles.input}
                value={PhonNum}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={event => setPhonNum(event)}
              />
            </View>
            <View style={styles.BlockView}>
              <Text style={styles.subTitle}>????????? ??????</Text>
              {/* ????????? ?????? ?????? */}
              <Text style={styles.inputTitle}>?????????</Text>
              <TextInput
                style={styles.input}
                value={recipName}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={event => setRecipName(event)}
              />
              {/* ????????? ?????? ?????? ?????? */}
              <Text style={styles.inputTitle}>????????? ??????</Text>
              <TextInput
                style={styles.input}
                value={recipPN}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={event => setRecipPN(event)}
              />
              <Text style={styles.inputTitle}>????????? ??????</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={[styles.adView, {width: '80%'}]}>
                  {PostCode !== null && (
                    <Text>{PostCode.replace(/\"/gi, '')}</Text>
                  )}
                </View>
                <TouchableOpacity onPress={() => setIsModalVis(true)}>
                  <View style={styles.btnStyle}>
                    <Text>????????????</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.adView, {width: '100%'}]}>
                {Address !== null && <Text>{Address.replace(/\"/gi, '')}</Text>}
              </View>

              {/* ???????????? ?????? */}
              <TextInput
                style={styles.input}
                value={DetailAd}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={event => setDetailAd(event)}
              />

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  paddingLeft: '60%',
                }}>
                <TouchableOpacity onPress={() => setbasicAd(!basicAd)}>
                  <View>
                    <Icons.AntDesign
                      name="check"
                      style={{
                        color: basicAd === true ? '#7553FF' : '#DEDEDE',
                      }}
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.baesong}>?????? ???????????? ??????</Text>
              </View>
            </View>
          </>
        )}
        {Name !== '' &&
        PhonNum !== '' &&
        instagramId !== '' &&
        recipName !== '' &&
        recipPN !== '' &&
        Address !== '' &&
        DetailAd !== '' ? (
          <View style={styles.btnView}>
            <TouchableOpacity onPress={() => ApplyActivity()}>
              <View style={[styles.footerView, {backgroundColor: 'black'}]}>
                <Text style={styles.footerText}>????????????</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.btnView}>
            <View style={[styles.footerView, {backgroundColor: '#DEDEDE'}]}>
              <Text style={styles.footerText}>????????????</Text>
            </View>
          </View>
        )}

        <AddressModal
          isModalVis={isModalVis}
          setAddress={setAddress}
          setIsModalVis={setIsModalVis}
          setPostCode={setPostCode}
        />
        <Finish
          FinishModalvis={FinishModalvis}
          setFinishModalvis={setFinishModalvis}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
  },
  TitleText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 17,
    marginTop: -5,
    color: '#181818',
  },
  subTitle: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
    color: '#181818',
    marginBottom: 20,
  },
  subsubText: {
    fontFamily: 'NotoSansKR-Regular',
    color: '#747474',
    fontSize: 15,
    marginTop: 1,
  },
  inputTitle: {
    fontFamily: 'NotoSansKR-Regular',
    color: '#424242',
    fontSize: 15,
    marginTop: 1,
  },
  CardView: {
    width: 140,
    height: 155,
    borderWidth: 1,
    borderRadius: 18,
    marginRight: 15,
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 17,
  },
  BlockView: {borderTopColor: '#F3F3F3', borderTopWidth: 5, padding: '5%'},
  footerView: {
    width: 340,
    borderRadius: 17,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontFamily: 'NotoSansKR-Bold',
    color: 'white',
    fontSize: 18,
  },
  btnView: {
    alignItems: 'center',
    height: 100,
    width: '100%',
    marginTop: 10,
    paddingBottom: 100,
  },
  input: {
    height: 35,
    padding: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 2,
    marginTop: 5,
    marginBottom: 15,
  },
  btnStyle: {
    width: 60,
    height: 35,
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#181818',
    borderWidth: 1,
    borderRadius: 2,
  },
  adView: {
    height: 35,
    padding: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 2,
    marginTop: 5,
    marginBottom: 15,
    justifyContent: 'center',
  },
  profileImgV: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },
  baesong: {
    textAlign: 'right',
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    color: '#747474',
  },
});

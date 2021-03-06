import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import styles from '../../../../Styles';
import Icons from '../../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function FixInform() {
  const navigation = useNavigation();
  const [PhonNum, setPhonNum] = useState('');
  const [Email, setEmail] = useState('');
  const [showV, setShowV] = useState(false);
  const [VerNum, setVerNum] = useState('');
  const [showB, setShowB] = useState(true);
  const [Name, setName] = useState('');
  const [SF, setSF] = useState('0');
  const [Birth, setBirth] = useState('');
  const [JWT, setJWT] = useState('');
  const [EVali, setEVali] = useState(true);
  const [checkPN, setCheckPN] = useState('');
  const [Original, setOriginal] = useState('');
  const [OriginalPN, setOriginalPN] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      Usercall(value);
      setJWT(value);
    });
  }, []);
  const [asd, setasd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setasd(1);
    }, 100);
  }, []);
  const onChangeEmailInput = event => {
    setEmail(event);
    checkEmail(Email);
  };
  const checkEmail = e => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,3}$/i;
    if (regExp.test(e) === true) {
      setEVali(true);
      return true;
    } else if (Email === '') {
      setEVali(true);
      return true;
    } else {
      setEVali(false);
      return false;
    }
  };
  const Usercall = value => {
    axios
      .get('https://www.markin-app.site/app/users', {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        setOriginal(response.data.result.email);
        setEmail(response.data.result.email);
        setName(response.data.result.name);
        setOriginalPN(response.data.result.phone);
        setPhonNum(response.data.result.phone);
        setBirth(response.data.result.birth);
        setasd(1);
      })
      .catch(err => console.log(err));
  };

  const Send = () => {
    if (EVali === false) {
      Alert.alert('????????? ????????? ????????? ????????????.');
    } else if (showB === false) {
      Alert.alert('??????????????? ???????????????.');
    } else if (Original === Email && OriginalPN === PhonNum) {
      Alert.alert('??????????????? ????????????.');
    } else if (anotherNum === true && showV === false) {
      Alert.alert('??????????????? ???????????????.');
    } else {
      axios({
        method: 'patch',
        data: {
          email: Email,
          phone: PhonNum,
        },
        headers: {
          'x-access-token': JWT,
        },
        url: 'https://www.markin-app.site/app/users',
      }).then(response => {
        console.log(response.data.message);
        if (response.data.isSuccess === true) {
          navigation.navigate('FixFinish');
        }
      });
    }
  };
  const [samepN, setsamepN] = useState(true);
  const SendVri = () => {
    axios
      .post('https://www.markin-app.site/app/phone/check', {
        phone: PhonNum,
      })
      .then(response => {
        if (response.data.isSuccess === true) {
          send();
        } else {
          Alert.alert('?????? ????????? ?????? ?????????.');
        }
      });
    const send = () => {
      axios
        .post('https://www.markin-app.site/app/sms', {
          phone: PhonNum,
        })
        .then(response => {
          if (response.data.isSuccess === true) {
            setShowV(true);
            setShowB(false);
          }
          console.log(response.data.message);
        });
    };
  };

  const CheckVer = () => {
    axios({
      method: 'post',
      data: {
        phone: PhonNum,
        verifyCode: VerNum,
      },
      url: 'https://www.markin-app.site/app/sms/verify',
    })
      .then(response => {
        console.log(response.data.message);
        if (response.data.isSuccess === true) {
          setShowB(true);
          setSF('0');
        } else {
          setSF('1');
          setShowB(false);
        }
      })
      .catch(err => console.log(err));
  };
  const [anotherNum, setanotherNum] = useState(false);
  return (
    <View style={styles.allView}>
      <View style={styles.CenterTiileView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>???????????? ??????</Text>
      </View>
      <View style={{padding: '5%'}}>
        <Text style={instyles.inputTitle}>??????</Text>
        <View style={instyles.squareView}>
          {asd === 1 && (
            <Text style={[styles.NotoReg16, {color: '#9C9C9C'}]}>{Name}</Text>
          )}
        </View>
        <Text style={instyles.inputTitle}>????????????</Text>
        <View style={instyles.squareView}>
          {asd === 1 && (
            <Text style={[styles.NotoReg16, {color: '#9C9C9C'}]}>{Birth}</Text>
          )}
        </View>
        <Text style={instyles.inputTitle}>?????????</Text>
        {asd === 1 && (
          <>
            <TextInput
              style={styles.W100input}
              value={Email}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={event => onChangeEmailInput(event)}
            />
            {EVali === false && (
              <View style={{position: 'absolute', top: 232, left: 22}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#FF5959',
                    fontFamily: 'NotoSansKR-Medium',
                  }}>
                  ????????? ????????? ????????? ????????????.
                </Text>
              </View>
            )}
          </>
        )}

        <Text style={instyles.inputTitle}>????????? ??????</Text>
        <View style={{flexDirection: 'row'}}>
          {asd === 1 && anotherNum === true ? (
            <TextInput
              style={[styles.input, {width: 220}]}
              value={PhonNum}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={event => setPhonNum(event)}
            />
          ) : (
            <View style={[instyles.squareView, {width: 220}]}>
              <Text style={[styles.NotoReg16, {color: '#9C9C9C'}]}>
                {PhonNum}
              </Text>
            </View>
          )}
          {anotherNum === false ? (
            <TouchableOpacity onPress={() => setanotherNum(true)}>
              <View style={instyles.requestBtun}>
                <Text style={[styles.NotoMe14, {color: 'white'}]}>
                  ?????? ?????? ??????
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => SendVri()}>
              <View style={instyles.requestBtun}>
                <Text style={[styles.NotoMe14, {color: 'white'}]}>
                  ???????????? ??????
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        {showV === true && (
          <>
            <Text style={instyles.inputTitle}>????????????</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[styles.input, {width: 220}]}
                value={VerNum}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={event => setVerNum(event)}
              />
              {showB === true && (
                <Icons.AntDesign
                  name="check"
                  color="#57C971"
                  size={15}
                  style={{position: 'absolute', left: 195, top: 15}}
                />
              )}
              {SF === '1' && (
                <View style={{position: 'absolute', top: 45}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#FF5959',
                      fontFamily: 'NotoSansKR-Medium',
                    }}>
                    ??????????????? ???????????? ??????????????????.
                  </Text>
                </View>
              )}

              <TouchableOpacity onPress={() => CheckVer()}>
                <View style={instyles.requestBtun}>
                  <Text style={[styles.NotoMe14, {color: 'white'}]}>
                    ???????????? ??????
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}

        <View style={{marginTop: showV === true ? 205 : 294}}>
          <TouchableOpacity onPress={() => Send()}>
            <View style={[styles.btnView, {backgroundColor: '#181818'}]}>
              <Text style={[styles.NotoMe18, {color: 'white'}]}>????????????</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const instyles = StyleSheet.create({
  inputTitle: {
    fontFamily: 'NotoSansKR-Regular',
    color: '#747474',
    fontSize: 14,
    marginTop: 1,
  },
  squareView: {
    height: 35,
    padding: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 2,
    marginTop: 5,
    marginBottom: 15,
    justifyContent: 'center',
  },
  requestBtun: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    width: 115,
    height: 35,
    marginLeft: 10,
    marginTop: 5,
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icons from '../../Icons/Icons';
import Sms from '../../../API/LogInSignin/SMS/Sms';
import OverLapModal from '../Modal/OverLapModal';
import axios from 'axios';
export default function PhonNum({navigation, route}: any) {
  const {AccessToken, Agreesns, AgreeEmail, Id} = route.params;
  const [isPhNum, setisPhNum] = useState<string>('');
  const [ProveNum, setProveNum] = useState<string>('');
  const [PNVali, setPNVali] = useState<boolean>(false);
  const [SendSMS, setSendSMS] = useState<boolean>(false);
  const [IsOverlap, setIsOverlap] = useState<boolean>(false);
  const [IsError, setIsError] = useState<boolean>(false);
  const onChangeInput = (event: string) => {
    setisPhNum(event);
    CheckPhoneNumVal(isPhNum);
  };

  const onChangeProveInput = (event: string) => {
    setProveNum(event);
  };
  const CheckPhoneNumVal = (e: string) => {
    var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if (regExp2.test(e) === true) {
      setPNVali(true);
    } else {
      setPNVali(false);
    }
  };
  const ChooseWay = () => {
    const SmsVer = async () => {
      try {
        await axios({
          method: 'post',
          url: 'https://www.markin-app.site/app/sms/verify',
          data: {
            phone: isPhNum,
            verifyCode: ProveNum,
          },
        }).then(response => {
          if (response.data.isSuccess === true) {
            navigation.navigate('EmailSignup', {
              AccessToken,
              isPhNum,
              Agreesns,
              AgreeEmail,
              Id,
            });
          } else {
            setIsError(true);
            setTimeout(() => {
              {
                setIsError(false);
              }
              ({timePassed: true});
            }, 3000);
          }
        });
      } catch {}
    };
    SmsVer();
  };

  const CheckOverlap = () => {
    const overlay = async () => {
      try {
        await axios({
          method: 'post',
          url: 'https://www.markin-app.site/app/phone/check',
          data: {
            phone: isPhNum,
          },
        }).then(response => {
          if (response.data.isSuccess === true) {
            smsCall();
          } else {
            setIsOverlap(true);
            console.log('겹침');
          }
        });
      } catch {
        console.log('겹');
      }
    };
    overlay();
  };

  const smsCall = () => {
    setSendSMS(!SendSMS);
    Alert.alert('전송됩니다!');
  };

  const goLogin = () => {
    setIsOverlap(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10}}
        onPress={() => navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40}}>
        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 28}}>
          휴대폰 번호 인증이 {'\n'}필요합니다.
        </Text>
        <Text style={styles.sebText}>개인정보는 절대 공개되지 않습니다.</Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 80}}>
        <TextInput
          placeholder="휴대폰 번호를 입력하세요."
          autoCapitalize={'none'}
          autoCorrect={false}
          clearTextOnFocus={true}
          value={isPhNum}
          onChangeText={onChangeInput}
          style={[
            {width: '65%', borderColor: isPhNum === '' ? '#DEDEDE' : 'black'},
            styles.input,
          ]}
        />
        {PNVali === true ? (
          <TouchableOpacity
            onPress={() => CheckOverlap()}
            style={[styles.xBtnDesign, {backgroundColor: 'black'}]}>
            <Text style={{color: 'white', fontFamily: 'NotoSansKR-Medium'}}>
              인증요청
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={[styles.xBtnDesign, {backgroundColor: '#DEDEDE'}]}>
            <Text style={{color: 'white', fontFamily: 'NotoSansKR-Medium'}}>
              인증요청
            </Text>
          </View>
        )}
      </View>
      {IsOverlap === true && (
        <OverLapModal
          IsOverlap={IsOverlap}
          setIsOverlap={setIsOverlap}
          goLogin={goLogin}
        />
      )}
      {IsError === true && (
        <View style={styles.CheckNum}>
          <Text style={styles.CheckText}>인증번호를 다시 확인해주세요.</Text>
        </View>
      )}

      {PNVali === true ||
        (isPhNum === '' && (
          <View style={styles.warnView}>
            <Text style={styles.warnText}>
              전화번호를 올바르게 입력해주세요.
            </Text>
          </View>
        ))}
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="인증번호 6자리를 입력하세요"
          autoCapitalize={'none'}
          autoCorrect={false}
          value={ProveNum}
          onChangeText={onChangeProveInput}
          style={[
            {
              width: '92%',
              borderColor: ProveNum === '' ? '#DEDEDE' : 'black',
            },
            styles.input,
          ]}
        />
      </View>

      {/* api */}
      {SendSMS === true && <Sms isPhNum={isPhNum} SendSMS={SendSMS} />}
      {/* api */}

      {SendSMS === true ? (
        <TouchableOpacity
          style={[styles.btnDesign, {backgroundColor: 'black'}]}
          onPress={() => ChooseWay()}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.btnDesign, {backgroundColor: '#DEDEDE'}]}>
          <Text style={styles.btnText}>다음</Text>
        </View>
      )}
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
  input: {
    height: 56,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    textAlign: 'left',
    marginLeft: '0%',
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 14,
  },
  btnDesign: {
    width: '95%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    marginLeft: '5%',
    top: 750,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
  warnText: {
    color: '#FF5959',
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 13,
  },
  warnView: {
    borderTopColor: '#FF5959',
    borderTopWidth: 2,
    width: '65%',
    paddingTop: 5,
    marginTop: -2,
  },
  xBtnDesign: {
    borderRadius: 3,
    justifyContent: 'center',
    height: 50,
    width: 88,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 15,
  },
  CheckNum: {
    width: '95%',
    height: 50,
    position: 'absolute',
    top: 220,
    backgroundColor: '#565656',
    left: '5%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CheckText: {
    color: 'white',
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
  },
  sebText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#676767',
    marginTop: 10,
  },
});

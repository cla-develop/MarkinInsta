import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icons from '../../Icons/Icons';
// import InputPW from './Sections/InputPW';
// import axios from 'axios';
export default function EmailSignup({navigation, route}: any) {
  const [Name, setName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  // const [isShow, setIsShow] = useState<boolean>(false);
  const [EVali, setEVali] = useState<boolean>(true);
  // const [IsPassword, setIsPassword] = useState<string>('');
  // const [ConfirmPassword, setConfirmPassword] = useState<string>('');
  // const [PVali, setPVali] = useState<boolean>(false);
  // const [CPVali, setCPVali] = useState<boolean>(false);
  const {AccessToken, isPhNum, Agreesns, AgreeEmail, Id} = route.params;
  const onChangeName = (event: string) => {
    setName(event);
  };
  const onChangeEmailInput = (event: string) => {
    setEmail(event);
    checkEmail(Email);
  };
  const checkEmail = (e: string) => {
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
  // const CheckEmail = () => {
  //   const sendSMS = async () => {
  //     try {
  //       await axios({
  //         method: 'post',
  //         data: {
  //           email: Email,
  //         },
  //         url: 'https://www.markin-app.site/app/email/check',
  //       }).then(response => {
  //         if (response.data.isSuccess === false) {
  //           Alert.alert('중복된 이메일입니다.');
  //         } else {
  //           setIsShow(true);
  //         }
  //       });
  //     } catch (e: any) {
  //       Alert.alert('중복된 err.');
  //     }
  //   };

  //   sendSMS();
  // };
  const ChooseWay = () => {
    navigation.navigate('AgeChoose', {
      Email,
      Name,
      AccessToken,
      isPhNum,
      Agreesns,
      AgreeEmail,
      Id,
    });
  };

  return (
    <View style={styles.allView}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
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
          <Text style={styles.topText}>회원가입</Text>
        </View>
        <View style={{marginTop: 50}}>
          <Text style={{fontFamily: 'NotoSansKR-Medium'}}>이름</Text>
          <TextInput
            value={Name}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholder="본명을 입력해주세요"
            onChangeText={onChangeName}
            style={[styles.input, {borderColor: 'black'}]}
          />
          <Text style={{marginTop: 30, fontFamily: 'NotoSansKR-Medium'}}>
            이메일
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={Email}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder="이메일을 입력해주세요"
              onChangeText={onChangeEmailInput}
              style={[
                styles.Emailinput,
                {borderColor: Email === '' ? '#DEDEDE' : 'black'},
              ]}
            />
          </View>
          {EVali === true || Email === '' ? (
            <View>
              <Text></Text>
            </View>
          ) : (
            <View style={styles.warnView}>
              <Text style={styles.warnText}>
                이메일 주소를 올바르게 입력해주세요.
              </Text>
            </View>
          )}
        </View>
        {/* 중복확인 후 비밀번호 받기 */}
        {/* {isShow === true && (
        <View style={{marginTop: 20}}>
          <InputPW
            IsPassword={IsPassword}
            setIsPassword={setIsPassword}
            ConfirmPassword={ConfirmPassword}
            setConfirmPassword={setConfirmPassword}
            PVali={PVali}
            setPVali={setPVali}
            CPVali={CPVali}
            setCPVali={setCPVali}
          />
        </View>
      )} */}
        {/* api */}

        {/*api*/}
      </ScrollView>
      <View style={{justifyContent: 'center', marginBottom: 20}}>
        {EVali === true && Email !== '' ? (
          <TouchableOpacity
            style={styles.btnDesign}
            onPress={() => ChooseWay()}>
            <Text style={styles.btnText}>다음</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.xbtnDesign}>
            <Text style={styles.btnText}>다음</Text>
          </View>
        )}
      </View>
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
  topText: {
    marginLeft: '33%',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
    marginTop: 5,
  },
  input: {
    width: '95%',
    height: 30,
    backgroundColor: 'white',
    marginTop: 10,
    borderBottomWidth: 1,
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 0,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
  },
  Emailinput: {
    width: '95%',
    height: 30,
    backgroundColor: 'white',
    marginTop: 10,
    borderBottomWidth: 1,
    lineHeight: 20,
    textAlign: 'left',
    marginLeft: '0%',
    paddingLeft: 0,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
  },
  checkbut: {
    width: 80,
    height: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  warnText: {
    color: '#FF5959',
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 13,
  },
  warnView: {
    borderTopColor: '#FF5959',
    borderTopWidth: 2,
    width: '95%',
    paddingTop: 5,
    marginTop: -2,
  },
  btnDesign: {
    backgroundColor: 'black',
    width: '95%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',

    marginBottom: 20,
  },
  xbtnDesign: {
    backgroundColor: '#DEDEDE',
    width: '95%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',

    marginBottom: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});

{
  /* <TouchableOpacity
              style={[
                styles.checkbut,
                {
                  backgroundColor: 'black',
                },
              ]}
              onPress={() => CheckEmail()}>
              <Text style={{color: 'white', fontFamily: 'NotoSansKR-Medium'}}>
                중복확인
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.checkbut,
                {
                  backgroundColor: '#DEDEDE',
                },
              ]}>
              <Text style={{color: 'white', fontFamily: 'NotoSansKR-Medium'}}>
                중복확인
              </Text>
            </View>
          )} */
}

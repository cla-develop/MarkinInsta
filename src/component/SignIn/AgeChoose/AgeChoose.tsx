import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
import Icons from '../../Icons/Icons';
// import AgeBut from './Sections/AgeBut';
// import SexBut from './Sections/SexBut';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/ko';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AgeChoose({navigation, route}: any) {
  const {Email, Name, AccessToken, isPhNum, Agreesns, AgreeEmail, Id} =
    route.params;
  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('JWT', value);
    } catch (e) {
      console.log('qwwqqqqqq');
    }
  };
  const stCom = StyleSheet.create({
    greyBtn: {
      width: '100%',
      height: 60,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#DEDEDE',
      alignItems: 'center',
      borderRadius: 8,
    },
    greyText: {fontSize: 18, fontFamily: 'NotoSansKR-Medium'},
  });

  const [JWT, setJWT] = useState<string>('');
  const [Sex, setSex] = useState(0);
  const [Isboy, setIsboy] = useState(false);
  const [Isgirl, setIsgirl] = useState(false);
  const [isDate, setDate] = useState('년도/월/일');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Birth, setBirth] = useState<string>('');

  const handleBoy = () => {
    setIsboy(!Isboy);
    setIsgirl(false);
    setSex(0);
  };
  const handleGirl = () => {
    setIsboy(false);
    setIsgirl(!Isgirl);
    setSex(1);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    hideDatePicker();
    setDate(moment(date).format('yyyy/MM/DD'));
    setBirth(moment(date).format('yyyy-MM-DD'));
  };
  const goCategory = () => {
    navigation.navigate('Loading', {JWT});
  };
  useEffect(() => {
    if (JWT !== '') {
      goCategory();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JWT]);
  const SignInboy = () => {
    const checkSignin = async () => {
      try {
        await axios({
          method: 'post',
          url: 'https://www.markin-app.site/app/users/instagram',
          data: {
            access_token: AccessToken,
            instagramId: Id,
            email: Email,
            name: Name,
            phone: isPhNum,
            gender: 2,
            birth: Birth,
            agreement_sms: Agreesns,
            agreement_email: AgreeEmail,
          },
        }).then(response => {
          if (response.data.isSuccess === true) {
            setJWT(response.data.result.jwt);
            storeData(response.data.result.jwt);
          } else {
            Alert.alert(response.data.message + 'asd');
          }
        });
      } catch (response: any) {
        Alert.alert(response.data.message);
      }
    };
    checkSignin();
  };

  const SignIngirl = () => {
    const checkSignin = async () => {
      try {
        await axios({
          method: 'post',
          url: 'https://www.markin-app.site/app/users/instagram',
          data: {
            access_token: AccessToken,
            instagramId: Id,
            email: Email,
            name: Name,
            phone: isPhNum,
            gender: 1,
            birth: Birth,
            agreement_sms: Agreesns,
            agreement_email: AgreeEmail,
          },
        }).then(response => {
          if (response.data.isSuccess === true) {
            setJWT(response.data.result.jwt);
            storeData(response.data.result.jwt);
          } else {
            Alert.alert(response.data.message + 'asd');
          }
        });
      } catch (response: any) {
        Alert.alert(response.data.message);
      }
    };
    checkSignin();
  };
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        style={{zIndex: 10, marginLeft: '2%'}}
        onPress={() => navigation.goBack()}>
        <Icons.Entypo
          name="chevron-thin-left"
          size={20}
          color="black"
          style={{left: -5, top: 10}}
        />
      </TouchableOpacity>
      <View style={{marginTop: 40}}>
        <Text style={styles.TitleLetter}>
          성별과 생년월일을 {'\n'}알려주세요
        </Text>
      </View>
      {/* Sex button */}
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 20, color: '#181818'}}>성별</Text>
        <View style={{flexDirection: 'row', marginTop: 20, width: '100%'}}>
          <TouchableOpacity style={{width: '45%'}} onPress={handleBoy}>
            <View
              style={[
                stCom.greyBtn,
                {backgroundColor: Isboy === true ? 'black' : 'white'},
              ]}>
              <Text
                style={[
                  stCom.greyText,
                  {color: Isboy === true ? 'white' : '#9C9C9C'},
                ]}>
                남성
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '45%', marginLeft: '5%'}}
            onPress={handleGirl}>
            <View
              style={[
                stCom.greyBtn,
                {backgroundColor: Isgirl === true ? 'black' : 'white'},
              ]}>
              <Text
                style={[
                  stCom.greyText,
                  {color: Isgirl === true ? 'white' : '#9C9C9C'},
                ]}>
                여성
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {Isgirl === true || Isboy === true ? (
        <View>
          <View style={{marginTop: 50}}>
            <Text
              style={[
                styles.pickerBtnText,
                {
                  color: '#181818',
                },
              ]}>
              생년월일
            </Text>
            <TouchableOpacity
              style={styles.pickerBtn}
              onPress={() => setDatePickerVisibility(true)}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  color: isDate === '년도/월/일' ? '#DEDEDE' : '#181818',
                }}>
                {isDate}
              </Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      {isDate !== '년도/월/일' && (Isboy === true || Isgirl === true) ? (
        <TouchableOpacity
          style={[styles.btnDesign, {backgroundColor: 'black'}]}
          onPress={() => (Sex === 0 ? SignInboy() : SignIngirl())}>
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
  TopText: {fontSize: 24, fontFamily: 'Roboto-Bold', letterSpacing: 3},
  TitleLetter: {fontFamily: 'Roboto-Bold', fontSize: 28},
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: '5%',
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
  pickerBtn: {
    width: '95%',
    borderBottomColor: '#424242',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: 20,
  },
  pickerBtnText: {fontFamily: 'NotoSansKR-Medium', fontSize: 20},
});

{
  /* <SexBut
        Isboy={Isboy}
        setIsboy={setIsboy}
        Isgirl={Isgirl}
        setIsgirl={setIsgirl}
      /> */
}
{
  /* Age button */
}
{
  /* <AgeBut IsAge={IsAge} setIsAge={setIsAge} /> */
}
{
  /* next button */
}

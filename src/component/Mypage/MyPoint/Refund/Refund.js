import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Icons from '../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Refund({route}) {
  const {myPoint} = route.params;
  const navigation = useNavigation();
  const [WeCheck, setWeCheck] = useState(false);
  const [Echeck, setEcheck] = useState(false);
  const [Point, setPoint] = useState('');
  const [bankAccountName, setbankAccountName] = useState('');
  const [bank, setbank] = useState('');
  const [backAccountNum, setbackAccountNum] = useState('');
  const [IDnum, setIDnum] = useState('');
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
    });
  }, []);

  const Send = () => {
    axios({
      method: 'post',
      data: {
        point: parseInt(Point),
        bankAccountName: bankAccountName,
        bank: bank,
        bankAccountNum: backAccountNum,
        registrationNumber: IDnum,
      },
      headers: {
        'x-access-token': JWT,
      },
      url: 'https://www.markin-app.site/app/users/point',
    }).then(response => {
      console.log(response.data.message);
      if (response.data.isSuccess === true) {
        navigation.navigate('RefundFinish', {Point: Point});
      } else {
        console.log(response.data.message);
      }
    });
  };

  return (
    <View style={styles.allView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', height: 40}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{position: 'absolute', left: '5%'}}>
            <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.TitleText}>환급하기</Text>
        <View style={{margin: '5%'}}>
          <Text style={styles.bText}>환급할 금액</Text>
          <TextInput
            style={styles.Inputstyle}
            placeholder="환급할 금액을 입력해주세요."
            value={Point}
            keyboardType="number-pad"
            onChangeText={i => setPoint(i)}
          />
          {parseInt(Point) < 10000 && myPoint > 10000 && (
            <View style={{borderTopColor: '#FF5959', borderTopWidth: 1}}>
              <Text style={[styles.NotoMe12]}>
                환급 최소 금액은 10,000원입니다.
              </Text>
            </View>
          )}
          {parseInt(Point) > myPoint && (
            <View style={{borderTopColor: '#FF5959', borderTopWidth: 1}}>
              <Text style={[styles.NotoMe12]}>
                환급 가능 금액을 초과했습니다.
              </Text>
            </View>
          )}
          <View style={styles.greyView}>
            <Text style={styles.greyText}>
              환급 가능 금액{' '}
              {myPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={styles.bText}>예금주</Text>
            <TextInput
              style={styles.Inputstyle}
              placeholder="이름 입력"
              value={bankAccountName}
              onChangeText={i => setbankAccountName(i)}
            />
            <TextInput
              value={IDnum}
              onChangeText={i => setIDnum(i)}
              style={styles.Inputstyle}
              placeholder="주민등록번호 (000000-0000000)"
            />
          </View>
          <View style={{marginTop: 25}}>
            <Text style={styles.bText}>입금 계좌</Text>
            <TextInput
              style={styles.Inputstyle}
              placeholder="은행명"
              value={bank}
              onChangeText={i => setbank(i)}
            />
            <TextInput
              keyboardType="numeric"
              style={styles.Inputstyle}
              placeholder="입금 계좌 번호 (-)를 제외한 숫자만 입력"
              value={backAccountNum}
              onChangeText={i => setbackAccountNum(i)}
            />
          </View>
          <View style={{marginTop: 45}}>
            <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: 18}}>
              개인정보 이용동의
            </Text>
            <TouchableOpacity onPress={() => setWeCheck(!WeCheck)}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{justifyContent: 'center'}}>
                  <Icons.AntDesign
                    name="check"
                    size={16}
                    style={{color: WeCheck === true ? '#7553FF' : '#DEDEDE'}}
                  />
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.TermsText}>
                    개인정보 취급위탁에 대해 동의합니다.(필수)
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEcheck(!Echeck)}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{justifyContent: 'center'}}>
                  <Icons.AntDesign
                    name="check"
                    size={16}
                    style={{color: Echeck === true ? '#7553FF' : '#DEDEDE'}}
                  />
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={styles.TermsText}>
                    개인정보 취급위탁에 대해 동의합니다.(필수)
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {Echeck === true &&
          WeCheck === true &&
          parseInt(Point) >= 10000 &&
          parseInt(Point) <= myPoint ? (
            <TouchableOpacity onPress={() => Send()}>
              <View style={[styles.btnView, {backgroundColor: '#7553FF'}]}>
                <Text style={styles.btnText}>환급 신청</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={[styles.btnView, {backgroundColor: '#DEDEDE'}]}>
              <Text style={styles.btnText}>환급 신청</Text>
            </View>
          )}
        </View>
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
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 25,
    marginLeft: '5%',
  },
  Inputstyle: {
    width: '100%',
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    height: 35,
    justifyContent: 'center',
    marginTop: 10,
  },
  bText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
  greyView: {
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    paddingLeft: '5%',
    marginTop: 15,
  },
  greyText: {fontFamily: 'NotoSansKR-Medium', fontSize: 16, color: '#747474'},
  TermsText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 15,
    marginLeft: 5,
  },
  btnView: {
    width: '100%',
    height: 55,

    borderRadius: 17,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  NotoMe12: {fontFamily: 'NotoSansKR-Medium', fontSize: 12, color: '#FF5959'},
});

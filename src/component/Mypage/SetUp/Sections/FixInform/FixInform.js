import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import styles from '../../../../Styles';
import Icons from '../../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function FixInform() {
  const navigation = useNavigation();
  const [PhonNum, setPhonNum] = useState('');
  const [Email, setEmail] = useState('');
  const [showV, setShowV] = useState(false);
  const [VerNum, setVerNum] = useState('');
  const [showB, setShowB] = useState(false);
  const [Name, setName] = useState('');
  const [SF, setSF] = useState('0');
  const [Birth, setBirth] = useState('');
  useEffect(() => {
    axios
      .get('https://www.markin-app.site/app/users', {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setEmail(response.data.result.email);
        setName(response.data.result.name);
        setPhonNum(response.data.result.phone);
        setBirth(response.data.result.birth);
      });
  }, []);

  const Send = () => {
    axios({
      method: 'patch',
      data: {
        email: Email,
        phone: PhonNum,
      },
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
      },
      url: 'https://www.markin-app.site/app/users',
    }).then(response => {
      console.log(response.data.message);
      if (response.data.isSuccess === true) {
        navigation.navigate('FixFinish');
      }
    });
  };
  const SendVri = () => {
    axios
      .post('https://www.markin-app.site/app/sms', {
        phone: PhonNum,
      })
      .then(response => {
        if (response.data.isSuccess === true) {
          setShowV(true);
        }
        console.log(response.data.message);
      });
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
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.allView}>
      <View style={styles.CenterTiileView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>회원정보 수정</Text>
      </View>
      <View style={{padding: '5%'}}>
        <Text style={instyles.inputTitle}>이름</Text>
        <View style={instyles.squareView}>
          <Text style={[styles.NotoReg16, {color: '#9C9C9C'}]}>{Name}</Text>
        </View>
        <Text style={instyles.inputTitle}>생년월일</Text>
        <View style={instyles.squareView}>
          <Text style={[styles.NotoReg16, {color: '#9C9C9C'}]}>{Birth}</Text>
        </View>
        <Text style={instyles.inputTitle}>이메일</Text>
        <TextInput
          style={styles.W100input}
          value={Email}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={event => setEmail(event)}
        />
        <Text style={instyles.inputTitle}>휴대폰 번호</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: 220}]}
            value={PhonNum}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={event => setPhonNum(event)}
          />
          <TouchableOpacity onPress={() => SendVri()}>
            <View style={instyles.requestBtun}>
              <Text style={[styles.NotoMe14, {color: 'white'}]}>
                다른 번호 인증
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {showV === true && (
          <>
            <Text style={instyles.inputTitle}>인증번호</Text>
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
                    인증번호를 올바르게 입력해주세요.
                  </Text>
                </View>
              )}

              <TouchableOpacity onPress={() => CheckVer()}>
                <View style={instyles.requestBtun}>
                  <Text style={[styles.NotoMe14, {color: 'white'}]}>
                    인증번호 확인
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
        {showB === true ? (
          <View style={{marginTop: 205}}>
            <TouchableOpacity onPress={() => Send()}>
              <View style={[styles.btnView, {backgroundColor: '#181818'}]}>
                <Text style={[styles.NotoMe18, {color: 'white'}]}>
                  수정완료
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{marginTop: showV === true ? 205 : 294}}>
            <TouchableOpacity>
              <View style={[styles.btnView, {backgroundColor: '#EDEDED'}]}>
                <Text style={[styles.NotoMe18, {color: 'white'}]}>
                  수정완료
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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

import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import instaLogo from '../../../images/instaLogo.png';
import Icons from '../../Icons/Icons';
import setting from '../../../images/setting.png';
import IdModal from './IdModal';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
//더미 아이디
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MyFeedHeader(props) {
  const navigation = useNavigation();
  const [isModal, setisModal] = useState(false);
  // 추후 인스타와 유튜브 구분 변수 필요
  const [IdNum, setIdNum] = useState(0);
  const [Data, setData] = useState([]);
  const [first, setfirst] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
    });
  }, []);
  const call = value => {
    axios
      .get(`https://www.markin-app.site/app/users/instagram`, {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        setData(response.data.result);
        console.log(response.data.result);
        setfirst(response.data.result[0].username);
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={{flexDirection: 'row'}}>
      {/* <TouchableOpacity
        style={{flexDirection: 'row', marginTop: 35}}
        onPress={() => setisModal(true)}> */}
      <View style={styles.LogoImg}>
        <Image source={instaLogo} style={{width: 20, height: 20}} />
      </View>
      <Text style={styles.IdText}>{first}</Text>
      {/* <Icons.AntDesign
        name="down"
        size={13}
        style={{marginTop: 23, marginLeft: 3}}
      /> */}
      {/* </TouchableOpacity> */}
      <View style={{width: 220}}></View>
      <TouchableOpacity onPress={() => navigation.navigate('SetUp')}>
        <View style={{marginTop: 36}}>
          <Image source={setting} style={styles.setting} />
        </View>
      </TouchableOpacity>
      <IdModal
        isModal={isModal}
        setisModal={setisModal}
        first={first}
        setfirst={setfirst}
        Data={Data}
        setData={setData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  setting: {
    width: 30,
    height: 30,
  },
  IdText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginTop: 40,
  },
  LogoImg: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 20,
  },
});

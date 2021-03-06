import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from '../../Styles';
import Icons from '../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import megaphone from './images/megaphone.png';
import chat from './images/chat.png';
import link from './images/link.png';
import question from './images/question.png';
import user from './images/user.png';
import Exit from './images/exit.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function SetUp() {
  const nDAta = null;

  const storeData = async () => {
    try {
      await AsyncStorage.removeItem('JWT').then(
        navigation.reset({
          index: 0,
          routes: [{name: 'ChooseWay'}],
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };
  const deleteinId = async () => {
    try {
      await AsyncStorage.removeItem('userId').then(DeleteId());
    } catch (e) {
      console.log(e);
    }
  };
  const deleteinAT = async () => {
    try {
      await AsyncStorage.removeItem('accessToken').then(deleteinId());
    } catch (e) {
      console.log(e);
    }
  };
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
      console.log(value);
    });
  }, []);

  const Logout = () => {
    axios({
      method: 'patch',
      headers: {
        'x-access-token': JWT,
      },
      url: 'https://www.markin-app.site/app/users/sign-out',
    }).then(response => {
      console.log(response.data.message);
      storeData();
    });
  };
  const DeleteId = () => {
    axios({
      method: 'delete',
      headers: {
        'x-access-token': JWT,
      },
      url: 'https://www.markin-app.site/app/users/delete',
    }).then(response => {
      console.log(response.data.message);
      storeData();
    });
  };
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View
        style={{alignItems: 'center', height: 40, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>??????</Text>
      </View>
      <View style={styles.greyBotLineView}>
        {/* ???????????? */}
        <TouchableOpacity onPress={() => navigation.navigate('Announce')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={megaphone} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>????????????</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 1:1 ??????  */}
        <TouchableOpacity onPress={() => navigation.navigate('Ask')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={chat} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>1:1 ??????</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* FAQ  */}
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={question} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>FAQ</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{padding: '5%'}}>
        {/* ???????????? ?????? */}

        <TouchableOpacity onPress={() => navigation.navigate('FixInform')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={user} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>???????????? ??????</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* ?????????????????? */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('ManageLink')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={link} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>?????? ????????????</Text>
            </View>
          </View>
        </TouchableOpacity> */}
        {/* ?????????????????? */}
        <TouchableOpacity onPress={() => Logout()}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image
                source={Exit}
                style={{height: 20, width: 20, marginLeft: 2.5}}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 12.5}}>
              <Text style={styles.NotoReg16}>????????????</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteinAT()}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Icons.AntDesign
                name="delete"
                style={{marginLeft: 1}}
                size={22}
              />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 12.5}}>
              <Text style={styles.NotoReg16}>?????? ??????</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// const instyle = StyleSheet.create({
//   allView: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 60,
//   },
// });

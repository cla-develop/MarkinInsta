import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from '../../../../Styles';
import Icons from '../../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import Pic from '../../images/pic.png';
import axios from 'axios';
import noProfile from '../../../../../images/noprofile.png';

export default function ManageLink() {
  const [Result, setResult] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get('https://www.markin-app.site/app/users/instagram', {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setResult(response.data.result);
      });
  }, []);

  return (
    <View style={[styles.allView, {backgroudcolor: '#F9F9F9'}]}>
      <View style={{height: 40, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.TopText}>채널 연결관리</Text>
      <View style={{padding: '5%'}}>
        <View style={inStyle.purpleView}>
          <View style={{flexDirection: 'row', paddingLeft: '5%'}}>
            <Text style={styles.NotoBo14Pur}>2단계 연결</Text>
            <Text style={styles.NotoReg14g42}>을 통해 활동에 참여하고</Text>
          </View>
          <View style={{flexDirection: 'row', paddingLeft: '5%'}}>
            <Text style={styles.NotoReg14g42}>
              채널 매니징 서비스를 받아보세요.
            </Text>
          </View>
          <Image
            source={Pic}
            style={{width: 40, height: 40, position: 'absolute', right: '5%'}}
          />
        </View>
        <View style={{marginTop: 8}}>
          {Result.map(item => (
            <View style={inStyle.CardView}>
              <View style={{justifyContent: 'center', height: '100%'}}>
                <Image
                  source={
                    item.profileImg === null
                      ? noProfile
                      : {uri: item.profileImg}
                  }
                  style={inStyle.ProfImg}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 20}}>
                <Text style={styles.RoboMe18}>{item.username}</Text>
                <Text style={{marginTop: 5}}>카테고리</Text>
                {item.username === 'yeonns2' ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('OAuthMain')}>
                    <View style={inStyle.purbtnView}>
                      <Text style={styles.NotoReg14wh}>2단계 연결</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={inStyle.GrbtnView}>
                    <Text style={styles.NotoReg14g74}>2단계 연결 완료</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
          <View style={{marginTop: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate('LinkChanel')}>
              <View style={[styles.btnView, {backgroundColor: '#EDEDED'}]}>
                <Text style={{fontSize: 25, color: '#747474'}}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const inStyle = StyleSheet.create({
  purpleView: {
    width: '100%',
    height: 80,
    backgroundColor: '#F4F1FF',
    borderRadius: 10,
    justifyContent: 'center',
  },
  CardView: {
    width: '100%',
    height: 120,
    shadowColor: '#00000010',
    shadowOffset: {width: 1.5, height: 1.5},
    shadowOpacity: 1,
    shadowRadius: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 12,
    paddingLeft: '5%',
    flexDirection: 'row',
  },
  ProfImg: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },
  purbtnView: {
    width: 220,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#7553FF',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GrbtnView: {
    width: 220,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#F3F3F3',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

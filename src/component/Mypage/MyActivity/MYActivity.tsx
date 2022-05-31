import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from '../../Styles';
import Icons from '../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MYActivity() {
  const navigation = useNavigation();
  const [Menu, setMenu] = useState('신청');
  const [Activties, setActivities] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      call(value);
    });
  }, [Menu]);
  const call = value => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(`https://www.markin-app.site/app/users/activity?status=${Menu}`, {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        setActivities(response.data.result);
        console.log(Menu);
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
        <Text style={styles.TitleText}>나의 활동</Text>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setMenu('신청')}
          style={[
            inStyle.menu,
            {borderBottomColor: Menu === '신청' ? '#181818' : '#EDEDED'},
          ]}>
          <View>
            <Text
              style={[
                Menu === '신청' ? inStyle.menuText : styles.NotoReg16grey,
              ]}>
              신청
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMenu('선정')}
          style={[
            inStyle.menu,
            {borderBottomColor: Menu === '선정' ? '#181818' : '#EDEDED'},
          ]}>
          <View>
            <Text
              style={[
                Menu === '선정' ? inStyle.menuText : styles.NotoReg16grey,
              ]}>
              선정
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMenu('진행중')}
          style={[
            inStyle.menu,
            {borderBottomColor: Menu === '진행중' ? '#181818' : '#EDEDED'},
          ]}>
          <View>
            <Text
              style={[
                Menu === '진행중' ? inStyle.menuText : styles.NotoReg16grey,
              ]}>
              진행중
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMenu('종료')}
          style={[
            inStyle.menu,
            {borderBottomColor: Menu === '종료' ? '#181818' : '#EDEDED'},
          ]}>
          <View>
            <Text
              style={[
                Menu === '종료' ? inStyle.menuText : styles.NotoReg16grey,
              ]}>
              종료
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{padding: '5%'}}>
        {Menu === '신청' && (
          <View>
            {Activties.map(item => (
              // tslint:disable-next-line: jsx-key
              <View key={item.advertisementNo} style={{marginTop: 20}}>
                <Text style={styles.NotoMe15}>{item.applyDate}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image
                    source={{uri: item.campaignImage}}
                    style={{height: 80, width: 80, borderRadius: 10}}
                  />
                  <View style={{width: '70%', marginLeft: 10}}>
                    <Text style={styles.NotoMe17}>{item.companyName}</Text>
                    <Text
                      style={[styles.NotoReg14g42, {marginTop: 3}]}
                      numberOfLines={1}>
                      {item.CampaignName}
                    </Text>
                    <View style={{marginTop: 10, flexDirection: 'row'}}>
                      <View style={{width: '80%'}}>
                        <Text style={[styles.SpoqaMe17]}>{item.reward}P</Text>
                      </View>
                      <Text style={styles.SpoqaMe14}>
                        {item.influencerNumber}명 모집
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {Menu === '선정' && (
          <View>
            {Activties.map(item => (
              // tslint:disable-next-line: jsx-key
              <View key={item.advertisementNo} style={{marginTop: 20}}>
                <Text style={styles.NotoMe15}>{item.applyDate}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image
                    source={{uri: item.campaignImage}}
                    style={{height: 80, width: 80, borderRadius: 10}}
                  />
                  <View style={{width: '70%', marginLeft: 10}}>
                    <Text style={styles.NotoMe17}>{item.companyName}</Text>
                    <Text
                      style={[styles.NotoReg14g42, {marginTop: 3}]}
                      numberOfLines={1}>
                      {item.CampaignName}
                    </Text>
                    <View style={{marginTop: 10, flexDirection: 'row'}}>
                      <View style={{width: '80%'}}>
                        <Text style={[styles.SpoqaMe17]}>{item.reward}P</Text>
                      </View>
                      <Text style={styles.SpoqaMe14}>
                        {item.influencerNumber}명 모집
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {Menu === '진행중' && (
          <View>
            {Activties.map(item => (
              // tslint:disable-next-line: jsx-key
              <View key={item.advertisementNo} style={{marginTop: 20}}>
                <Text style={styles.NotoMe15}>{item.applyDate}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image
                    source={{uri: item.campaignImage}}
                    style={{height: 80, width: 80, borderRadius: 10}}
                  />
                  <View style={{width: '70%', marginLeft: 10}}>
                    <Text style={styles.NotoMe17}>{item.companyName}</Text>
                    <Text
                      style={[styles.NotoReg14g42, {marginTop: 3}]}
                      numberOfLines={1}>
                      {item.CampaignName}
                    </Text>
                    <View style={{marginTop: 10, flexDirection: 'row'}}>
                      <View style={{width: '80%'}}>
                        <Text style={[styles.SpoqaMe17]}>{item.reward}P</Text>
                      </View>
                      <Text style={styles.SpoqaMe14}>
                        {item.influencerNumber}명 모집
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {Menu === '종료' && (
          <View>
            {Activties.map(item => (
              // tslint:disable-next-line: jsx-key
              <View key={item.advertisementNo} style={{marginTop: 20}}>
                <Text style={styles.NotoMe15}>{item.applyDate}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image
                    source={{uri: item.campaignImage}}
                    style={{height: 80, width: 80, borderRadius: 10}}
                  />
                  <View style={{width: '70%', marginLeft: 10}}>
                    <Text style={styles.NotoMe17}>{item.companyName}</Text>
                    <Text
                      style={[styles.NotoReg14g42, {marginTop: 3}]}
                      numberOfLines={1}>
                      {item.CampaignName}
                    </Text>
                    <View style={{marginTop: 10, flexDirection: 'row'}}>
                      <View style={{width: '80%'}}>
                        <Text style={[styles.SpoqaMe17]}>{item.reward}P</Text>
                      </View>
                      <Text style={styles.SpoqaMe14}>
                        {item.influencerNumber}명 모집
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
const inStyle = StyleSheet.create({
  menu: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    height: 40,
  },
  menuText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 15,
    color: '#181818',
  },
});

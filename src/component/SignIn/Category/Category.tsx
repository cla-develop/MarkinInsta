import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icons from '../../Icons/Icons';
import CatBut from './Sections/CatBut';
import axios from 'axios';
import {NavigationActions, StackActions} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Category({navigation, route}: any) {
  // const {JWT} = route.params;

  const [isFood, setisFood] = useState(false);
  const [isCoffee, setisCoffee] = useState(false);
  const [isBeauti, setisBeauti] = useState(false);
  const [isFashion, setisFashion] = useState(false);
  const [isGym, setisGym] = useState(false);
  const [isTravel, setisTravel] = useState(false);
  const [isbaby, setisbaby] = useState(false);
  const [isPet, setisPet] = useState(false);
  const [isGame, setisGame] = useState(false);
  const [isWrite, setisWrite] = useState(false);
  const [isLove, setisLove] = useState(false);
  const [isMusic, setisMusic] = useState(false);

  const [isCnt, setisCnt] = useState<number>(0);
  var isCategory = [''];
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isCategory = [];
    if (isFood === true) isCategory.push('음식');
    if (isCoffee === true) isCategory.push('카페');
    if (isBeauti === true) isCategory.push('뷰티');
    if (isFashion === true) isCategory.push('패션');
    if (isGym === true) isCategory.push('운동');
    if (isTravel === true) isCategory.push('여행');
    if (isbaby === true) isCategory.push('육아');
    if (isPet === true) isCategory.push('반려동물');
    if (isGame === true) isCategory.push('작가');
    if (isWrite === true) isCategory.push('게임');
    if (isLove === true) isCategory.push('연애');
    if (isMusic === true) isCategory.push('음악');
  }, [isCnt]);
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
    });
  }, []);

  const CategoryApi = () => {
    const API = async () => {
      try {
        await axios({
          method: 'post',
          url: `https://www.markin-app.site/app/users/categories`,
          headers: {
            'x-access-token': JWT,
          },
          data: {
            categories: isCategory,
          },
        }).then(response => {
          if (response.data.isSuccess === true) {
            navigation.navigate('Body');
          } else console.log(response.data.message);
        });
      } catch {}
    };
    API();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.allView}>
      <View style={{marginBottom: '70%'}}>
        <TouchableOpacity
          style={{zIndex: 10, marginLeft: '-1%'}}
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
            본인의 계정과 어울리는 {'\n'}카테고리를 선택해주세요 {':)'}
          </Text>
        </View>
        <CatBut
          isFood={isFood}
          setisFood={setisFood}
          isBeauti={isBeauti}
          setisBeauti={setisBeauti}
          isCoffee={isCoffee}
          setisCoffee={setisCoffee}
          isFashion={isFashion}
          setisFashion={setisFashion}
          isGame={isGame}
          setisGame={setisGame}
          isGym={isGym}
          setisGym={setisGym}
          isMusic={isMusic}
          setisMusic={setisMusic}
          isTravel={isTravel}
          setisTravel={setisTravel}
          isWrite={isWrite}
          setisWrite={setisWrite}
          isbaby={isbaby}
          setisbaby={setisbaby}
          isLove={isLove}
          setisLove={setisLove}
          isPet={isPet}
          setisPet={setisPet}
          setisCnt={setisCnt}
          isCnt={isCnt}
        />
      </View>
      {/* onPress={() => CategoryApi()} */}
      {isCnt >= 1 ? (
        <TouchableOpacity
          style={styles.truebtnDesign}
          onPress={() => CategoryApi()}>
          <Text style={styles.btnText}>완료</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.btnDesign}>
          <Text style={styles.btnText}>완료</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: '5%',
  },
  TitleLetter: {fontFamily: 'Roboto-Bold', fontSize: 24, lineHeight: 35},
  btnDesign: {
    backgroundColor: '#DEDEDE',
    width: '95%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    top: 900,
    justifyContent: 'center',
  },
  truebtnDesign: {
    backgroundColor: 'black',
    width: '95%',
    height: 50,
    borderRadius: 10,
    position: 'absolute',

    top: 900,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 18,
  },
});

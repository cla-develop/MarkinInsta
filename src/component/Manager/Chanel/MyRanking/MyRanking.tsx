/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import filter from '../../../../icons/filter.png';
import CatBtn from './Sections/CatBtn';
import MyRankModal from './Sections/MyRankModal';
import RankingList from './Sections/RankingList';
import MyInfo from './Sections/MyInfo';
import Icons from '../../../Icons/Icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MyRanking(props: any) {
  const [IsModalVisble, setIsModalVisble] = useState<boolean>(false);
  const [FnumLet, setFnumLet] = useState('진짜 영향력순');
  const [MyRank, setMyRank] = useState<number>(0);
  const [MyProfileImg, setMyProfileImg] = useState<string>('');
  const [followerCount, setFollowerCount] = useState<number>(0);
  const [realFollowerCnt, setRealFollowerCnt] = useState<number>(0);
  const [UserName, setUserName] = useState<string>('');
  const [FNum, setFNum] = useState('');
  const [RFNum, setRFNum] = useState('');
  const [Category, setCategory] = useState([]);
  const [Cat, setCat] = useState('전체');
  const [Others, setOthers] = useState([
    {
      ranking: 1,
      profileImg: '',
      username: '',
      followersCount: 1,
      realFollowerCount: 1,
    },
  ]);
  const [JWT, setJWT] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('JWT').then(value => {
      setJWT(value);
      getCategory(value);
    });
  }, []);
  const [asd, setasd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setasd(1);
    }, 100);
  }, []);
  // useEffect(() => {
  //   setCat('전체');
  // }, []);
  const getCategory = value => {
    axios
      .get(`https://www.markin-app.site/app/users/categories`, {
        headers: {
          'x-access-token': value,
        },
      })
      .then(response => {
        setCategory(response.data.result);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(
        `https://www.markin-app.site/app/channel/ranking?type=${FnumLet}&category=${Cat}`,
        {
          headers: {
            'x-access-token': JWT,
          },
        },
      )
      .then(response => {
        console.log(Cat);
        setMyRank(response.data.result.myRanking.ranking);
        setMyProfileImg(response.data.result.myRanking.profileImg);
        setUserName(response.data.result.myRanking.username);
        setFollowerCount(response.data.result.myRanking.followersCount);
        setRealFollowerCnt(response.data.result.myRanking.realFollowerCount);

        setOthers(
          response.data.result.rankingList.map(
            (node: {
              ranking: any;
              profileImg: any;
              username: any;
              followersCount: any;
              realFollowerCount: any;
            }) => ({
              ranking: node.ranking,
              profileImg: node.profileImg,
              username: node.username,
              followersCount: node.followersCount,
              realFollowerCount: node.realFollowerCount,
            }),
          ),
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, [Cat, FnumLet, JWT]);
  const handleModal = () => {
    setIsModalVisble(true);
  };
  // useEffect(() => {
  //   axios
  //     .get(`https://www.markin-app.site/app/channel/ranking?type=${FnumLet}`, {
  //       params: {
  //         username: 'yeonns2',
  //       },
  //       headers: {
  //         'x-access-token':
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
  //       },
  //     })
  //     .then(response => {
  //       setMyRank(response.data.result.myRanking.ranking);
  //       setMyProfileImg(response.data.result.myRanking.profileImg);
  //       setUserName(response.data.result.myRanking.username);
  //       setFollowerCount(response.data.result.myRanking.followersCount);
  //       setRealFollowerCnt(response.data.result.myRanking.realFollowerCount);
  //       setOthers(
  //         response.data.result.rankingList.map(
  //           (node: {
  //             ranking: any;
  //             profileImg: any;
  //             username: any;
  //             followersCount: any;
  //             realFollowerCount: any;
  //           }) => ({
  //             ranking: node.ranking,
  //             profileImg: node.profileImg,
  //             username: node.username,
  //             followersCount: node.followersCount,
  //             realFollowerCount: node.realFollowerCount,
  //           }),
  //         ),
  //       );
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [FnumLet]);

  const underFK = (fff: string) => {
    const Onum =
      '0' +
      fff.slice(fff.length - 2, fff.length - 1) +
      '.' +
      fff.slice(fff.length - 1);
    return Onum;
  };
  const overFK = (fff: string) => {
    const Onum =
      fff.slice(fff.length - 2, fff.length - 1) +
      '.' +
      fff.slice(fff.length - 1);
    return Onum;
  };

  useEffect(() => {
    if (followerCount < 1000) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const temp = followerCount.toString();
      setFNum(underFK(temp.slice(0, followerCount.toString().length - 2)));
    } else {
      const temp2 = followerCount.toString();
      setFNum(overFK(temp2.slice(0, followerCount.toString().length - 2)));
    }
    if (realFollowerCnt < 1000) {
      const temp3 = realFollowerCnt.toString();
      setRFNum(underFK(temp3.slice(0, realFollowerCnt.toString().length - 2)));
    } else {
      const temp4 = realFollowerCnt.toString();
      setRFNum(overFK(temp4.slice(0, realFollowerCnt.toString().length - 2)));
    }
    // var cnt = 0;
    // // Others.map(item => {
    // //   if (item.ranking < 1000) {
    // //     const temp = item.ranking.toString();
    // //     setOthers[cnt].ranking(
    // //       underFK(temp.slice(0, item.ranking.toString().length - 2)),
    // //     );
    // //     cnt++;
    // //   }
    // // });
  }, [followerCount, realFollowerCnt]);

  return (
    <>
      {asd === 1 && (
        <View style={styles.allView}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{paddingLeft: '5%'}}>
            <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
          <View
            style={{marginTop: 20, flexDirection: 'row', paddingLeft: '5%'}}>
            <View style={{width: '70%'}}>
              <Text style={styles.TopText}>나의 랭킹</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleModal()}
              style={{marginTop: 14}}>
              <View style={{width: 100, flexDirection: 'row'}}>
                <Text style={styles.filterText}>{FnumLet}</Text>
                <Image source={filter} style={styles.filter} />
              </View>
            </TouchableOpacity>
          </View>

          <CatBtn Category={Category} Cat={Cat} setCat={setCat} />

          {/* 가운데 내 정보 section */}
          <MyInfo
            MyRank={MyRank}
            MyProfileImg={MyProfileImg}
            UserName={UserName}
            followerCount={followerCount}
            realFollowerCnt={realFollowerCnt}
          />

          <Text style={styles.similarText}>나와 비슷한 랭킹</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <RankingList Others={Others} UserName={UserName} />
            <View style={{height: 50}} />
          </ScrollView>
          <MyRankModal
            IsModalVisble={IsModalVisble}
            setIsModalVisble={setIsModalVisble}
            setFnumLet={setFnumLet}
            FnumLet={FnumLet}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
  },
  TopText: {fontSize: 24, fontFamily: 'NotoSansKR-Bold'},

  similarText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
    marginTop: 20,
    paddingBottom: 15,
    paddingLeft: '5%',
  },
  FooterStyle: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(212, 212, 212)',
    position: 'absolute',
    bottom: 0,
  },
  filter: {
    width: 12,
    height: 10,
    marginTop: 6,
    marginLeft: 2,
    position: 'absolute',
    right: 5,
  },
  filterText: {
    fontFamily: 'NotoSansKR-Medium',
    position: 'absolute',
    right: 20,
  },
});

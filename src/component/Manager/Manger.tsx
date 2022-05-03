import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import TopBtn from './Chanel/MainSections/TopBtn';
import axios from 'axios';
import Chanel from './Chanel/Chanel';
import PostMain from './Post/PostMain';
export default function Manger() {
  const [chanelAndPost, setchanelAndPost] = useState<boolean>(true);
  const [RealEffect, setRealEffect] = useState<number>(0);
  const [MyRanking, setMyRanking] = useState<number>(0);

  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get('https://www.markin-app.site/app/channel', {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setRealEffect(response.data.result.channelResult.realFollowerCount);
        setMyRanking(response.data.result.channelResult.ranking);
      });
  }, []);

  return (
    <>
      <ScrollView style={styles.MainView} showsVerticalScrollIndicator={false}>
        <TopBtn
          chanelAndPost={chanelAndPost}
          setchanelAndPost={setchanelAndPost}
        />
        {chanelAndPost === true ? (
          <View>
            <Chanel RealEffect={RealEffect} MyRanking={MyRanking} />
          </View>
        ) : (
          <View>
            <PostMain />
          </View>
        )}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  TopBtn: {
    width: 75,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
  },
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  UnOAuthView: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 18,
    height: 250,
    marginTop: 10,
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
  MainView: {
    paddingLeft: '5%',
    paddingTop: 50,
    backgroundColor: '#F5F4F8',
  },
});

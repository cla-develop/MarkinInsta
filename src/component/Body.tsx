import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MainFooter from './Footer/MainFooter';
import Main from './MainPage/Main';
import Activity from './Activity/Activity';
import Manger from './Manager/Manger';
import MyPage from './Mypage/MyPage';
export default function Body() {
  const [bodyChange, setbodyChange] = useState<number>(0);
  return (
    <>
      {bodyChange === 0 && (
        <View>
          <Main />
        </View>
      )}
      {bodyChange === 1 && (
        <View>
          <Activity />
        </View>
      )}
      {bodyChange === 2 && (
        <View>
          <Manger />
        </View>
      )}
      {bodyChange === 4 && (
        <View>
          <MyPage />
        </View>
      )}
      <View style={styles.FooterStyle}>
        <MainFooter bodyChange={bodyChange} setbodyChange={setbodyChange} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});

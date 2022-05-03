import React from 'react';
import Carousel from '../../Utils/Carousel/Carousel';
import {SafeAreaView, Image, View, StyleSheet, Text} from 'react-native';

import markin1 from './images/first.png';
import markin2 from './images/second.png';
import markin3 from './images/third.png';
import markin4 from './images/fourth.png';

const ENTRIES1 = [
  {
    id: 0,
    illust: markin1,
  },
  {
    id: 1,
    illust: markin2,
  },
  {
    id: 2,
    illust: markin3,
  },
  {
    id: 3,
    illust: markin4,
  },
];

export default function MyCarousel(props: any) {
  return (
    <SafeAreaView>
      <Carousel
        page={props.Page}
        setPage={props.setPage}
        gap={40}
        data={ENTRIES1}
        pageWidth={320}
        RenderItem={ENTRIES1Page}
      />
    </SafeAreaView>
  );
}
const ENTRIES1Page = ({
  item,
}: {
  item: {
    id: number;
    illust: string;
  };
}) => {
  if (item.id === 4) {
    return (
      <View style={{width: 200, marginLeft: 120}}>
        <Image style={{width: 100, height: 100}} source={item.illust} />
        <View style={styles.fourthView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.purpleText}>계정연결</Text>
            <Text style={styles.blackText}>이</Text>
          </View>
          <Text style={styles.blackText}>완료되었습니다.</Text>
        </View>
      </View>
    );
  } else {
    return <Image style={{width: 320, height: 580}} source={item.illust} />;
  }
};
const styles = StyleSheet.create({
  blackText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 20,
    color: '#424242',
  },
  purpleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 20,
    color: '#7553FF',
  },
  fourthView: {
    position: 'absolute',
    top: 120,
    left: -20,
    alignItems: 'center',
  },
});

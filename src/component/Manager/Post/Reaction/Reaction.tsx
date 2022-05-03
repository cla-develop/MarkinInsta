/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icons from '../../../Icons/Icons';
import {LineChart} from 'react-native-chart-kit';
import RangeModal from '../../Chanel/FollowerChange/Sections/RangeModal';
const data = {
  labels: ['21일', '22일', '23일', '24일', '25일', '26일'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `#7553FF`, // optional
      strokeWidth: 2, // optional
    },
  ],
};
const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(74,74,74,${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0,
  fillShadowGradientFrom: 'white',
  fillShadowGradientToOpacity: 0,
  useShadowColorFromDataset: false, // optional
};
export default function Reaction(props: any) {
  const [Period, setPeriod] = useState('일주일');
  const [IsModalVisible, setIsModalVisble] = useState(false);
  return (
    <View style={styles.allView}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{paddingLeft: '5%'}}>
        <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingLeft: '5%',
        }}>
        <View style={{width: '70%'}}>
          <Text style={styles.TopText}>게시물 반응</Text>
        </View>
      </View>
      <View style={styles.bigBlock}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Medium',
              color: '#181818',
              fontSize: 18,
            }}>
            12월 27일 금요일
          </Text>
        </View>
        <View style={{width: 350, marginTop: 20}}>
          <TouchableOpacity onPress={() => setIsModalVisble(true)}>
            <View style={styles.greyBtn}>
              <Text
                style={{
                  fontFamily: 'NotoSansKR-Regular',
                  fontSize: 15,
                  color: '#181818',
                }}>
                {Period}
              </Text>
              <Icons.AntDesign
                name="down"
                size={15}
                color="#9C9C9C"
                style={{marginLeft: 3}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <LineChart
            data={data}
            width={330}
            height={220}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            bezier
          />
        </View>
        <View>
          <View style={{width: 310, flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 100}}>
              <Text style={styles.purpleText}>도달 수</Text>
            </View>
            <View style={{width: 210}}>
              <Text style={[styles.purpleText, {textAlign: 'right'}]}>
                56,283명
              </Text>
            </View>
          </View>
          {/* 검정글씨 1 */}
          <View style={{width: 310, flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 100}}>
              <Text style={styles.blackTextx}>노출 수</Text>
            </View>
            <View style={{width: 210}}>
              <Text style={[styles.blackTextx, {textAlign: 'right'}]}>
                2 회
              </Text>
            </View>
          </View>
          {/* 검정글씨 2 */}
          <View style={{width: 310, flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 100}}>
              <Text style={styles.blackTextx}>좋아요 수</Text>
            </View>
            <View style={{width: 210}}>
              <Text style={[styles.blackTextx, {textAlign: 'right'}]}>
                2 개
              </Text>
            </View>
          </View>
          {/* 검정글씨 3 */}
          <View style={{width: 310, flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 100}}>
              <Text style={styles.blackTextx}>댓글 수</Text>
            </View>
            <View style={{width: 210}}>
              <Text style={[styles.blackTextx, {textAlign: 'right'}]}>
                2 개
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.smallBlock}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontFamily: 'NotoSansKR-Medium', fontSize: 18}}>
            12월 21일대비
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Bold',
              fontSize: 18,
              color: '#7553FF',
              marginLeft: 5,
            }}>
            - 0.5%
          </Text>
        </View>
      </View>
      <RangeModal
        IsModalVisble={IsModalVisible}
        setIsModalVisble={setIsModalVisble}
        setPeriod={setPeriod}
        Period={Period}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: '#F5F4F8',
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
  bigBlock: {
    width: '90%',
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 18,
    marginLeft: '5%',
    marginTop: 40,
    alignItems: 'center',
  },
  smallBlock: {
    width: '90%',
    height: 72,
    marginTop: 12,
    marginLeft: '5%',
    backgroundColor: 'white',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    color: '#7554FF',
  },
  blackTextx: {
    fontFamily: 'NotoSansKR-Medium',
    color: '#424242',
    fontSize: 16,
  },
  greyBtn: {
    marginLeft: '70%',
    width: 94,
    height: 34,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

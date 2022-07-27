/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Categories(props) {
  const Category = [
    {key: 1, cat: '전체'},
    {key: 2, cat: '음식'},
    {key: 3, cat: '뷰티'},
    {key: 4, cat: '반려동물'},
    {key: 5, cat: '패션'},
  ];
  const Category2 = [
    {key: 1, cat: '육아'},
    {key: 2, cat: '게임'},
    {key: 3, cat: '여행'},
    {key: 4, cat: '작가'},
    {key: 5, cat: '운동'},
    {key: 6, cat: '음악'},
  ];

  return (
    <View style={{marginTop: 120}}>
      <View style={{flexDirection: 'row', marginLeft: '3%'}}>
        {Category.map(it => (
          <View key={it.key}>
            <TouchableOpacity onPress={() => props.setSelected(it.cat)}>
              <View
                style={[
                  styles.greyBtn,
                  {
                    backgroundColor:
                      props.Selected === it.cat ? '#7553FF' : 'white',
                    borderColor:
                      props.Selected === it.cat ? 'transparent' : '#747474',
                  },
                ]}>
                <Text
                  style={[
                    styles.inText,
                    {
                      color: props.Selected === it.cat ? 'white' : '#747474',
                    },
                  ]}>
                  {it.cat}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {/* 두번쨰줄 */}
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: '3%'}}>
        {Category2.map(it => (
          <View key={it.key}>
            <TouchableOpacity onPress={() => props.setSelected(it.cat)}>
              <View
                style={[
                  styles.greyBtn,
                  {
                    backgroundColor:
                      props.Selected === it.cat ? '#7553FF' : 'white',
                    borderColor:
                      props.Selected === it.cat ? 'transparent' : '#747474',
                  },
                ]}>
                <Text
                  style={[
                    styles.inText,
                    {
                      color: props.Selected === it.cat ? 'white' : '#747474',
                    },
                  ]}>
                  {it.cat}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greyBtn: {
    borderWidth: 1,

    height: 35,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  greyBtn5: {
    backgroundColor: 'white',
    borderWidth: 1,

    height: 35,
    width: 120,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  greyBtn4: {
    backgroundColor: 'white',
    borderWidth: 1,

    height: 35,
    width: 90,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  inText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Bold',
  },
});

// const [isCnt, setisCnt] = useState(0);
// var cnt = 0;
// const handleCheck = async item => {
//   const all = 0;

//   if (item !== 0) {
//     props.setSelected((props.Selected[item] = !props.Selected[item]));
//   } else {
//     props.setSelected(items => ({
//       ...items,
//       [all]: (props.Selected[all] = !props.Selected[all]),
//     }));
//   }
//   if (props.Selected[item] === true) {
//     setisCnt(isCnt + 1);
//   } else {
//     setisCnt(isCnt - 1);
//   }
//   alert(isCnt);
// };
// const getcnt = () => {
//   var i = 1;
//   for (i = 1; i < 8; i++) {
//     if (props.Selected[i] === true) {
//       if (props.Selected[i] === true) {
//         setisCnt(isCnt + 1);
//       }
//     }
//   }
// };
// const check = cnt => {
//   if (isCnt === 0) {
//     props.setSelected(items => ({
//       ...items,
//       [0]: (props.Selected[0] = true),
//     }));
//   } else {
//     props.setSelected(items => ({
//       ...items,
//       [0]: (props.Selected[0] = false),
//     }));
//   }
// };

///////////
{
  /*<TouchableOpacity
          style={{
            marginLeft: '5%',
          }}
          onPress={() => handleCheck(0)}>
          <View
            style={[
              styles.greyBtn,
              {
                backgroundColor:
                  props.Selected[0] === true ? '#7553FF' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.inText,
                {color: props.Selected[0] === true ? 'white' : '#747474'},
              ]}>
              전체
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(1)}>
          <View
            style={[
              styles.greyBtn,
              {
                backgroundColor:
                  props.Selected[1] === true ? '#7553FF' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.inText,
                {color: props.Selected[1] === true ? 'white' : '#747474'},
              ]}>
              뷰티
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(2)}>
          <View
            style={[
              styles.greyBtn,
              {
                backgroundColor:
                  props.Selected[2] === true ? '#7553FF' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.inText,
                {color: props.Selected[2] === true ? 'white' : '#747474'},
              ]}>
              동물
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => handleCheck(3)}>
          <View
            style={[
              styles.greyBtn5,
              {
                backgroundColor:
                  props.Selected[3] === true ? '#7553FF' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.inText,
                {color: props.Selected[3] === true ? 'white' : '#747474'},
              ]}>
              엔터테이먼트
            </Text>
          </View>
            </TouchableOpacity> */
}

////

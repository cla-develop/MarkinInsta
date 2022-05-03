/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Category(props) {
  const [Selected, setSelected] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const handleCheck = item => {
    setSelected(items => ({...items, [item]: Selected[item] + 1}));
  };
  const Category = [
    {key: 1, cat: '전체'},
    {key: 2, cat: '패션의류/잡화'},
    {key: 3, cat: '뷰티'},
    {key: 4, cat: '식품'},
  ];
  const Category2 = [
    {key: 1, cat: '생활/주방/가전'},
    {key: 2, cat: '디지털'},
    {key: 3, cat: '맛집/카페'},
    {key: 4, cat: '도서'},
  ];
  const Category3 = [
    {key: 1, cat: '반려동물'},
    {key: 2, cat: '취미/문구/음악'},
    {key: 3, cat: '스포츠/레저'},
  ];
  return (
    <View style={{marginTop: 120}}>
      <View style={{flexDirection: 'row', marginLeft: 20}}>
        {Category.map(item => (
          <TouchableOpacity
            onPress={() => props.setCat(item.cat)}
            style={[
              styles.nonClickBut,
              {
                backgroundColor: props.Cat === item.cat ? '#7553FF' : 'white',
                borderWidth: props.Cat === item.cat ? 0 : 1,
              },
            ]}
            key={item.key}>
            <Text
              style={[
                styles.inText,
                {color: props.Cat === item.cat ? 'white' : 'black'},
              ]}>
              {item.cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        {Category2.map(item => (
          <TouchableOpacity
            onPress={() => props.setCat(item.cat)}
            style={[
              styles.nonClickBut,
              {
                backgroundColor: props.Cat === item.cat ? '#7553FF' : 'white',
                borderWidth: props.Cat === item.cat ? 0 : 1,
              },
            ]}
            key={item.key}>
            <Text
              style={[
                styles.inText,
                {color: props.Cat === item.cat ? 'white' : 'black'},
              ]}>
              {item.cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10}}>
        {Category3.map(item => (
          <TouchableOpacity
            onPress={() => props.setCat(item.cat)}
            style={[
              styles.nonClickBut,
              {
                backgroundColor: props.Cat === item.cat ? '#7553FF' : 'white',
                borderWidth: props.Cat === item.cat ? 0 : 1,
              },
            ]}
            key={item.key}>
            <Text
              style={[
                styles.inText,
                {color: props.Cat === item.cat ? 'white' : 'black'},
              ]}>
              {item.cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nonClickBut: {
    borderColor: 'black',
    height: 30,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  inText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Bold',
    textAlign: 'center',
  },
  greyBtn: {
    borderWidth: 1,
    borderColor: '#747474',
    height: 35,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CatBtn(props: any) {
  return (
    <View style={{flexDirection: 'row', marginTop: 15, paddingLeft: '5%'}}>
      <TouchableOpacity onPress={() => props.setCat('전체')}>
        {props.Cat === '전체' ? (
          <View style={styles.onBtn}>
            <Text style={styles.onText}>전체</Text>
          </View>
        ) : (
          <View style={styles.offBtn}>
            <Text style={styles.offText}>전체</Text>
          </View>
        )}
      </TouchableOpacity>
      {props.Category.map((item: any, index: any) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => props.setCat(props.Category[index])}>
            {props.Category[index] === props.Cat ? (
              <View style={styles.onBtn}>
                <Text style={styles.onText}>{item}</Text>
              </View>
            ) : (
              <View style={styles.offBtn}>
                <Text style={styles.offText}>{item}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  onBtn: {
    backgroundColor: '#7553FF',
    borderRadius: 30,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 5,
  },
  offBtn: {
    backgroundColor: '#F3F3F3',
    borderRadius: 30,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 5,
  },
  onText: {
    color: 'white',
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 15,
  },
  offText: {
    color: 'black',
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 15,
  },
});

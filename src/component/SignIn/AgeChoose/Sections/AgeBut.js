import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function AgeBut(props) {
  return (
    <View style={{width: '90%', marginTop: 30, marginLeft: '5%'}}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={[
            styles.catBut,
            {
              left: 30,
              backgroundColor: props.IsAge === 1 ? 'black' : '#F5F5F5',
            },
          ]}
          onPress={() => props.setIsAge(1)}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 1 ? 'white' : '#00000080'},
            ]}>
            19세 이하
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setIsAge(2)}
          style={[
            styles.catBut,
            {
              right: 30,
              position: 'absolute',
              backgroundColor: props.IsAge === 2 ? 'black' : '#F5F5F5',
            },
          ]}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 2 ? 'white' : '#00000080'},
            ]}>
            20-24세
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={[
            styles.catBut,
            {
              left: 30,
              backgroundColor: props.IsAge === 3 ? 'black' : '#F5F5F5',
            },
          ]}
          onPress={() => props.setIsAge(3)}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 3 ? 'white' : '#00000080'},
            ]}>
            25-29세
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setIsAge(4)}
          style={[
            styles.catBut,
            {
              right: 30,
              position: 'absolute',
              backgroundColor: props.IsAge === 4 ? 'black' : '#F5F5F5',
            },
          ]}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 4 ? 'white' : '#00000080'},
            ]}>
            30-34세
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={[
            styles.catBut,
            {
              left: 30,
              backgroundColor: props.IsAge === 5 ? 'black' : '#F5F5F5',
            },
          ]}
          onPress={() => props.setIsAge(5)}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 5 ? 'white' : '#00000080'},
            ]}>
            35세-39세
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setIsAge(6)}
          style={[
            styles.catBut,
            {
              right: 30,
              position: 'absolute',
              backgroundColor: props.IsAge === 6 ? 'black' : '#F5F5F5',
            },
          ]}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 6 ? 'white' : '#00000080'},
            ]}>
            40세-44세
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          style={[
            styles.catBut,
            {
              left: 30,
              backgroundColor: props.IsAge === 7 ? 'black' : '#F5F5F5',
            },
          ]}
          onPress={() => props.setIsAge(7)}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 7 ? 'white' : '#00000080'},
            ]}>
            45세-49세
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setIsAge(8)}
          style={[
            styles.catBut,
            {
              right: 30,
              position: 'absolute',
              backgroundColor: props.IsAge === 8 ? 'black' : '#F5F5F5',
            },
          ]}>
          <Text
            style={[
              styles.catText,
              {color: props.IsAge === 8 ? 'white' : '#00000080'},
            ]}>
            50세 이상
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  catBut: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 45,
  },
  catText: {
    fontFamily: 'Roboto-Medium',
  },
});

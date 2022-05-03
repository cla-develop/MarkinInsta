import React from 'react';
import {View, Text, Image} from 'react-native';
import FeedDum from './FeedDum';
import Icons from '../../Icons/Icons';
export default function UserInfo() {
  return (
    <View style={{marginBottom: 150}}>
      {FeedDum.map(item => (
        <View style={{width: '100%', backgroundColor: 'white'}} key={item.id}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            <Image
              source={item.pImg}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                marginTop: -4,
              }}
            />
            <Text style={{marginLeft: 10}}>{item.userID}</Text>
          </View>
          <Image source={item.FImg} style={{width: '100%', height: 400}} />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                width: 100,
                flexDirection: 'row',
              }}>
              <Icons.AntDesign
                name="hearto"
                size={25}
                style={{marginLeft: 10}}
              />
              <Text style={{fontSize: 17, marginTop: 4, marginLeft: 10}}>
                123,123 {/* 좋아요수 */}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Icons.FontAwesome
                name="comment-o"
                size={25}
                style={{marginLeft: 20}}
              />
              <Text style={{fontSize: 17, marginTop: 4, marginLeft: 10}}>
                123,123 {/* 댓글수 */}
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 15, marginTop: 5}}>
            <Text style={{fontFamily: 'NotoSansKR-Medium'}}>{item.userID}</Text>
            <Text style={{marginTop: 3, marginBottom: 10}}>{item.ment}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

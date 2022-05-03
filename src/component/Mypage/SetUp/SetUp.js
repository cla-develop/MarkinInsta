import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from '../../Styles';
import Icons from '../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import megaphone from './images/megaphone.png';
import chat from './images/chat.png';
import link from './images/link.png';
import question from './images/question.png';
import user from './images/user.png';
export default function SetUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View
        style={{alignItems: 'center', height: 40, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>설정</Text>
      </View>
      <View style={styles.greyBotLineView}>
        {/* 공지사항 */}
        <TouchableOpacity onPress={() => navigation.navigate('Announce')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={megaphone} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>공지사항</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 1:1 문의  */}
        <TouchableOpacity onPress={() => navigation.navigate('Ask')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={chat} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>1:1 문의</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* FAQ  */}
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={question} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>FAQ</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{padding: '5%'}}>
        {/* 회원정보 수정 */}
        <TouchableOpacity onPress={() => navigation.navigate('FixInform')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={user} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>회원정보 수정</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 채널연결관리 */}
        <TouchableOpacity onPress={() => navigation.navigate('ManageLink')}>
          <View style={{flexDirection: 'row', height: 50}}>
            <View style={{justifyContent: 'center'}}>
              <Image source={link} style={{height: 25, width: 25}} />
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.NotoReg16}>채널 연결관리</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// const instyle = StyleSheet.create({
//   allView: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 60,
//   },
// });

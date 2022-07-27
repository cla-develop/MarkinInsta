import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from '../../../../Styles';
import Icons from '../../../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';
export default function Announce() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View style={styles.CenterTiileView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>공지사항</Text>
      </View>
      <WebView
        source={{
          uri: 'https://ablaze-practice-fb2.notion.site/No-1-e01368a25ac1440bb82f89e587fab78c',
        }}
      />
    </View>
  );
}

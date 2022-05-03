import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from '../../Styles';
import Icons from '../../Icons/Icons';
import {useNavigation} from '@react-navigation/native';

export default function FeedBack() {
  const navigation = useNavigation();
  return (
    <View style={styles.allView}>
      <View style={styles.CenterTiileView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>피드백</Text>
      </View>
      <WebView
        source={{
          uri: 'https://forms.gle/DtGcB5V68GMbDGXJ9',
        }}
      />
    </View>
  );
}

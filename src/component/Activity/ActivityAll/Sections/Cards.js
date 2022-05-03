import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Div} from 'reactnative-ui-bootstrap';
import issue1 from '../../../../images/issue1.png';
export default function Cards(props) {
  const navigation = useNavigation();
  return (
    <Div className={'row '}>
      {props.AllResult.map(item => (
        <Div
          className={'col-6'}
          style={{height: 300}}
          key={item.ApplicationCount}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {Id: item.advertisementNo})
            }>
            <View style={styles.ImageView}>
              <Image source={{uri: item.thumnail}} style={styles.Imagestyle} />
            </View>
            <View
              style={{flexDirection: 'row', paddingLeft: '5%', marginTop: 10}}>
              <View style={{width: 140}}>
                <Text ellipsizeMode="tail" numberOfLines={1}>
                  {item.campaignName}
                </Text>
              </View>
              <View style={styles.dayView}>
                <Text style={{fontSize: 10}}>0일 남음</Text>
              </View>
            </View>
            <Text
              style={{marginTop: 5, paddingLeft: '6%'}}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {item.productIntroduce}
            </Text>
            <View
              style={{flexDirection: 'row', marginTop: 5, paddingLeft: '6%'}}>
              <Text style={{color: 'red'}}>{item.influencerNumber}명</Text>
              <Text style={{color: '#B2B2B2'}}>
                /{item.ApplicantCount}명 모집
              </Text>
              <Text style={{position: 'absolute', right: '6%'}}>
                {' '}
                {item.reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P
              </Text>
            </View>
          </TouchableOpacity>
        </Div>
      ))}
    </Div>
  );
}

const styles = StyleSheet.create({
  ImageView: {
    paddingLeft: '5%',
    width: '95%',
    height: 210,
    marginTop: 10,
  },
  Imagestyle: {
    width: '100%',
    borderRadius: 5,

    height: 210,
  },
  dayView: {
    backgroundColor: '#F1F1F1',
    position: 'absolute',
    right: '6%',
    borderRadius: 3,
    padding: 3,
    marginTop: -2,
  },
});

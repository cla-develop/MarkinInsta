import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import noprofile from '../../../../images/noprofile.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CategoryReco() {
  const [Result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.markin-app.site/app/activity/popular`, {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setResult(response.data.result);
        console.log(Result);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View>
      {/* <View style={{flexDirection: 'row'}}> */}
      <Text
        style={{color: '#232323', fontFamily: 'NotoSansKR-Bold', fontSize: 18}}>
        패션 플렛폼인가요
      </Text>
      {/* </View> */}
      <ScrollView
        horizontal={true}
        style={{marginTop: 20}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <View style={{flexDirection: 'row'}}>
          {Result.map(item => (
            <TouchableOpacity key={item.advertisementNo}>
              <View style={{width: 300, marginRight: -30}}>
                <Image
                  source={
                    item.thumnail === '' || item.thumnail === null
                      ? noprofile
                      : {uri: item.thumnail}
                  }
                  style={styles.ImgStyle}
                />
                <View style={{width: 255}}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.TitleText}>
                    {item.campaignName}
                  </Text>
                </View>
                <View style={{width: 255}}>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={styles.subText}>
                    {item.productIntroduce}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Regular',
    color: '#424242',
  },
  ImgStyle: {
    width: 250,
    height: 275,
    borderRadius: 5,
  },
  TitleText: {
    fontSize: 15,
    marginTop: 2,
    fontFamily: 'NotoSansKR-Medium',
  },
});

/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PieChart from 'react-native-pie-chart';

export default function FollowRegion(props: any) {
  const [series, setseries] = useState([]);
  const [cityseries, setcityseries] = useState([]);
  const [followerTopCountry, setfollowerTopCountry] = useState([
    {country: '', population: 0, ratio: ''},
  ]);
  const [followerTopCity, setfollowerTopCity] = useState([
    {city: '', population: 0, ratio: ''},
  ]);
  useEffect(() => {
    axios
      .get('https://www.markin-app.site/app/channel', {
        headers: {
          'x-access-token': props.JWT,
        },
      })
      .then(response => {
        setfollowerTopCountry(
          response.data.result.followerTopCountry.map(
            (node: {country: any; population: any; ratio: any}) => ({
              country: node.country,
              population: node.population,
              ratio: node.ratio,
            }),
          ),
        );
        setfollowerTopCity(
          response.data.result.followerTopCity.map(
            (node: {city: any; population: any; ratio: any}) => ({
              city: node.city.split(','),
              population: node.population,
              ratio: node.ratio,
            }),
          ),
        );
        console.log(followerTopCity);
      });
  }, [props.JWT]);

  useEffect(() => {
    followerTopCountry.map(itme =>
      setseries(series => [...series, itme.population]),
    );
  }, [followerTopCountry]);
  useEffect(() => {
    followerTopCity.map(itme =>
      setcityseries(series => [...series, itme.population]),
    );
  }, [followerTopCity]);
  const widthAndHeight = 150;

  const sliceColor = [
    '#F44336',
    '#F44336',
    '#2196F3',
    '#FFEB3B',
    '#4CAF60',
    '#FF9800',
  ];
  const [Cat, setCat] = useState('국가');
  return (
    <View style={{marginTop: 10}}>
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>팔로워 지역 Top 5</Text>
          <View
            style={{
              position: 'absolute',
              right: 30,
              flexDirection: 'row',
              top: 5,
            }}>
            <TouchableOpacity onPress={() => setCat('국가')}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'NotoSansKR-Bold',
                    fontSize: 16,
                    color: Cat === '국가' ? '#7553FF' : '#747474',
                  }}>
                  국가
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCat('도시')}>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text
                  style={{
                    fontFamily: 'NotoSansKR-Bold',
                    fontSize: 16,
                    color: Cat === '도시' ? '#7553FF' : '#747474',
                  }}>
                  도시
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {Cat === '국가' ? (
          <View>
            <View style={{marginTop: 20}}>
              {followerTopCountry.map(item => (
                // tslint:disable-next-line: jsx-key
                <View style={{marginRight: 40, width: 140}} key={item.country}>
                  <View style={{flexDirection: 'row', marginTop: 6}}>
                    <View style={{flexDirection: 'row', width: 90}}>
                      <View
                        style={[styles.Dot, {backgroundColor: '#FF5959'}]}
                      />
                      <Text style={[styles.regionText, {marginLeft: 6}]}>
                        {item.country}
                      </Text>
                    </View>
                    <View style={{width: 60}}>
                      <Text style={[styles.regionText, {textAlign: 'right'}]}>
                        {item.ratio}%
                      </Text>
                    </View>
                  </View>
                </View>
              ))}

              <View style={{position: 'absolute', right: 16}}>
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={series}
                  sliceColor={sliceColor}
                  doughnut={true}
                  coverRadius={0.45}
                  coverFill={'#FFF'}
                />
              </View>
            </View>
            <View style={styles.GraphcenterView}>
              <Text style={{fontFamily: 'NotoSansKR-Medium'}}>
                {followerTopCountry[0].country} {followerTopCountry[0].ratio}%
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <View style={{marginTop: 20}}>
              {followerTopCity.map(item => (
                // tslint:disable-next-line: jsx-key
                <View style={{marginRight: 40, width: 140}} key={item.city}>
                  <View style={{flexDirection: 'row', marginTop: 6}}>
                    <View style={{flexDirection: 'row', width: 90}}>
                      <View
                        style={[styles.Dot, {backgroundColor: '#FF5959'}]}
                      />
                      <Text style={[styles.regionText, {marginLeft: 6}]}>
                        {item.city[0]}
                      </Text>
                    </View>
                    <View style={{width: 60}}>
                      <Text style={[styles.regionText, {textAlign: 'right'}]}>
                        {item.ratio}%
                      </Text>
                    </View>
                  </View>
                </View>
              ))}

              <View style={{position: 'absolute', right: 16}}>
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={cityseries}
                  sliceColor={sliceColor}
                  doughnut={true}
                  coverRadius={0.45}
                  coverFill={'#FFF'}
                />
              </View>
            </View>
            <View style={styles.GraphcenterView}>
              <Text style={{fontFamily: 'NotoSansKR-Medium'}}>
                {followerTopCity[0].city[0]} {followerTopCity[0].ratio}%
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '95%',
    height: 260,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  UpHighlightView: {
    backgroundColor: '#E8FFED',
    justifyContent: 'center',
    width: 48,
  },
  UpHiText: {
    color: '#57C971',
    textAlign: 'center',
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  numText: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  purpleGraph: {
    backgroundColor: '#7603FF',
    width: 60,
    marginBottom: 10,
    borderRadius: 13,
  },
  greyGraph: {
    backgroundColor: '#EDEDED',
    width: 60,
    marginBottom: 10,
    borderRadius: 13,
  },
  GraphView: {
    alignItems: 'center',
    width: '33%',
    justifyContent: 'flex-end',
  },
  Dot: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    marginTop: 7.5,

    marginLeft: 20,
  },
  regionText: {
    fontFamily: 'NotoSansKR-Bold',
    color: '#181818',
    fontSize: 14,
  },
  regionGreyText: {
    fontFamily: 'NotoSansKR-Bold',
    color: '#747474',
    fontSize: 14,
  },
  GraphcenterView: {
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    right: 40,
    top: 78,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#dededeß',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});

/* <View style={{flexDirection: 'row', marginTop: 6}}>
                <View style={{flexDirection: 'row', width: 90}}>
                  <View style={[styles.Dot, {backgroundColor: '#F58F8F'}]} />
                  <Text style={[styles.regionGreyText, {marginLeft: 6}]}>
                    미국
                  </Text>
                </View>
                <View style={{width: 60}}>
                  <Text style={[styles.regionGreyText, {textAlign: 'right'}]}>
                    24%
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <View style={{flexDirection: 'row', width: 90}}>
                  <View style={[styles.Dot, {backgroundColor: '#7985FF'}]} />
                  <Text style={[styles.regionGreyText, {marginLeft: 6}]}>
                    중국
                  </Text>
                </View>
                <View style={{width: 60}}>
                  <Text style={[styles.regionGreyText, {textAlign: 'right'}]}>
                    10.3%
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <View style={{flexDirection: 'row', width: 90}}>
                  <View style={[styles.Dot, {backgroundColor: '#92DEFF'}]} />
                  <Text style={[styles.regionGreyText, {marginLeft: 6}]}>
                    태국
                  </Text>
                </View>
                <View style={{width: 60}}>
                  <Text style={[styles.regionGreyText, {textAlign: 'right'}]}>
                    0.7%
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <View style={{flexDirection: 'row', width: 90}}>
                  <View style={[styles.Dot, {backgroundColor: '#F2F49E'}]} />
                  <Text style={[styles.regionGreyText, {marginLeft: 6}]}>
                    독일
                  </Text>
                </View>
                <View style={{width: 60}}>
                  <Text style={[styles.regionGreyText, {textAlign: 'right'}]}>
                    0.4%
                  </Text>
                </View>
              </View>
            </View> */

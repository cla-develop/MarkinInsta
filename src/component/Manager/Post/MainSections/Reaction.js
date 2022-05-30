import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import comments from './images/comments.png';
import follower from './images/follower.png';
import likes from './images/likes.png';
import views from './images/views.png';
import Icons from '../../../Icons/Icons';
import axios from 'axios';
import UnOAuth from '../../../../Utils/UnOAuth/UnOAuth';
import Loading from '../../../../Utils/Loading';
export default function Reaction(props) {
  const [Data, setData] = useState([]);
  const [isFb, setisFb] = useState(0);
  useEffect(() => {
    axios
      .get('https://www.markin-app.site/app/media/reaction', {
        headers: {
          'x-access-token': props.JWT,
        },
      })
      .then(response => {
        if (response.data.code === 3008) {
          setisFb(1);
        } else {
          setisFb(2);
          setData(response.data.result);
        }
      })
      .catch(err => console.log(err));
  }, [props.JWT]);
  const [asd, setasd] = useState(0);

  return (
    <View style={{marginTop: 10}}>
      <View style={styles.UnOAuthView}>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
          <Text style={styles.TopText}>게시물 반응</Text>
          {/* <View style={{position: 'absolute', right: 15}}>
            <Icons.AntDesign name="right" color="#DEDEDE" size={20} />
          </View> */}
        </View>
        {isFb === 2 && (
          <>
            {Data !== [] && (
              <View style={styles.imagesViews}>
                {/* 게시물 노출수 */}
                <View style={{flexDirection: 'row'}}>
                  <Image source={views} style={{height: 56, width: 56}} />
                  <View style={{marginTop: 5, marginLeft: 20}}>
                    <Text style={styles.Textlet}>게시물 노출 수</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text style={styles.numText}>
                        {Data.totalImpressions}
                      </Text>
                      <Text style={styles.Textlet}> 명</Text>
                      {/* <View style={{flexDirection: 'row', marginTop: 3}}>
                  <Icons.AntDesign
                    name="arrowup"
                    color="#57C971"
                    size={15}
                    style={{marginTop: 1, marginLeft: 10}}
                  />
                  <Text style={styles.UpText}>2</Text>
                </View> */}
                    </View>
                  </View>
                </View>
                {/*  게시물 도달수(팔로워) */}
                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <Image source={follower} style={{height: 56, width: 56}} />
                  <View style={{marginTop: 5, marginLeft: 20}}>
                    <Text style={styles.Textlet}>게시물 도달 수</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text style={styles.numText}>{Data.totalReach}</Text>
                      <Text style={styles.Textlet}> 명</Text>
                      {/* <View style={{flexDirection: 'row', marginTop: 3}}>
                  <Icons.AntDesign
                    name="arrowdown"
                    color="#FF5959"
                    size={15}
                    style={{marginTop: 1, marginLeft: 10}}
                  />
                  <Text style={styles.DownText}>21</Text>
                </View> */}
                    </View>
                  </View>
                </View>
                {/* 게시물 좋아요 수 */}
                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <Image source={likes} style={{height: 56, width: 56}} />
                  <View style={{marginTop: 5, marginLeft: 20}}>
                    <Text style={styles.Textlet}>게시물 좋아요 수</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text style={styles.numText}>{Data.totalLike}</Text>
                      <Text style={styles.Textlet}> 개</Text>
                      {/* <View style={{flexDirection: 'row', marginTop: 3}}>
                  <Icons.AntDesign
                    name="arrowup"
                    color="#57C971"
                    size={15}
                    style={{marginTop: 1, marginLeft: 10}}
                  />
                  <Text style={styles.UpText}>21</Text>
                </View> */}
                    </View>
                  </View>
                </View>
                {/* 게시물 댓글 수 */}
                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <Image source={comments} style={{height: 56, width: 56}} />
                  <View style={{marginTop: 5, marginLeft: 20}}>
                    <Text style={styles.Textlet}>게시물 댓글 수</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text style={styles.numText}>{Data.totalComment}</Text>
                      <Text style={styles.Textlet}> 개</Text>
                      {/* <View style={{flexDirection: 'row', marginTop: 3}}>
                  <Icons.AntDesign
                    name="arrowup"
                    color="#57C971"
                    size={15}
                    style={{marginTop: 1, marginLeft: 10}}
                  />
                  <Text style={styles.UpText}>21</Text>
                </View> */}
                    </View>
                  </View>
                </View>
              </View>
            )}
          </>
        )}
        {isFb === 1 && (
          <View style={{paddingBottom: 30}}>
            <UnOAuth />
          </View>
        )}
        {isFb === 0 && (
          <View style={{paddingBottom: 30}}>
            <Loading />
          </View>
        )}

        {/* 끝 */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  UnOAuthView: {
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 18,
    paddingBottom: 10,
    marginTop: 10,
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
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontWeight: 'bold',
    fontSize: 18,
  },
  Textlet: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    color: '#424242',
  },
  UpText: {color: '#57C971', fontFamily: 'SpoqaHanSansNeo-Medium'},
  DownText: {color: '#FF5959', fontFamily: 'SpoqaHanSansNeo-Medium'},
  imagesViews: {
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 30,
  },
});

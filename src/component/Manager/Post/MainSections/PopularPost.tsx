import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icons from '../../../Icons/Icons';

export default function PopularPost(props: any) {
  return (
    <View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <Text style={styles.TopText}>인기게시물</Text>
        <TouchableOpacity onPress={() => props.setIsModalVisible(true)}>
          <View style={styles.greyBtn}>
            <Text style={styles.modalText}>{props.Stand}</Text>
            <Icons.AntDesign
              name="down"
              size={15}
              color="#9C9C9C"
              style={{marginLeft: 3}}
            />
          </View>
        </TouchableOpacity>
      </View>
      {props.Stand === '좋아요순' && (
        <ScrollView
          style={{marginTop: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {props.topMediaByComments.map((item: any) => (
              <View style={{width: 310}} key={item.id}>
                <TouchableOpacity>
                  <View style={styles.cardView}>
                    <Image
                      source={{uri: item.media_url}}
                      style={styles.ImgStyle}
                    />
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.AntDesign
                          name="hearto"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>
                          {item.like_count.toString()}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.FontAwesome
                          name="comment-o"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>
                          {item.comments_count.toString()}
                        </Text>
                      </View>
                    </View>
                    <View style={{height: 30, marginLeft: 20}}>
                      <Text style={styles.subText}>{item.caption}</Text>
                      {/* <Text style={styles.hashText}>
                        #나리 #비숑 #댕댕이 #멍멍이
                      </Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
      {props.Stand === '댓글순' && (
        <ScrollView
          style={{marginTop: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {props.topMediaByComments.map((item: any) => (
              <View style={{width: 310}} key={item.id}>
                <TouchableOpacity>
                  <View style={styles.cardView}>
                    <Image
                      source={{uri: item.media_url}}
                      style={styles.ImgStyle}
                    />
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.AntDesign
                          name="hearto"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>
                          {item.like_count.toString()}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.FontAwesome
                          name="comment-o"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>
                          {item.comments_count.toString()}
                        </Text>
                      </View>
                    </View>
                    {/* <View style={{height: 30, marginLeft: 20}}>
                      <Text style={styles.subText}>
                        자기가 사람인 줄 아는 댕댕이{' '}
                      </Text>
                      <Text style={styles.hashText}>
                        #나리 #비숑 #댕댕이 #멍멍이
                      </Text>
                    </View> */}
                    <View style={{height: 30, marginLeft: 20}}>
                      <Text style={styles.subText}>{item.caption}</Text>
                      {/* <Text style={styles.hashText}>
                        #나리 #비숑 #댕댕이 #멍멍이
                      </Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  subText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Medium',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  hashText: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Medium',
    overflow: 'hidden',
    flexWrap: 'wrap',
    color: '#5740B8',
  },
  ImgStyle: {
    width: 290,
    height: 260,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  numText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 14,
    marginLeft: 8,
  },
  cardView: {
    width: 290,
    height: 360,
    backgroundColor: 'white',
    borderRadius: 18,
  },
  TopText: {
    fontSize: 20,
    color: '#181818',
    fontFamily: 'NotoSansKR-Medium',
  },
  greyBtn: {
    width: 94,
    height: 34,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 170,
  },
  modalText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 15,
    color: '#181818',
  },
});

{
  /* <View style={{flexDirection: 'row'}}>
              <View style={{width: 310}}>
                <TouchableOpacity>
                  <View style={styles.cardView}>
                    <Image source={issue1} style={styles.ImgStyle} />
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.AntDesign
                          name="hearto"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>123123</Text>
                      </View>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.FontAwesome
                          name="comment-o"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>123123</Text>
                      </View>
                    </View>
                    <View style={{height: 30, marginLeft: 20}}>
                      <Text style={styles.subText}>
                        자기가 사람인 줄 아는 댕댕이{' '}
                      </Text>
                      <Text style={styles.hashText}>
                        #나리 #비숑 #댕댕이 #멍멍이
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width: 310}}>
                <TouchableOpacity>
                  <View style={styles.cardView}>
                    <Image source={issue1} style={styles.ImgStyle} />
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.AntDesign
                          name="hearto"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>123123</Text>
                      </View>
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <Icons.FontAwesome
                          name="comment-o"
                          color="black"
                          size={20}
                        />
                        <Text style={styles.numText}>123123</Text>
                      </View>
                    </View>
                    <View style={{height: 30, marginLeft: 20}}>
                      <Text style={styles.subText}>
                        자기가 사람인 줄 아는 댕댕이{' '}
                      </Text>
                      <Text style={styles.hashText}>
                        #나리 #비숑 #댕댕이 #멍멍이
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={{width: 200}}>
          <TouchableOpacity style={{width: 180}}>
            <Image source={issue2} style={styles.ImgStyle} />
            <View style={{height: 30}}>
              <Text style={styles.subText}>
                크러쉬 조이, 음색 끝판왕 둘의 만남
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{width: 200}}>
          <TouchableOpacity style={{width: 180}}>
            <Image source={issue2} style={styles.ImgStyle} />
            <View style={{height: 30}}>
              <Text style={styles.subText}>
                크러쉬 조이, 음색 끝판왕 둘의 만남
              </Text>
            </View>
          </TouchableOpacity>
        </View> */
}
//   <View style={{width: 100}}></View>
// </View> */}

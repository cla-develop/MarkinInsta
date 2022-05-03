/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Description from './Sections/Description';
import ActInfo from './Sections/ActInfo';
import Icons from '../../Icons/Icons';
import axios from 'axios';
import moment from 'moment';

export default function Detail({route}) {
  const {Id} = route.params;
  const navigation = useNavigation();

  const [DesAct, setDesAct] = useState('des');
  const [advertismentNo, setadvertismentNo] = useState(0);
  const [adverismentType, setadverismentType] = useState('');
  const [campaignName, setcampaignName] = useState('');
  const [thumnail, setthumnail] = useState('');
  const [productIntroduce, setproductIntroduce] = useState('');
  const [campaignImage, setcampaignImage] = useState('');
  const [offer, setoffer] = useState('');
  const [campaignMission, setcampaignMission] = useState('');
  const [instruction, setinstruction] = useState('');
  const [reward, setreward] = useState(0);
  const [influencerNumber, setinfluencerNumber] = useState('');
  const [influencerQualification, setinfluencerQualification] = useState(null);
  const [ApplicantCount, setApplicantCount] = useState(1);
  const [campaignApplyStart, setcampaignApplyStart] = useState('');
  const [campaignApplyEnd, setcampaignApplyEnd] = useState('');
  const [influencerAnnouncement, setinfluencerAnnouncement] = useState('');
  const [contentsEnrollmentStart, setcontentsEnrollmentStart] = useState('');
  const [contentsEnrollmentEnd, setcontentsEnrollmentEnd] = useState('');
  const [campaignResultAnnouncement, setcampaignResultAnnouncement] =
    useState('');
  // const [activityId, setactivityId] = useState('20220308-96017588');
  const [endDay, setendDay] = useState('');
  const [leftDate, setleftDate] = useState(0);
  const [DateOrEnd, setDateOrEnd] = useState('');
  const today = new Date();
  useEffect(() => {
    axios
      .get(`https://www.markin-app.site/app/activity/${Id}`, {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImluc3RhZ3JhbUlkIjoiNDIzNDQwMzAxMzMyODU5MiIsImlhdCI6MTY0MzQ4MDg1MCwiZXhwIjoxNjc1MDE2ODUwLCJzdWIiOiJ1c2VySW5mbyJ9.MlsJ3tZcye9WdqRwz-AKY5KNZf46B1gFQ8nqgrJxGMg',
        },
      })
      .then(response => {
        setcampaignName(response.data.result.campaignName);
        setthumnail(response.data.result.thumnail);
        setproductIntroduce(response.data.result.productIntroduce);
        setcampaignImage(response.data.result.campaignImage);
        setthumnail(response.data.result.thumnail);
        setreward(response.data.result.reward);
        setinfluencerNumber(response.data.result.influencerNumber);
        setApplicantCount(response.data.result.ApplicantCount);
        setcampaignApplyEnd(response.data.result.campaignApplyEnd);
        setcampaignApplyStart(response.data.result.campaignApplyStart);
        setoffer(response.data.result.offer);
        setinfluencerAnnouncement(response.data.result.influencerAnnouncement);
        setcontentsEnrollmentStart(
          response.data.result.contentsEnrollmentStart,
        );
        setcontentsEnrollmentEnd(response.data.result.contentsEnrollmentEnd);
        setcampaignResultAnnouncement(
          response.data.result.campaignResultAnnouncement,
        );
        setproductIntroduce(response.data.result.productIntroduce);
        setendDay(
          new Date(
            moment(response.data.result.campaignApplyEnd, 'YYYY.MM.DD').format(
              'YYYY-MM-DD',
            ),
          ),
        );
        setinstruction(response.data.result.instruction);
        setcampaignMission(response.data.result.campaignMission);
        // console.log('1000');
        // console.log(
      })

      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    console.log(endDay);
    if (endDay > today) {
      setDateOrEnd('Date');
      setleftDate(Math.abs((endDay - today) / (1000 * 60 * 60 * 24)));
    } else {
      setDateOrEnd('End');
      setleftDate('모집종료');
    }
  }, [endDay]);

  return (
    <View style={styles.allView}>
      <View style={{alignItems: 'center', height: 40}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: '5%'}}>
          <Icons.Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.TitleText}>활동 상세설명</Text>
      </View>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <Image
            source={{uri: thumnail}}
            style={{width: '100%', height: 360}}
          />
        </View>
        <View style={{width: '100%', padding: '5%'}}>
          <Text style={styles.subTitle}>{campaignName}</Text>
          <Text style={styles.underText}>{productIntroduce}</Text>
          <View style={{marginTop: 22, flexDirection: 'row'}}>
            <View style={{width: 80}}>
              <Text style={styles.nameText}>리워드</Text>
            </View>
            <Text style={styles.pointText}>
              {reward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}P
            </Text>
          </View>
        </View>
        {/* 모집인원 */}
        <View style={styles.FirstSection}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 80}}>
              <Text style={styles.nameText}>모집인원</Text>
            </View>
            <Text
              style={{
                fontFamily: 'NotoSansKR-Bold',
                color: '#FF5959',
                marginTop: 1,
              }}>
              {influencerNumber}명
            </Text>
            <Text
              style={{
                fontFamily: 'NotoSansKR-Regular',
                color: '#181818',
                marginTop: 1,
              }}>
              {' '}
              / {ApplicantCount}명 모집
            </Text>
            <View style={styles.blackBlock}>
              <Icons.AntDesign name="clockcircleo" size={13} color="white" />
              {DateOrEnd === 'Date' ? (
                <Text style={styles.whiteText}>
                  {Math.floor(leftDate).toString()}일 남음
                </Text>
              ) : (
                <Text style={styles.whiteText}>모집종료</Text>
              )}
            </View>
          </View>
        </View>
        {/* 제공내역 */}
        <View style={styles.FirstSection}>
          <Text style={styles.nameText}>제공내역</Text>
          <View>
            <Text style={styles.greyText}>
              여드름흉터, 수두흉터, 점뺀흉터, 긁힌흉터, 손톱흉터 등 양볼{'\n'}에
              패인흉터 치료 {'\n'}
              {'\n'}6회 방문 흉터 침치료+피부결치료 (400만원 상당){' '}
            </Text>
          </View>
        </View>
        {/* 모집기간 */}
        <View style={styles.FirstSection}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{width: 150}}>
              <Text style={styles.infText}>인플루언서 모집기간 </Text>
            </View>
            <Text style={styles.greyText}>
              {campaignApplyStart} ~ {campaignApplyEnd}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{width: 150}}>
              <Text style={styles.infText}>인플루언서 발표 </Text>
            </View>
            <Text style={styles.greyText}>{influencerAnnouncement} </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{width: 150}}>
              <Text style={styles.infText}>컨텐츠 업로드기간 </Text>
            </View>
            <Text style={styles.greyText}>
              {contentsEnrollmentStart} ~ {contentsEnrollmentEnd}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{width: 150}}>
              <Text style={styles.infText}>캠페인 종료 </Text>
            </View>
            <Text style={styles.greyText}>{campaignResultAnnouncement} </Text>
          </View>
        </View>
        {/* 상세설명 + 활동안내 */}
        {DesAct === 'Act' ? (
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '50%', height: 50}}>
              <TouchableOpacity onPress={() => setDesAct('Des')}>
                <View style={styles.unClickrightView}>
                  <Text>상세설명</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.catView}>
              <Text>활동안내</Text>
            </View>
          </View>
        ) : (
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={styles.catView}>
              <Text>상세설명</Text>
            </View>
            <View style={{width: '50%', height: 50}}>
              <TouchableOpacity onPress={() => setDesAct('Act')}>
                <View style={styles.unClickView}>
                  <Text>활동안내</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {DesAct === 'Act' ? (
          <View>
            <ActInfo
              offer={offer}
              campaignMission={campaignMission}
              instruction={instruction}
            />
          </View>
        ) : (
          <View>
            <Description campaignImage={campaignImage} />
          </View>
        )}
      </ScrollView>
      {/* 신청하기 버튼 */}
      <View
        style={{
          alignItems: 'center',
          height: 100,
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Apply', {Id: Id})}>
          <View style={styles.footerView}>
            <Text
              style={{
                fontFamily: 'NotoSansKR-Bold',
                color: 'white',
                fontSize: 18,
              }}>
              신청하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  allView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
  },
  TitleText: {
    fontFamily: 'Quantico-Bold',
    fontSize: 17,
    marginTop: -5,
  },
  subTitle: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 18,
    color: '#181818',
  },
  underText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 14,
    color: '#424242',
    marginTop: 7,
  },
  nameText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    color: '#181818',
  },
  infText: {
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 14,
    color: '#181818',
  },
  pointText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
    fontSize: 20,
    color: '#181818',
    marginTop: -2,
  },
  FirstSection: {
    paddingTop: 13,
    paddingBottom: 13,
    width: '100%',
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    borderTopColor: '#EDEDED',
    borderTopWidth: 1,
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  blackBlock: {
    width: 77,
    height: 24,
    backgroundColor: '#181818',
    borderRadius: 3,
    marginLeft: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  whiteText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 13,
    color: 'white',
    marginLeft: 4,
    marginTop: -2,
  },
  greyText: {fontFamily: 'NotoSansKR-Regular', color: '#424242'},
  unClickView: {
    width: '100%',
    height: 50,
    backgroundColor: '#F9F9F9',
    borderLeftColor: '#DEDEDE',
    borderLeftWidth: 1,
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unClickrightView: {
    width: '100%',
    height: 50,
    backgroundColor: '#F9F9F9',
    borderRightColor: '#DEDEDE',
    borderRightWidth: 1,
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catView: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerView: {
    backgroundColor: 'black',
    width: 340,
    borderRadius: 6,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

{
  /* <View
          style={{
            width: '100%',
            height: 65,
            paddingLeft: '5%',
            paddingRight: '5%',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}> */
}
{
  /* <TouchableOpacity onPress={() => setDes(900)}>
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.infText}>상세설명 더보기</Text>
            </View>
          </TouchableOpacity> */
}
{
  /* </View> */
}
{
  /* <View
          style={{
            height: 300,
            width: '100%',
            backgroundColor: 'white',
            borderTopColor: '#EDEDED',
            borderTopWidth: 1.5,
          }}></View> */
}
{
  /* <View style={{height:}}></View> */
}

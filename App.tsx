import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddId from './src/component/Mypage/SetUp/Sections/ManageLink/AddId';
import Home from './src/component/Home/Home';
import Walkthrough from './src/component/Walkthrough/Walkthrough';
import FacebookLogin from './src/component/FacebookLogin/FacebookLogin';
import Apply from './src/component/Activity/Apply/Apply';
import OAuthMain from './src/component/OAuth/OAuthMain/OAuthMain';
import LinkMarkin from './src/component/OAuth/LinkMarkin/LinkMarkin';
import Professional from './src/component/OAuth/Professional/Professional';
import InstaFace from './src/component/OAuth/InstaFace/InstaFace';
import MyPage from './src/component/Mypage/MyPage';
import MyPoint from './src/component/Mypage/MyPoint/MyPoint';
import SetUp from './src/component/Mypage/SetUp/SetUp';
import MyPic from './src/component/Mypage/MyPic/MyPic';
import FAQ from './src/component/Mypage/SetUp/Sections/FAQ/FAQ';
import MYActivity from './src/component/Mypage/MyActivity/MYActivity';
import ManageLink from './src/component/Mypage/SetUp/Sections/ManageLink/ManageLink';
import Announce from './src/component/Mypage/SetUp/Sections/Announce/Announce';
import Ask from './src/component/Mypage/SetUp/Sections/Ask/Ask';
import RefundFinish from './src/component/Mypage/MyPoint/Refund/RefundFinish';
import Refund from './src/component/Mypage/MyPoint/Refund/Refund';
import FixInform from './src/component/Mypage/SetUp/Sections/FixInform/FixInform';
import FixFinish from './src/component/Mypage/SetUp/Sections/FixInform/FixFinish';
import PostReaction from './src/component/Mypage/MyPic/PostReaction/PostReaction';
import Manger from './src/component/Manager/Manger';
import PostMain from './src/component/Manager/Post/PostMain';
import MyRanking from './src/component/Manager/Chanel/MyRanking/MyRanking';
import RealEffect from './src/component/Manager/Chanel/RealEffect/RealEffect';
import MyAbility from './src/component/Manager/Post/Ability/MyAbility';
import FollowChange from './src/component/Manager/Chanel/FollowerChange/FollowChange';
import Reaction from './src/component/Manager/Post/Reaction/Reaction';
import Main from './src/component/MainPage/Main';
import Body from './src/component/Body';
import ChooseWay from './src/component/SignIn/ChooseWay/ChooseWay';
import Terms from './src/component/SignIn/Terms/Terms';
import AgeChoose from './src/component/SignIn/AgeChoose/AgeChoose';
import PhonNum from './src/component/SignIn/PhonNum/PhonNum';
import Name from './src/component/SignIn/Name/Name';
import Category from './src/component/SignIn/Category/Category';
import Alarm from './src/component/Alarm/Alarm';
import FeedBack from './src/component/MainPage/Sections/FeedBack';
import Detail from './src/component/Activity/Detail/Detail';
import Activity from './src/component/Activity/Activity';
import EmailSignup from './src/component/SignIn/Email/EmailSignup';
import SplashPage from './src/component/SplashPage';
import Loading from './src/component/SignIn/Loading';
import LinkChanel from './src/component/SignIn/LinkChannel/LinkChanel';
import {Settings} from 'react-native-fbsdk-next';
import SplashScreen from 'react-native-splash-screen';
import MyCategory from './src/component/Mypage/Category/Category';
import LinkFinish from './src/component/OAuth/LinkMarkin/LinkFinish';
const Stack = createStackNavigator();

function App() {
  // const [isJwt, setisJwt] = useState('');
  // React.useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('accessToken');
  //     if (value !== null) {
  //       setisJwt(value);
  //     } else console.log(value);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    Settings.setAdvertiserTrackingEnabled(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="FacebookLogin" component={FacebookLogin} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Apply" component={Apply} />
        <Stack.Screen name="OAuthMain" component={OAuthMain} />
        <Stack.Screen name="Professional" component={Professional} />
        <Stack.Screen name="InstaFace" component={InstaFace} />
        <Stack.Screen name="LinkMarkin" component={LinkMarkin} />
        <Stack.Screen name="LinkFinish" component={LinkFinish} />
        {/* 마이 페이지 */}
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="MyPoint" component={MyPoint} />
        <Stack.Screen name="Refund" component={Refund} />
        <Stack.Screen name="SetUp" component={SetUp} />
        <Stack.Screen name="MyPic" component={MyPic} />
        <Stack.Screen name="MYActivity" component={MYActivity} />
        <Stack.Screen name="Announce" component={Announce} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="ManageLink" component={ManageLink} />
        <Stack.Screen name="PostReaction" component={PostReaction} />
        <Stack.Screen name="FixInform" component={FixInform} />
        <Stack.Screen name="RefundFinish" component={RefundFinish} />
        <Stack.Screen name="FixFinish" component={FixFinish} />
        <Stack.Screen name="Ask" component={Ask} />
        <Stack.Screen name="LinkChanel" component={LinkChanel} />
        <Stack.Screen name="AddId" component={AddId} />
        <Stack.Screen name="MyCategory" component={MyCategory} />
        {/* 매니저  */}
        <Stack.Screen name="Manager" component={Manger} />
        <Stack.Screen name="MyRanking" component={MyRanking} />
        <Stack.Screen name="RealEffect" component={RealEffect} />
        <Stack.Screen name="PostMain" component={PostMain} />
        <Stack.Screen name="MyAbility" component={MyAbility} />
        <Stack.Screen name="FollowChange" component={FollowChange} />
        <Stack.Screen name="Reaction" component={Reaction} />
        {/* Sign IN */}
        <Stack.Screen name="ChooseWay" component={ChooseWay} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="PhonNum" component={PhonNum} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="AgeChoose" component={AgeChoose} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="EmailSignup" component={EmailSignup} />
        <Stack.Screen name="Loading" component={Loading} />
        {/* 홈 */}
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Alarm" component={Alarm} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        {/* <Stack.Screen name="Ranking" component={Ranking} /> */}
        <Stack.Screen name="Body" component={Body} />
        {/* <Stack.Screen name="Fblogin" component={FbLogin} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
{
  /* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="YourFeed" component={YourFeed} />
      <Stack.Screen name="Search" component={Search} />
      
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Feed" component={Feed} />        
      <Stack.Screen name="LinkChanel" component={LinkChanel} />
      <Stack.Screen name="FindEmail" component={FindEmail} />
      <Stack.Screen name="FindPW" component={FindPW} />
      <Stack.Screen name="ShowEmail" component={ShowEmail} />
      <Stack.Screen name="HaveNoID" component={HaveNoID} />
      <Stack.Screen name="ResetPW" component={ResetPW} />
      
       */
}
{
  /* <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="YourFeed" component={YourFeed} />
    <Stack.Screen name="Search" component={Search} />
    
    <Stack.Screen name="Message" component={Message} />
    <Stack.Screen name="Feed" component={Feed} />        
    <Stack.Screen name="LinkChanel" component={LinkChanel} />
    <Stack.Screen name="FindEmail" component={FindEmail} />
    <Stack.Screen name="FindPW" component={FindPW} />
    <Stack.Screen name="ShowEmail" component={ShowEmail} />
    <Stack.Screen name="HaveNoID" component={HaveNoID} />
    <Stack.Screen name="ResetPW" component={ResetPW} />
    
     */
}

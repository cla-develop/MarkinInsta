import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = props => {
  Icon.loadFont();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Text style={{fontFamily: 'NotoSansKR-Medium'}}>Login</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ImagePicker');
        }}>
        <Text>ImagePicker</Text>
      </TouchableOpacity> */}
      {/*
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('YourFeed');
        }}>
        <Text>YourFeed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Ranking')}>
        <Text>Ranking</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Alarm')}>
        <Text>Alarm</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Message')}>
        <Text>Message</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={() => props.navigation.navigate('ChooseWay')}>
        <Text>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('LinkChanel')}>
        <Text>인스타 연동 </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Manager')}>
        <Text>매니저 페이지 </Text>
      </TouchableOpacity>      
      
      <TouchableOpacity onPress={() => props.navigation.navigate('Category')}>
        <Text>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('FbLogin')}>
        <Text>FbLogin</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => props.navigation.navigate('FbLogin')}>
        <Text>Fblllogin</Text>
      </TouchableOpacity>*/}
      <Icon name="instagram" size={30} color="#111" />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Walkthrough')}>
        <Text style={{fontFamily: 'Roboto-Bold'}}>Walkthrough</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('FacebookLogin')}>
        <Text style={{fontFamily: 'NotoSansKR-Medium'}}>FacebookLogin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Body')}>
        <Text>Body </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Activity')}>
        <Text>Activity </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('OAuthMain')}>
        <Text>OAuthMain</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('MyPage')}>
        <Text>MyPage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Manager')}>
        <Text>Manager</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
        <Text>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Body')}>
        <Text>Body</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('ChooseWay')}>
        <Text>signin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

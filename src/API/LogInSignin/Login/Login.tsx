import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import axios from 'axios';

export default function Login(props: any) {
  const [Jwt, setJwt] = useState<string>('');
  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios({
          method: 'post',
          data: {
            email: props.Email,
            password: props.PW,
          },
          url: 'https://www.markin-app.site/app/login',
        }).then(response => {
          if (response.data.isSuccess === true) {
            setJwt(response.data.jwt);
            props.navigation.navigate('Main', {Jwt});
          } else {
            Alert.alert(response.data.message);
          }
        });
      } catch (response: any) {
        Alert.alert(response.data.message);
      }
    };
    checkLogin();
  }, [props.Cnt]);
  return <View></View>;
}

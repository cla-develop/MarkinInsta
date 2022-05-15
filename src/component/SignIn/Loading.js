import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Loading() {
  const navigation = useNavigation();
  const [value, setvalue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (value === 1) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Body'}],
        });
      }
    }, 100000);
  }, []);
  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
}

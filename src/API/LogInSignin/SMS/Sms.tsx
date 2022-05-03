import React, {useState, useEffect} from 'react';
import {Alert, View} from 'react-native';
import axios from 'axios';

export default function Sms(props: any) {
  const [phone, setphone] = useState('');
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const sendSMS = async () => {
      try {
        setphone('');
        setError(true);
        setLoading(true);
        const response = await axios({
          method: 'post',
          data: {
            phone: props.isPhNum,
          },
          url: 'https://www.markin-app.site/app/sms',
        });
        setphone(response.data);
      } catch (e: any) {
        setError(false);
      }
      setLoading(false);
    };
    sendSMS();
  }, [props.SendSMS]);

  return <View></View>;
}

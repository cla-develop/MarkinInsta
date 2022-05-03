import React, {useState, useEffect} from 'react';
import {Alert, View} from 'react-native';
import axios from 'axios';
import {Text} from 'react-native-elements';

export default function SmsVerify(props) {
  const [phone, setphone] = useState([]);
  const [verifyCode, setverifyCode] = useState('');
  const [Verify, setVerify] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const sendSMS = async () => {
      try {
        setphone('');
        setLoading(true);
        const response = await axios({
          method: 'post',
          data: {
            phone: props.isPhNum,
            verifyCode: props.ProveNum,
          },
          url: 'https://www.markin-app.site/app/sms/verify',
        });
        setphone(response.data);

        if (phone.isSuccess === true) {
          props.setError(true);
        } else {
          Alert.alert(phone.isSuccess);
        }
      } catch (e) {
        Alert.alert(props.error);
        props.setError(e);
      }
      setLoading(false);
    };
    sendSMS();
  }, [props.ProveNum]);

  return <View></View>;
}

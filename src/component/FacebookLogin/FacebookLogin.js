import {View, Text} from 'react-native';
import React from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
export default function FacebookLogin() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
}

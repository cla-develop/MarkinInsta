import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import {WebView} from 'react-native-webview';

export default function GoogleWebview(props) {
  const webviewRef = useRef();

  const _onNavigationStateChange = webViewState => {
    //({data}) => setparams(data));
    // if (!webViewState.url.includes('instagram')) {
    //   props.setHandleModal(false);
    // }s
  };
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setHandleModal(false)}>
      <Modal
        style={{
          justifyContent: 'flex-end',
          marginTop: 150,
          marginBottom: -10,
          width: '100%',
          marginLeft: -2,
        }}
        isVisible={props.HandleModal}
        onBackdropPress={() => props.setHandleModal(false)}>
        <WebView
          ref={webviewRef}
          source={{
            uri: 'https://accounts.google.com/o/oauth2/auth?client_id=433826854909-l7d6h0m0l3g82icmkkvg351pp1rksjd4.apps.googleusercontent.com&redirect_uri=http://localhost:3000/app/login/google&scope=email%20profile&response_type=code',
          }}
          onNavigationStateChange={e => _onNavigationStateChange(e)}
          style={{marginTop: 40, borderRadius: 20}}
        />
      </Modal>
    </GestureRecognizer>
  );
}

import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {WebView} from 'react-native-webview';
export default function WebViewModal(props: any) {
  const [plz, setplz] = useState<boolean>(true);
  // const webviewRef = useRef();

  const _onNavigationStateChange = (webViewState: any) => {
    // axios
    //   .get(
    //     'https://api.instagram.com/oauth/authorize?client_id=987475768520032&redirect_uri=https://www.markin-app.site/app/auth&scope=user_profile,user_media&response_type=code',
    //   )
    //   .then(response => {
    //     console.log('dd');
    //   });
    //({data}) => setparams(data));
    if (!webViewState.url.includes('instagram') && plz !== false) {
      setplz(false);
      props.setcode(webViewState.url.split('code='));
      props.setHandleModal(false);
    }
  };
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setHandleModal(false)}>
      <Modal
        style={styles.ModalView}
        isVisible={props.HandleModal}
        onBackdropPress={() => props.setHandleModal(false)}>
        <WebView
          // ref={webviewRef}
          source={{
            uri: 'https://api.instagram.com/oauth/authorize?client_id=987475768520032&redirect_uri=https://www.markin-app.site/app/auth&scope=user_profile,user_media&response_type=code',
          }}
          onNavigationStateChange={e => _onNavigationStateChange(e)}
          style={{marginTop: 40, borderRadius: 20}}
        />
      </Modal>
    </GestureRecognizer>
  );
}
// const OnNavStateChange = newNavState => {
//   const {url} = newNavState;
//   if (!url) return;

//   if (!url.includes('https://www.instagram.com')) {
//     props.setHandleModal(false);
//   }
// };
const styles = StyleSheet.create({
  ModalView: {
    justifyContent: 'flex-end',
    marginTop: 150,
    marginBottom: -10,
    width: '100%',
    marginLeft: -2,
  },
});

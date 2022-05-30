import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import filterimage from '../../../icons/filter.png';
import FilterModal from '../InstaModal/FilterModal';
import {Div} from 'reactnative-ui-bootstrap';
import noprofile from '../../../images/noprofile.png';
export default function Pictures(props) {
  const navigation = useNavigation();
  const [isModal, setisModal] = useState(false);
  const [Sort, setSort] = useState(1);
  const [SortText, setSortText] = useState('최신순');

  return (
    <>
      {/* <TouchableOpacity
        style={styles.currentView}
        onPress={() => setisModal(true)}>
        <Image
          source={filterimage}
          style={{width: 10, height: 10, marginTop: 6, marginRight: 5}}
        />
        <Text style={{fontFamily: 'NotoSansKR-Regular'}}>{SortText}</Text>
      </TouchableOpacity>

      <FilterModal
        isModal={isModal}
        setisModal={setisModal}
        Sort={Sort}
        setSort={setSort}
        setSortText={setSortText}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Div
          className={'row '}
          style={{
            width: '104%',
            marginLeft: '-2%',
            marginTop: '-1%',
            marginBottom: '-2.7%',
          }}>
          {props.Data.map(item => (
            <Div
              className={'col-4'}
              style={{
                aspectRatio: 1,
              }}
              key={item.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MyPic', {
                    id: item.id,
                    profileImg: props.profileImg,
                  })
                }>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                  }}>
                  <Image
                    source={
                      item.media_url === '' || item.media_url === null
                        ? noprofile
                        : {uri: item.media_url}
                    }
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Div>
          ))}
        </Div>
        <View style={{height: 400}}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  currentView: {
    flexDirection: 'row',
    marginLeft: '80%',
    marginTop: 10,
    marginBottom: 10,
  },
});

{
  /* <View style={{zIndex: 10, position: 'absolute'}}>
            <Image source={Time} style={{width: 50, height: 50}} />
          </View> */
}

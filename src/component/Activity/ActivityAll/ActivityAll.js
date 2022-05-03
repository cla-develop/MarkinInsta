/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Cards from './Sections/Cards';
// import SearchSetting from './Sections/SearchSetting';
import searchSet from '../../../images/searchSet.png';
import filterImage from '../../../icons/filter.png';
import SearchFilterModal from './Modals/SearchFilterModal';
import FollowerSoon from './Modals/FollowerSoon';
import LocalModal from './Modals/LocalModal';
import axios from 'axios';
export default function ActivityAll() {
  const [SortText, setSortText] = useState('최신순');
  const [SearchModalVis, setSearchModalVis] = useState(false);
  const [FollowModalVis, setFollowModalVis] = useState(false);
  const [LocalModalVis, setLocalModalVis] = useState(false);
  const [AllResult, setAllResult] = useState([]);
  const [Category, setCategory] = useState('전체');
  const [Type, setType] = useState('전체 유형');
  const [Local, setLocal] = useState('전체 지역');

  useEffect(() => {
    axios
      .get(
        `https://www.markin-app.site/app/activity?type=${Type}&category=${Category}&local=${Local}&orderby=${SortText}`,
      )
      .then(response => {
        setAllResult(response.data.result);
        console.log(AllResult);
      })
      .catch(err => {
        console.log(err);
      });
  }, [Category, Type, Local, SortText]);
  useEffect(() => {
    if (Type !== '방문형') {
      setLocal('전체 지역');
    }
  }, [Type]);
  return (
    <View>
      <View style={{marginTop: 20}}>
        {Type === '방문형' && (
          <TouchableOpacity onPress={() => setLocalModalVis(!LocalModalVis)}>
            <View style={styles.LocalView}>
              <Text style={styles.searchText}>{Local}</Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => setSearchModalVis(!SearchModalVis)}>
          <View style={styles.searchView}>
            <Text style={styles.searchText}>필터</Text>
            <Image source={searchSet} style={styles.searchImg} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterview}
          onPress={() => setFollowModalVis(true)}>
          <Image
            source={filterImage}
            style={{width: 10, height: 10, marginTop: 6, marginRight: 5}}
          />
          <Text style={styles.searchText}>{SortText}</Text>
        </TouchableOpacity>
        <SearchFilterModal
          SearchModalVis={SearchModalVis}
          setSearchModalVis={setSearchModalVis}
          setCategory={setCategory}
          setType={setType}
        />

        <LocalModal
          LocalModalVis={LocalModalVis}
          setLocalModalVis={setLocalModalVis}
          setLocal={setLocal}
          Local={Local}
        />

        <FollowerSoon
          FollowModalVis={FollowModalVis}
          setFollowModalVis={setFollowModalVis}
          SortText={SortText}
          setSortText={setSortText}
        />
      </View>
      <ScrollView style={{marginTop: 30}}>
        <View style={{marginBottom: '80%'}}>
          <Cards AllResult={AllResult} />
        </View>
        <View style={{height: 300, width: 300}}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    width: 80,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    right: '20%',
    top: 5,
  },
  searchImg: {
    width: 15,
    height: 15,
    marginTop: 4,
    transform: [{rotate: '270deg'}],
    marginLeft: 5,
  },
  searchText: {
    color: '#424242',
    fontFamily: 'NotoSansKR-Medium',
    marginLeft: 3,
  },
  filterview: {
    flexDirection: 'row',
    position: 'absolute',
    right: '5%',
    top: 5,
  },
  LocalView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 20,
  },
});

import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import filter from '../../../../icons/filter.png';
import CategoryModal from './modals/CatFolModal/CategoryModal';
import FollowerModal from './modals/FolNumModal/FollwerModal';
import RList from './RList';
import RTiltle from './RTiltle';
// import Search from './Search/Search';
import Searchset from '../../../../images/searchSet.png';

export default function RankList() {
  const [category, setcategory] = useState('전체');
  const [lowerFollower, setlowerFollower] = useState(0);
  const [upperFollower, setupperFollower] = useState(210000000);
  const [cursor, setcursor] = useState(0);
  const [orderby, setorederby] = useState('진짜 영향력순');
  const [FnumLet, setFnumLet] = useState('진짜 영향력순');
  const [CatModalVis, setCatModalVis] = useState(false);
  const [FNumModalVis, setFNumModalVis] = useState(false);
  const [showCorF, setshowCorF] = useState(false);
  const [Sort, setSort] = useState(1);
  const [isSearch, setisSearch] = useState('');

  // const handleSearch = (event: React.SetStateAction<string>) => {
  //   setisSearch(event);
  // };
  const handleCatModlaVisable = () => {
    setshowCorF(false);
    setCatModalVis(!CatModalVis);
  };
  // const handleFolwModalVisable = () => {
  //   setshowCorF(true);
  //   setCatModalVis(!CatModalVis);
  // };
  const handleFNumModalVisable = () => {
    setFNumModalVis(!FNumModalVis);
  };
  const handleCorF = () => {
    setshowCorF(!showCorF);
  };

  // useLayoutEffect(() => {

  // }, []);
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {/* <Search
          isSearch={isSearch}
          setisSearch={setisSearch}
          handleSearch={handleSearch}
        /> */}

        <View style={{flexDirection: 'row', marginLeft: '4%', paddingTop: 15}}>
          <TouchableOpacity
            onPress={handleCatModlaVisable}
            style={{flexDirection: 'row', marginTop: 5}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.followerSoon}>필터</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Image source={Searchset} style={styles.searchImg} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', marginLeft: '57%'}}
            onPress={handleFNumModalVisable}>
            <View style={styles.filterView}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.followerSoon}>{orderby}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image source={filter} style={styles.img} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/*         
          <TouchableOpacity
            onPress={() => setisSearch('')}
            style={{marginLeft: 30, marginTop: 18}}>
            <View>
              <Text
                style={{
                  fontFamily: 'NotoSansKR-Medium',
                  fontSize: 14,
                  color: '#2D2D2D',
                }}>
                취소
              </Text>
            </View>
          </TouchableOpacity>
        )} */}
      </View>
      <View>
        <CategoryModal
          category={category}
          setcategory={setcategory}
          CatModalVis={CatModalVis}
          handleCatModlaVisable={handleCatModlaVisable}
          showCorF={showCorF}
          handleCorF={handleCorF}
          setCatModalVis={setCatModalVis}
          setlowerFollower={setlowerFollower}
          setupperFollower={setupperFollower}
        />
        <FollowerModal
          handleFNumModalVisable={handleFNumModalVisable}
          setFNumModalVis={setFNumModalVis}
          FNumModalVis={FNumModalVis}
          Sort={Sort}
          setSort={setSort}
          FnumLet={orderby}
          setFnumLet={setorederby}
        />
        {/* 순위 타이틀 */}
        <RTiltle />
        {/* 순위 리스트 */}
        <ScrollView
          style={{marginTop: 20}}
          showsVerticalScrollIndicator={false}>
          <RList
            isSearch={isSearch}
            orderby={orderby}
            category={category}
            upperFollower={upperFollower}
            lowerFollower={lowerFollower}
          />
        </ScrollView>
      </View>
      {/* )} */}
    </View>
  );
}
const styles = StyleSheet.create({
  TitleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  outView: {
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    height: 70,
    borderStyle: 'solid',
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'center',
    marginBottom: 3,
  },
  greyBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 60,
    height: 35,
    marginTop: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    opacity: 0.5,
  },
  greyBtn2: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEBEC',
    width: 60,
    height: 35,
    marginTop: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    opacity: 0.5,
  },
  greyBtnText: {
    fontSize: 12,
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'center',
  },
  followerSoon: {
    fontSize: 14,
    fontFamily: 'NotoSansKR-Medium',
    color: '#424242',
    textAlign: 'right',
  },
  filterView: {
    marginTop: 5,
    height: 20,
    paddingLeft: 10,
    width: 100,
    borderColor: 'black',
  },
  searchImg: {
    width: 14,
    height: 14,
    marginTop: 2,
    transform: [{rotate: '270deg'}],
    marginLeft: 3,
  },
  img: {
    position: 'absolute',
    width: 12,
    height: 13,

    opacity: 0.5,
    right: -16,
    top: -15,
  },
});

/* <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity
            style={styles.greyBtn}
            onPress={handleCatModlaVisable}>
            <Text style={styles.greyBtnText}>카테고리</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.greyBtn2}
            onPress={handleFolwModalVisable}>
            <Text style={styles.greyBtnText}>팔로워수</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', marginLeft: 120}}
            onPress={handleFNumModalVisable}>
            <View style={styles.filterView}>
              <Text style={styles.followerSoon}>{FnumLet}</Text>
              <Image
                source={filter}
                style={{width: 12, height: 12, marginTop: 5}}
              />
            </View>
          </TouchableOpacity>
        </View> */

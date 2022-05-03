import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import Categories from './Sections/Categories';
import FSlider from './Sections/FSlider';
export default function CategoryModal(props) {
  const [Cate, setCate] = useState('전체');
  const handleCategory = () => {
    props.setcategory(Cate);
    if (multiSliderValue[0] === 1) props.setlowerFollower(1000);
    if (multiSliderValue[0] === 2) props.setlowerFollower(5000);
    if (multiSliderValue[0] === 3) props.setlowerFollower(10000);
    if (multiSliderValue[0] === 4) props.setlowerFollower(50000);
    if (multiSliderValue[0] === 5) props.setlowerFollower(100000);
    if (multiSliderValue[0] === 6) props.setlowerFollower(500000);
    if (multiSliderValue[1] === 2) props.setupperFollower(5000);
    if (multiSliderValue[1] === 3) props.setupperFollower(10000);
    if (multiSliderValue[1] === 4) props.setupperFollower(50000);
    if (multiSliderValue[1] === 5) props.setupperFollower(100000);
    if (multiSliderValue[1] === 6) props.setupperFollower(500000);
    if (multiSliderValue[1] === 7) props.setupperFollower(210000000);
    props.setCatModalVis(false);
  };
  //완료 버튼

  // const handleCheck = categoryItem => {
  //   if (categoryItem === '전체') {
  //     props.setcategory(category => ['전체']);
  //   }

  //   if (props.category.includes(categoryItem) && categoryItem !== '전체') {
  //     props.setcategory(props.category.filter(order => order !== categoryItem));
  //     handleall();
  //     return;
  //   }
  //   if (props.category.includes('전체')) {
  //     props.setcategory(props.category.filter(order => order !== '전체'));
  //   }
  //   props.setcategory(category => [...category, categoryItem]);
  // };
  // const handleall = () => {
  //   if (props.category.length === 1) {
  //     props.setcategory(category => ['전체']);
  //   }
  // };
  const handleReset = () => {
    props.setCate('전체');
  };

  const [multiSliderValue, setMultiSliderValue] = useState([1, 7]);
  const sliderReset = () => {
    setMultiSliderValue([1, 6]);
  };
  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={() => props.setCatModalVis(false)}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        isVisible={props.CatModalVis}
        onBackdropPress={props.handleCatModlaVisable}>
        <View
          style={{
            height: 500,
            backgroundColor: 'white',
            borderRadius: 35,
          }}>
          {props.showCorF ? (
            <>
              <View
                //팔로워수 모달
                style={{flexDirection: 'row', marginTop: 30, marginLeft: 30}}>
                <TouchableOpacity style={{}} onPress={props.handleCorF}>
                  <Text style={styles.TopFalText}>카테고리</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 20}}>
                  <Text style={styles.TopText}>팔로워 수</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 120, marginTop: 5}}
                  onPress={() => sliderReset()}>
                  <Text style={styles.resetBtn}>초기화</Text>
                </TouchableOpacity>
              </View>
              <FSlider
                multiSliderValue={multiSliderValue}
                setMultiSliderValue={setMultiSliderValue}
              />
              <TouchableOpacity
                style={styles.settingBut}
                onPress={() => handleCategory()}>
                <Text style={styles.settingText}> 설정 </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View
                //카테고리 모달
                style={{flexDirection: 'row', marginTop: 30, marginLeft: 30}}>
                <TouchableOpacity>
                  <Text style={styles.TopText}>카테고리</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 20}}
                  onPress={props.handleCorF}>
                  <Text style={styles.TopFalText}>팔로워 수</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 120, marginTop: 5}}
                  onPress={() => handleReset()}>
                  <Text style={styles.resetBtn}>초기화</Text>
                </TouchableOpacity>
              </View>
              <Categories
                Selected={Cate}
                setSelected={setCate}
                // handleCheck={handleCheck}
                // handleall={handleall}
              />
              <TouchableOpacity
                style={styles.settingBut}
                onPress={() => handleCategory()}>
                <Text style={styles.settingText}> 설정 </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  TopText: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Medium',
  },
  TopFalText: {
    fontSize: 20,
    fontFamily: 'NotoSansKR-Medium',
    color: '#B3B3B3',
  },
  settingBut: {
    marginLeft: '5%',
    width: '90%',
    backgroundColor: 'black',
    borderRadius: 17,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: '80%',
  },
  settingText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'NotoSansKR-Medium',
    textAlign: 'center',
  },
  resetBtn: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    color: '#747474',
  },
});

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import music from '../../../../images/music.png';
import write from '../../../../images/write.png';
import travel from '../../../../images/travel.png';
import pet from '../../../../images/pet.png';
import love from '../../../../images/love.png';
import gym from '../../../../images/gym.png';
import game from '../../../../images/game.png';
import food from '../../../../images/food.png';
import fashion from '../../../../images/fashion.png';
import coffee from '../../../../images/coffee.png';
import beauti from '../../../../images/beauti.png';
import baby from '../../../../images/baby.png';
import Icons from '../../../Icons/Icons';
export default function CatBut(props) {
  const styles = StyleSheet.create({
    CatView: {
      width: 90,
      height: 90,
      borderRadius: 90 / 2,
      shadowColor: '#dedede',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    trueCatView: {
      width: 90,
      height: 90,
      borderRadius: 90 / 2,
      shadowColor: '#dedede',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
    },
    underText: {
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'NotoSansKR-Medium',
    },
  });

  return (
    <View style={{width: '100%', marginTop: 50}}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View style={{marginLeft: 10}}>
          <TouchableOpacity
            style={[
              props.isFood === true ? styles.trueCatView : styles.CatView,
            ]}
            onPress={() => [
              props.setisFood(!props.isFood),
              props.isFood === false
                ? props.setisCnt(props.isCnt + 1)
                : props.setisCnt(props.isCnt - 1),
            ]}>
            <Image source={food} style={{width: 40, height: 40}} />
            {props.isFood === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>음식</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisCoffee(!props.isCoffee),
              props.isCoffee === false
                ? props.setisCnt(props.isCnt + 1)
                : props.setisCnt(props.isCnt - 1),
            ]}
            style={[
              props.isCoffee === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={coffee} style={{width: 40, height: 40}} />
            {props.isCoffee === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>카페</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisBeauti(!props.isBeauti),
              props.isBeauti === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isBeauti === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={beauti} style={{width: 40, height: 40}} />
            {props.isBeauti === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>뷰티</Text>
        </View>
      </View>

      {/* 222222222222222 */}

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <View style={{marginLeft: 10}}>
          <TouchableOpacity
            onPress={() => [
              props.setisFashion(!props.isFashion),
              props.isFashion === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isFashion === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={fashion} style={{width: 40, height: 40}} />
            {props.isFashion === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>패션</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisGym(!props.isGym),
              props.isGym === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isGym === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={gym} style={{width: 40, height: 40}} />
            {props.isGym === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>운동</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisTravel(!props.isTravel),
              props.isTravel === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isTravel === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={travel} style={{width: 40, height: 40}} />
            {props.isTravel === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>여행</Text>
        </View>
      </View>
      {/* 333333333333333333333 */}
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <View style={{marginLeft: 10}}>
          <TouchableOpacity
            style={[
              props.isbaby === true ? styles.trueCatView : styles.CatView,
            ]}
            onPress={() => [
              props.setisbaby(!props.isbaby),
              props.isbaby === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}>
            <Image source={baby} style={{width: 40, height: 40}} />
            {props.isbaby === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>육아</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisPet(!props.isPet),
              props.isPet === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isPet === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={pet} style={{width: 50, height: 50}} />
            {props.isPet === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}> 반려동물 </Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisGame(!props.isGame),
              props.isGame === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isGame === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={game} style={{width: 50, height: 50}} />
            {props.isGame === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}> 게임 </Text>
        </View>
      </View>

      {/* 44444444444444444 */}
      <View style={{flexDirection: 'row', marginTop: 50}}>
        <View style={{marginLeft: 10}}>
          <TouchableOpacity
            onPress={() => [
              props.setisWrite(!props.isWrite),
              props.isWrite === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isWrite === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={write} style={{width: 40, height: 40}} />
            {props.isWrite === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}> 작가 </Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisLove(!props.isLove),
              props.isLove === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isLove === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={love} style={{width: 40, height: 40}} />
            {props.isLove === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>연애</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <TouchableOpacity
            onPress={() => [
              props.setisMusic(!props.isMusic),
              props.isMusic === false
                ? props.setisCnt(++props.isCnt)
                : props.setisCnt(--props.isCnt),
            ]}
            style={[
              props.isMusic === true ? styles.trueCatView : styles.CatView,
            ]}>
            <Image source={music} style={{width: 50, height: 50}} />
            {props.isMusic === true && (
              <Icons.AntDesign
                name="checkcircle"
                size={30}
                color="black"
                style={{position: 'absolute', zIndex: 10, top: 55, left: 70}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.underText}>음악</Text>
        </View>
      </View>
    </View>
  );
}

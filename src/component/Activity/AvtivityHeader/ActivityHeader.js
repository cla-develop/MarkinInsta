import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from '../../Icons/Icons';

export default function ActivityHeader(props) {
  const handlefocusHome = () => {
    props.setStateChange(1);
  };
  const handlefocusALL = () => {
    props.setStateChange(2);
  };
  //   const handlefocusRanking = () => {
  //     props.setstateChange(3);
  //   };
  return (
    <View style={{width: '100%'}}>
      <View style={{paddingTop: 10, flexDirection: 'row'}}>
        {/* <TouchableOpacity
          onPress={() => props.navigateToSearch()}
          style={{flex: 1}}>
          <Icons.Feather
            name="search"
            size={20}
            color="#111"
            style={{left: 30, top: 0}}
          />
        </TouchableOpacity> */}
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}>
          <Text style={styles.Logo}>MARKIN</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {/* <TouchableOpacity
            onPress={() => props.navigateToAlarm()}
            style={{paddingLeft: 80}}>
            <Icons.Feather name="bell" size={20} color="#111" />
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={() => props.navigateToMessage()}
            style={{marginLeft: 15}}>
            <Icons.Ionicons
              name="md-paper-plane-outline"
              size={20}
              color="#111"
            />
          </TouchableOpacity> */}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingTop: 0,
        }}>
        <TouchableOpacity onPress={handlefocusHome} style={{width: '50%'}}>
          {props.StateChange === 1 ? (
            <View style={styles.focusView}>
              <Text style={styles.focusText}>홈</Text>
            </View>
          ) : (
            <View style={styles.unsfocusView}>
              <Text style={styles.greyText}>홈</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handlefocusALL} style={{width: '50%'}}>
          {props.StateChange === 2 ? (
            <View style={styles.focusView}>
              <Text style={styles.focusText}>전체활동</Text>
            </View>
          ) : (
            <View style={styles.unsfocusView}>
              <Text style={styles.greyText}>전체활동</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    textAlign: 'center',
    top: 0,
    fontFamily: 'Quantico-Bold',
    transform: [{translateX: 0}, {translateY: 0}],
    fontSize: 22,
    color: 'black',
  },
  greyText: {
    opacity: 0.5,
    textAlign: 'center',
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
  },
  focusView: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  unsfocusView: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  focusText: {
    textAlign: 'center',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    color: 'black',
  },
});

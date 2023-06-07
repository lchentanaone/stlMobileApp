import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BetStyle as style} from './bet.style';

export default function Bet() {
  return (
    <View style={style.betContainer}>
      <View style={style.content}>
        {/* <View style={style.betFunctions}> */}
        <View style={style.titleSaveBtn}>
          <View>
            <Text style={style.betTitle}>Bet</Text>
          </View>
          <TouchableOpacity style={style.saveOpacity}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.betTotal}>Total: ₱{'150'}</Text>
        {/* </View> */}
      </View>
    </View>
  );
}

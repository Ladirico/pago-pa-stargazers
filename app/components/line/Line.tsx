import React from 'react';
import {StyleSheet, View} from 'react-native';

const Line = () => {
  return <View style={style.line} testID="line-test" />;
};

const style = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    marginLeft: '25%',
    marginRight: '25%',
    borderBottomColor: '#ffffff',
  },
});
export default Line;

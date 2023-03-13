import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Line from '../line/Line';

interface Props {
  url?: string;
  title?: string;
  subtitle?: string;
}

const PageHeader = ({url, title, subtitle}: Props) => {
  return (
    <View style={style.container_logo_name} testID="header-test">
      <Image source={{uri: url}} style={style.img} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.subtitle}>{subtitle}</Text>
      <Line />
    </View>
  );
};

const style = StyleSheet.create({
  container_logo_name: {
    paddingTop: 30,
    marginBottom: 20,
    paddingBottom: 20,
  },
  img: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    borderRadius: 80,
  },
  title: {
    paddingTop: 10,
    color: '#ffffff',
    fontSize: 50,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
  },
  subtitle: {
    paddingTop: 10,
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
});
export default PageHeader;

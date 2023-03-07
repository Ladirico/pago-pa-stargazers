import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  url?: string;
  title?: string;
  subtitle?: string;
}

const PageHeader = ({url, title, subtitle}: Props) => {
  return (
    <View style={style.container_logo_name}>
      <Image source={{uri: url}} style={style.img} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.subtitle}>{subtitle}</Text>
      <View style={style.line} />
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
  },
  line: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    marginLeft: '25%',
    marginRight: '25%',
    borderBottomColor: '#ffffff',
  },
});
export default PageHeader;

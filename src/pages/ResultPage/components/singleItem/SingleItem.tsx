import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SingleItem = (props: any) => {
  const {isStarWrapper, text, avatarUrl} = props;
  return (
    <View style={isStarWrapper ? style.wrapperStars1 : style.wrapperStars}>
      {isStarWrapper ? (
        <Text style={style.star}>&#9734;</Text>
      ) : (
        <Image style={style.img} source={{uri: avatarUrl}} />
      )}
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  star: {
    color: 'yellow',
    fontSize: 20,
  },
  wrapperStars: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  wrapperStars1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderColor: 'white',
    borderWidth: 2,
    paddingTop: 30,
    paddingBottom: 30,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 80,
    marginRight: 10,
  },
});

export default SingleItem;

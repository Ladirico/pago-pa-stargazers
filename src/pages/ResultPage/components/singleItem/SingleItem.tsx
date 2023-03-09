import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface Props {
  isStarWrapper?: boolean | false;
  text: string | number;
  avatarUrl?: string;
}

const SingleItem = (props: Props) => {
  const {isStarWrapper = false, text, avatarUrl} = props;
  return (
    <View style={isStarWrapper ? style.wrapperStars : style.wrapper}>
      {isStarWrapper ? (
        <Text style={style.star}>&#9734;</Text>
      ) : (
        <Image style={style.img} source={{uri: avatarUrl}} />
      )}
      <Text style={style.text} ellipsizeMode="clip" numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  star: {
    color: 'yellow',
    fontSize: 20,
  },
  wrapper: {
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
  wrapperStars: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: 130,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 80,
    marginRight: 10,
  },
});

export default SingleItem;

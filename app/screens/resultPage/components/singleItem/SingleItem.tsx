import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './Styles';

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

export default SingleItem;

import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './Styles';

interface Props {
  isStarWrapper?: boolean | false;
  text: string | number;
  avatarUrl?: string;
}

const SingleItem: React.FC<Props> = props => {
  const {isStarWrapper = false, text, avatarUrl} = props;
  return (
    <View style={isStarWrapper ? style.wrapperStars : style.wrapper}>
      {isStarWrapper ? (
        <Text testID="star-text-test" style={style.star}>
          &#9734;
        </Text>
      ) : (
        <Image
          testID="image-test"
          style={style.img}
          source={{uri: avatarUrl}}
        />
      )}
      <Text
        testID="text-test"
        style={style.text}
        ellipsizeMode="clip"
        numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

export default SingleItem;

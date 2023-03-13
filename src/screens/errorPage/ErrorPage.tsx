import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList} from '../../App';
import {style} from './Styles';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ErrorPage'>;
};

const ErrorPage = ({navigation}: Props) => {
  const goBackToFirstPage = () => {
    navigation.navigate('SearchPage');
  };

  return (
    <View style={style.container} testID="error-page-test">
      <Image
        source={{
          uri: 'https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png',
        }}
        style={style.img}
      />
      <Text style={style.text}>
        Sorry, a technical error has occurred. You may have entered a
        nonexistent username.
      </Text>
      <TouchableOpacity onPress={goBackToFirstPage} style={style.button}>
        <Text style={style.button_text}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorPage;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList} from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ErrorPage'>;

const ErrorPage = ({navigation}: Props) => {
  const goBackToFirstPage = () => {
    navigation.navigate('SearchPage');
  };

  return (
    <View style={style.container}>
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

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#2da44e',
    borderRadius: 6,
    width: 130,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  button_text: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    lineHeight: 20,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 40,
    marginTop: 40,
  },
});

export default ErrorPage;

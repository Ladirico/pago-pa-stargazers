import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from 'react-native';

const SearchPage = ({navigation}: any) => {
  const [textInput, setTextInput] = useState<string>('');

  const onChangeText = (text: string) => {
    console.log('text', text);
    setTextInput(text);
  };

  const goForward = () => {
    console.log('eccoci');
    navigation.navigate('Result', {textInput: textInput});
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View>
          <Text style={style.title}>Title</Text>
          <Text style={style.subtitle}>Subtitle</Text>
          <TextInput
            style={style.input}
            editable
            onChangeText={text => onChangeText(text)}
          />
          <Button onPress={goForward} title="avanti" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F7EFCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 10,
    color: '#cc3675',
    fontSize: 60,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingTop: 10,
    color: '#cc3675',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputWrapper: {
    marginTop: '20px',
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    width: '100%',
  },
  container_button: {
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#cc3675',
    borderRadius: 10,
    width: 100,
    alignSelf: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  button_text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'SNORTER PERSONAL USE',
    alignSelf: 'center',
  },
});

export default SearchPage;

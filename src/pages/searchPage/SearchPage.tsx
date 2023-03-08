import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PageHeader from '../../components/PageHeader/PageHeader';

const SearchPage = ({navigation}: any) => {
  const [textInput, setTextInput] = useState<string>('');

  const onChangeText = (text: string) => {
    setTextInput(text);
  };

  const goForward = () => {
    navigation.navigate('ResultPage', {textInput: textInput});
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <PageHeader
          url="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          title="Stalking Favs"
          subtitle="Search for information on youre favourite creators on GitHub"
        />

        <View style={style.inputWrapper}>
          <TextInput
            style={style.input}
            placeholder="Search by name"
            editable
            onChangeText={onChangeText}
          />
        </View>
        <View style={style.container_button}>
          <TouchableOpacity onPress={goForward} style={style.button}>
            <Text style={style.button_text}>Start Stalking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#24292f',
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    textAlign: 'center',
    height: 50,
    backgroundColor: '#f6f8fa',
    borderColor: '#d0d7de',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  container_button: {
    paddingTop: 40,
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
});

export default SearchPage;

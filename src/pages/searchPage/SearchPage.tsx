import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

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
        <View style={style.container_logo_name}>
          <Image
            source={{
              uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            }}
            style={style.img}
          />
          <Text style={style.title}>Stalking Favs</Text>
          <Text style={style.subtitle}>
            Research information about your favorites creators on GitHub
          </Text>
          <View style={style.line} />
        </View>
        <View style={style.inputWrapper}>
          <TextInput style={style.input} editable onChangeText={onChangeText} />
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
    backgroundColor: '#000000',
  },
  container_logo_name: {
    paddingTop: 30,
    marginBottom: 20,
    paddingBottom: 20,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 80,
  },
  line: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    marginLeft: '25%',
    marginRight: '25%',
    borderBottomColor: '#ffffff',
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
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    textAlign: 'center',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  container_button: {
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#2da44e',
    borderRadius: 6,
    width: 150,
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

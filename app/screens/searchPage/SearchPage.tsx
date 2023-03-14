import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RootStackParamList} from '../../App';
import PageHeader from '../../components/pageHeader/PageHeader';
import {getUserInfo} from '../../services/GithubApis';
import {responseUserInfoInterface} from '../../services/responseInterfaces/ResponseUserInfoInterface';
import {style} from './Styles';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SearchPage'>;
};

const SearchPage = ({navigation}: Props) => {
  const [textInput, setTextInput] = useState<string>('');

  const onChangeText = (text: string) => {
    setTextInput(text);
  };

  const goForward = () => {
    getUserInfo(textInput)
      .then((resp: AxiosResponse<responseUserInfoInterface>) => {
        navigation.navigate('ResultPage', {userInfo: resp.data});
      })
      .catch(() => navigation.navigate('ErrorPage'));
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <PageHeader
          url="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          title="Stalking Favs"
          subtitle="Search for information on your favorite creators on GitHub"
        />

        <View style={style.inputWrapper}>
          <TextInput
            testID="input-test"
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

export default SearchPage;

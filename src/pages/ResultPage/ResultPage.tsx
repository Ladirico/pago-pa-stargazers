import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import PageHeader from '../../components/PageHeader/PageHeader';
import {getAllUserRepos, getUserInfo} from '../../services/GithubApis';
import {responseAllUserReposInterface} from '../../services/Interfaces/ResponseAllUserReposInterface';
import {responseUserInfoInterface} from '../../services/Interfaces/ResponseUserInfoInterface';

type RootStackParamList = {
  ResultPage: {textInput: string};
  SearchPage: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'ResultPage'>;

const ResultPage = ({route}: Props) => {
  const {params} = route;
  const [userInfo, setUserInfo] = useState<responseUserInfoInterface>();
  const [repos, setRepos] = useState<Array<string>>([]);

  useEffect(() => {
    getUserInfo(params.textInput)
      .then((resp: AxiosResponse<responseUserInfoInterface>) =>
        setUserInfo(resp.data),
      )
      .catch(err => console.log('errr', err));
    getAllUserRepos(params.textInput)
      .then((resp: AxiosResponse) =>
        setRepos(resp.data.map((el: responseAllUserReposInterface) => el.name)),
      )
      .catch(err => console.log('errr', err));
  }, [params.textInput]);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <PageHeader
          url={userInfo?.avatar_url}
          title={userInfo?.name}
          subtitle={params.textInput}
        />
        <View style={style.containerSelect}>
          {repos.length > 0 ? (
            <SelectDropdown
              buttonStyle={style.dropdownBtnStyle}
              buttonTextStyle={style.dropdownBtnTxtStyle}
              dropdownStyle={style.dropdownDropdownStyle}
              rowStyle={style.dropdownRowStyle}
              rowTextStyle={style.dropdownRowTxtStyle}
              data={repos}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem;
              }}
              rowTextForSelection={item => {
                return item;
              }}
            />
          ) : (
            <Text>No result</Text>
          )}
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
  containerSelect: {
    width: '100%',
    alignItems: 'center',
  },
  dropdownBtnStyle: {
    width: '70%',
    height: 50,
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  dropdownBtnTxtStyle: {color: '#000000', textAlign: 'left'},
  dropdownDropdownStyle: {backgroundColor: '#ffffff'},
  dropdownRowStyle: {backgroundColor: '#ffffff', borderBottomColor: '#000000'},
  dropdownRowTxtStyle: {color: '#000000', textAlign: 'center'},
  input: {
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 20,
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
    alignSelf: 'center',
  },
});

export default ResultPage;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {RootStackParamList} from '../../../App';
import PageHeader from '../../components/pageHeader/PageHeader';
import {getAllUserRepos, getStargazers} from '../../services/GithubApis';
import {responseAllUserReposInterface} from '../../services/responseInterfaces/ResponseAllUserReposInterface';
import {responseStargazersInterfaces} from '../../services/responseInterfaces/ResponseStargazersInterfaces';
import ShowStargazers from './components/showStargazers/ShowStargazers';

type Props = NativeStackScreenProps<RootStackParamList, 'ResultPage'>;

const ResultPage = ({route, navigation}: Props) => {
  const {params} = route;
  const [stargazers, setStargazers] =
    useState<responseStargazersInterfaces[]>();
  const [repos, setRepos] = useState<Array<string>>();

  const onChangeValue = (selectedItem: string) => {
    if (params.userInfo?.login) {
      getStargazers(params.userInfo.login, selectedItem)
        .then(resp => setStargazers(resp.data))
        .catch(() => navigation.navigate('ErrorPage'));
    }
  };

  useEffect(() => {
    getAllUserRepos(params.userInfo.login)
      .then((response: AxiosResponse) =>
        setRepos(
          response.data.map((el: responseAllUserReposInterface) => el.name),
        ),
      )
      .catch(() => navigation.navigate('ErrorPage'));
  }, [navigation, params.userInfo.login]);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        {!!repos ? (
          <>
            <PageHeader
              url={params.userInfo?.avatar_url}
              title={params.userInfo?.name}
              subtitle={params.userInfo?.login}
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
                  onSelect={selectedItem => {
                    onChangeValue(selectedItem);
                  }}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem;
                  }}
                  rowTextForSelection={item => {
                    return item;
                  }}
                />
              ) : (
                <Text style={style.text}>No result</Text>
              )}
              <ShowStargazers stargazers={stargazers} />
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="#2da44e" />
        )}
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
    backgroundColor: '#f6f8fa',
    borderColor: '#d0d7de',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dropdownBtnTxtStyle: {color: '#000000', textAlign: 'left'},
  dropdownDropdownStyle: {backgroundColor: '#f6f8fa'},
  dropdownRowStyle: {backgroundColor: '#f6f8fa', borderBottomColor: '#000000'},
  dropdownRowTxtStyle: {color: '#000000', textAlign: 'center'},
});

export default ResultPage;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import PageHeader from '../../components/pageHeader/PageHeader';
import {
  getAllUserRepos,
  getStargazers,
  getUserInfo,
} from '../../services/GithubApis';
import {responseAllUserReposInterface} from '../../services/responseInterfaces/ResponseAllUserReposInterface';
import {responseStargazersInterfaces} from '../../services/responseInterfaces/ResponseStargazersInterfaces';
import {responseUserInfoInterface} from '../../services/responseInterfaces/ResponseUserInfoInterface';
import ShowStargazers from './components/showStargazers/ShowStargazers';

type RootStackParamList = {
  ResultPage: {textInput: string};
  SearchPage: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'ResultPage'>;

const ResultPage = ({route}: Props) => {
  const {params} = route;
  const [userInfo, setUserInfo] = useState<responseUserInfoInterface>();
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [stargazers, setStargazers] =
    useState<responseStargazersInterfaces[]>();
  const [repos, setRepos] = useState<Array<string>>([]);

  const onChangeValue = (selectedItem: string) => {
    if (userInfo?.login) {
      setShowSpinner(true);
      getStargazers(userInfo.login, selectedItem)
        .then(resp => setStargazers(resp.data))
        .catch(err => console.log('err', err))
        .finally(() => {
          setShowSpinner(false);
        });
    }
  };

  useEffect(() => {
    setShowSpinner(true);
    getUserInfo(params.textInput)
      .then((resp: AxiosResponse<responseUserInfoInterface>) => {
        setUserInfo(resp.data);
        getAllUserRepos(resp.data.login)
          .then((response: AxiosResponse) =>
            setRepos(
              response.data.map((el: responseAllUserReposInterface) => el.name),
            ),
          )
          .catch(err => console.log('err', err));
      })
      .catch(err => console.log('errr', err))
      .finally(() => {
        setShowSpinner(false);
      });
  }, [params.textInput]);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        {showSpinner ? (
          <ActivityIndicator size="large" color="#2da44e" />
        ) : (
          <>
            <PageHeader
              url={userInfo?.avatar_url}
              title={userInfo?.name}
              subtitle={userInfo?.login}
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
                <Text>No result</Text>
              )}
              <ShowStargazers stargazers={stargazers} />
            </View>
          </>
        )}
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
  dropdownBtnTxtStyle: {color: '#24292f', textAlign: 'left'},
  dropdownDropdownStyle: {backgroundColor: '#f6f8fa'},
  dropdownRowStyle: {backgroundColor: '#f6f8fa', borderBottomColor: '#24292f'},
  dropdownRowTxtStyle: {color: '#24292f', textAlign: 'center'},
});

export default ResultPage;

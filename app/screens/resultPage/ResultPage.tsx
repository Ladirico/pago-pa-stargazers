import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {RootStackParamList} from '../../App';
import PageHeader from '../../components/pageHeader/PageHeader';
import {getAllUserRepos, getStargazers} from '../../services/GithubApis';
import {responseAllUserReposInterface} from '../../services/responseInterfaces/ResponseAllUserReposInterface';
import {responseStargazersInterfaces} from '../../services/responseInterfaces/ResponseStargazersInterfaces';
import ShowStargazers from './components/showStargazers/ShowStargazers';
import {style} from './Styles';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ResultPage'>;
  route: RouteProp<RootStackParamList, 'ResultPage'>;
};

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
        {repos ? (
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
          <View style={style.wrapperSpinner}>
            <ActivityIndicator size="large" color="#2da44e" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPage;

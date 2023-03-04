import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {getAllUserRepos} from '../../services/GithubApis';

const ResultPage: React.FC = () => {
  const [state, setState] = useState<Array<string>>([]);

  useEffect(() => {
    getAllUserRepos()
      .then((resp: any) => setState(resp.data.map((el: any) => el.full_name)))
      .catch(err => console.log('err', err));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>
            {state && (
              <SelectDropdown
                data={state}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            )}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPage;

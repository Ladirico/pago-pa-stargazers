import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {getAllUserRepos} from '../../services/GithubApis';
import useDebounce from '../../utils/hooks/useDebounce';

const ResultPage: React.FC = (props: any) => {
  // const [repos, setRepos] = useState<Array<string>>([]);
  // const debouncedSearchTerm = useDebounce(textInput, 1000);
  console.log('valore passato', props);
  const onChangeText = (text: string) => {
    console.log('text', text);
    // setTextInput(text);
  };

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     getAllUserRepos(debouncedSearchTerm)
  //       .then((resp: any) => setRepos(resp.data.map((el: any) => el.full_name)))
  //       .catch(err => console.log('err', err));
  //   } else {
  //     setRepos([]);
  //   }
  // }, [debouncedSearchTerm]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TextInput
            editable
            onChangeText={text => onChangeText(text)}
            style={{padding: 10, borderColor: 'black'}}
          />
          {/* {textInput && (
            <Text>
              {repos !== [] ? (
                <SelectDropdown
                  data={repos}
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
              ) : (
                <Text>No result</Text>
              )}
            </Text>
          )} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPage;

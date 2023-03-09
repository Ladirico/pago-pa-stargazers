import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultPage from './src/pages/resultPage/ResultPage';
import SearchPage from './src/pages/searchPage/SearchPage';
import ErrorPage from './src/pages/errorPage/ErrorPage';

export type RootStackParamList = {
  ResultPage: {textInput: string};
  SearchPage: undefined;
  ErrorPage: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
        <Stack.Screen name="ErrorPage" component={ErrorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

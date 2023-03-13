import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultPage from './screens/resultPage/ResultPage';
import SearchPage from './screens/searchPage/SearchPage';
import ErrorPage from './screens/errorPage/ErrorPage';
import {responseUserInfoInterface} from './services/responseInterfaces/ResponseUserInfoInterface';

export type RootStackParamList = {
  ResultPage: {userInfo: responseUserInfoInterface};
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
